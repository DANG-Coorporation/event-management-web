import {
  Box,
  Center,
  Divider,
  Grid,
  HStack,
  Input,
  Text,
  Tooltip,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { BsCalendarWeek } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { PiMapPinFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalCategory,
  setModalEventDateTime,
  setModalGetEventLocation,
  setOrganizerPhoto,
} from "../../app/features/createEvent/createEventSlicer";
import configConstants from "../../data/config";
import configTime from "../../data/configTime";
import formatConstants from "../../data/format.constants";
import topicConstants from "../../data/topic.constants";
import { convertDateTimeFormat } from "../../utils/dateHelper";
import style from "./style.module.css";

export default function CreateEventInformation() {
  const createEvent = useSelector((state) => state.createEvent);
  const organizerPictureState = useSelector(
    (state) => state.createEvent.organizerPhoto
  );
  const dispatch = useDispatch();
  const openModalCategory = () => dispatch(setModalCategory(true));
  const organizerPictureChooseFile = (event) => {
    dispatch(setOrganizerPhoto(URL.createObjectURL(event.target.files[0])));
  };
  const openUploadPhoto = () => {
    uploadPhotoButton.current.click();
  };

  const [isShowDeleteOrganizerPhoto, setIsShowDeleteOrganizerPhoto] =
    useBoolean(false);
  const uploadPhotoButton = useRef(null);
  const onRemoveOrgPhoto = () => {
    dispatch(setOrganizerPhoto(null));
    uploadPhotoButton.current.value = null;
  };
  const onOpenModalSetTime = () => {
    dispatch(setModalEventDateTime(true));
  };
  const onOpenModalGetEventLocation = () =>
    dispatch(setModalGetEventLocation(true));

  return (
    <>
      <VStack
        position={"absolute"}
        mt={"420px"}
        border={"2px solid"}
        borderRadius={"0 0 20px 20px"}
        borderColor={"gray.300"}
        borderTop={"none"}
        width={"100%"}
        paddingBottom={"50px"}
      >
        <Input
          className={style["event-title-input"]}
          color={"blackAlpha.800"}
          fontSize={"1.8em"}
          width={"90%"}
          mt={"20px"}
          placeholder='Judul acara'
          style={{
            border: "none",
          }}
          focusBorderColor='transparent'
        ></Input>
        <Box width={"90%"} color={"#0049cc"} onClick={openModalCategory}>
          <HStack>
            <Text>{formatConstants[createEvent.formatIndex]}</Text>
            <GoDotFill size={"15px"} color='#0049cc' />
            <Text>{topicConstants[createEvent.topicIndex]}</Text>
            <AiFillEdit size={"20px"} color='#0049cc' />
          </HStack>
        </Box>
        <Divider width={"95%"} mt={"10px"} />
        <Grid templateColumns={"1fr 1fr 1fr"} width={"90%"} gap={"10px"}>
          <VStack>
            <Text className={style["text-left"]}>Diselenggarakan Oleh</Text>
            <Grid
              templateColumns={"1fr 3fr"}
              gap={"10px"}
              alignItems={"center"}
            >
              <Box
                height={"67px"}
                width={"67px"}
                border={"1px"}
                borderColor={"gray.300"}
                borderRadius={"37px"}
                ml={"0px"}
                bgImage={
                  organizerPictureState
                    ? `url(${organizerPictureState})`
                    : "none"
                }
                backgroundSize={"cover"}
                onMouseOver={() => setIsShowDeleteOrganizerPhoto.on()}
                onMouseOut={() => setIsShowDeleteOrganizerPhoto.off()}
              >
                <Tooltip
                  label='Hapus foto'
                  aria-label='Hapus foto'
                  hidden={
                    !(organizerPictureState && isShowDeleteOrganizerPhoto)
                  }
                >
                  <Center
                    height={"100%"}
                    border={"1px"}
                    borderColor={"gray.300"}
                    borderRadius={"37px"}
                    hidden={
                      !(organizerPictureState && isShowDeleteOrganizerPhoto)
                    }
                    bgColor={"whiteAlpha.800"}
                    onClick={onRemoveOrgPhoto}
                    cursor={"pointer"}
                  >
                    <BiSolidTrashAlt size={"30px"} />
                  </Center>
                </Tooltip>
                <Tooltip
                  label='Tambah Foto'
                  aria-label='Tambah Foto'
                  hidden={organizerPictureState}
                >
                  <Center
                    height={"100%"}
                    border={"1px"}
                    borderColor={"gray.300"}
                    borderRadius={"37px"}
                    bgColor={"whiteAlpha.800"}
                    hidden={organizerPictureState}
                    onClick={!organizerPictureState ? openUploadPhoto : null}
                    cursor={"pointer"}
                  >
                    <IoIosAdd size={"35px"} />
                  </Center>
                </Tooltip>
              </Box>
              <Text width={"95%"}>{createEvent.userFullName}</Text>
              <input
                ref={uploadPhotoButton}
                type='file'
                accept={configConstants.imageExtensionAllowed}
                onChange={(e) => {
                  organizerPictureChooseFile(e);
                }}
                hidden
              />
            </Grid>
          </VStack>
          <VStack onClick={onOpenModalSetTime} cursor={"pointer"}>
            <Text className={style["text-left"]}>Tanggal & Waktu</Text>
            <HStack ml={"0px"} mr={"auto"}>
              <BsCalendarWeek />{" "}
              <Text>
                {convertDateTimeFormat(
                  createEvent.eventTime.date.start,
                  configTime.iso_date,
                  configTime.date_month_string
                )}
                -{" "}
                {convertDateTimeFormat(
                  createEvent.eventTime.date.end,
                  configTime.iso_date,
                  configTime.date_month_string
                )}
              </Text>
              <AiFillEdit size={"20px"} color='#0049cc' />
            </HStack>
            <HStack ml={"0px"} mr={"auto"}>
              <FaRegClock />{" "}
              <Text>
                {" "}
                {createEvent.eventTime.time.start} -{" "}
                {createEvent.eventTime.time.end}
              </Text>
              <AiFillEdit size={"20px"} color='#0049cc' />
            </HStack>
          </VStack>

          <VStack cursor={"pointer"} onClick={onOpenModalGetEventLocation}>
            <Text className={style["text-left"]}>Lokasi</Text>
            <HStack ml={"0px"} mr={"auto"}>
              <PiMapPinFill size={"25px"} /> <Text> Online Event</Text>
              <AiFillEdit size={"20px"} color='#0049cc' />
            </HStack>
          </VStack>
        </Grid>
      </VStack>
    </>
  );
}
