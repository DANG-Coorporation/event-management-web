import {
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddressSuggestions, getCitySuggestions } from "../../../api/geoApi";
import {
  setEventAddressCity,
  setEventAddressCoordinateLat,
  setEventAddressCoordinateLong,
  setEventAddressName,
  setEventAddressPlaceName,
  setModalGetEventLocation,
} from "../../../app/features/createEvent/createEventSlicer";
import { startDelayTimerAsync } from "../../../utils/debouce";
import OpenStreetMapLoader from "../../ui/map/openStreepMap";
import style from "./style.module.css";

export default function ModalGetEventLocation() {
  const event = useSelector((state) => state.createEvent);
  const dispatch = useDispatch();
  const isOpen = event.modalStatus.isOpenModalGetEventLocation;
  const onClose = () => dispatch(setModalGetEventLocation(false));

  const [location, setLocation] = useState(event.data.address.placeName);
  const [city, setCity] = useState(event.data.address.city);
  const [suggestLocation, setSuggestLocation] = useState([]);
  const [suggestCity, setSuggestCity] = useState([]);
  const [locationListObj, setLocationListObj] = useState([]);
  const [addressObj, setAddressObj] = useState({});
  const [addressName, setAddressName] = useState(event.data.address.name);
  const [isEnableFindLocation, setEnableFindLocation] = useState(false);

  const onEnableFindLocation = () => {
    setEnableFindLocation(true);
  };

  const offEnableFindLocation = () => {
    setEnableFindLocation(false);
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    const filteredSuggestions = suggestCity.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestCity(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion);

    setSuggestCity([]);
  };

  const handleLocationClick = (suggestion) => {
    setLocation(suggestion);
    setSuggestLocation([]);
    const getAddress = locationListObj.filter((location) => {
      return location.display_name === suggestion;
    })[0];
    setAddressObj(getAddress);
    dispatch(setEventAddressCoordinateLat(parseFloat(getAddress.lat)));
    dispatch(setEventAddressCoordinateLong(parseFloat(getAddress.lon)));
    offEnableFindLocation();
  };

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };

  const onSave = () => {
    dispatch(setEventAddressName(addressName));
    dispatch(setEventAddressCity(city));
    dispatch(setEventAddressPlaceName(location));
    if (addressObj.lat) {
      dispatch(setEventAddressCoordinateLat(parseFloat(addressObj.lat)));
    }
    if (addressObj.lon) {
      dispatch(setEventAddressCoordinateLong(parseFloat(addressObj.lon)));
    }
    onClose();
  };

  useEffect(() => {
    async function getCityList(address) {
      await startDelayTimerAsync(1500, async () => {
        const result = await getCitySuggestions(address);
        const cityList = result.map((map) => map.display_name);

        setSuggestCity(cityList);
      });
    }
    if (city.length > 2) {
      getCityList(city);
    } else {
      setSuggestCity([]);
    }
  }, [city]);

  useEffect(() => {
    async function getLocation(address) {
      if (!isEnableFindLocation) return;
      await startDelayTimerAsync(1500, async () => {
        const result = await getAddressSuggestions(address);
        setLocationListObj(result);
        const locationList = result.map((map) => map.display_name);
        setSuggestLocation(locationList);
      });
    }

    if (location.length > 2) {
      getLocation(location);
    } else {
      setSuggestLocation([]);
    }
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      setSuggestLocation([]);
      setSuggestCity([]);
    }
  }, [isOpen]);

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Lokasi - Event Offline</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormHelperText>
                Kamu dapat melakukan pengecekan status vaksinasi dengan
                mengaktifkan Peduli Lindungi di Pengaturan Tambahan.
              </FormHelperText>
              <Divider pt={"15px"} />
              <FormLabel>Nama Alamat</FormLabel>
              <Input
                placeholder='Nama Alamat'
                value={addressName}
                onChange={(e) => {
                  setAddressName(e.target.value);
                }}
              />

              <FormHelperText>sisa karakter 50</FormHelperText>
              <FormLabel>Alamat</FormLabel>
              <Input
                placeholder='Alamat'
                onChange={(e) => {
                  onChangeLocation(e);
                  onEnableFindLocation();
                }}
                value={location}
              />
              <div style={{ position: "relative" }}>
                {suggestLocation.length > 0 && (
                  <List
                    mt={2}
                    borderWidth='1px'
                    borderColor='gray.200'
                    borderRadius='md'
                    style={{
                      position: "absolute",
                      display: "block",
                      top: "100%",
                      zIndex: 1,
                    }}
                  >
                    {suggestLocation.map((suggestion, index) => (
                      <ListItem
                        key={`${index}-${suggestion}`}
                        p={2}
                        bgColor={"white"}
                        _hover={{ bg: "gray.100", cursor: "pointer" }}
                        onClick={() => handleLocationClick(suggestion)}
                      >
                        <Text>{suggestion}</Text>
                      </ListItem>
                    ))}
                  </List>
                )}
              </div>
              <FormLabel>Kota</FormLabel>
              <Input
                placeholder='Kota'
                value={city}
                onChange={handleInputChange}
              />
              <div style={{ position: "relative" }}>
                {suggestCity.length > 0 && (
                  <List
                    mt={2}
                    borderWidth='1px'
                    borderColor='gray.200'
                    borderRadius='md'
                    style={{
                      position: "absolute",
                      display: "block",
                      top: "100%",
                      zIndex: 1,
                    }}
                  >
                    {suggestCity.map((suggestion, index) => (
                      <ListItem
                        key={`${index}-${suggestion}`}
                        p={2}
                        bgColor={"white"}
                        _hover={{ bg: "gray.100", cursor: "pointer" }}
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <Text>{suggestion}</Text>
                      </ListItem>
                    ))}
                  </List>
                )}
              </div>
              <div>
                <FormLabel>Lokasi di map</FormLabel>
                <OpenStreetMapLoader />
              </div>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onSave} width={"100%"}>
              Simpan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
