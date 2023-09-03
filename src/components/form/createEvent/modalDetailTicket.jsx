import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTicketTier,
  editTicketByIndex,
  setModalDetilTicket,
  setModalDetileTicketStatus,
  ticketType,
} from "../../../app/features/createEvent/createEventSlicer";
import configConstants from "../../../data/config";
import { diffTwoDate } from "../../../utils/dateHelper";

function convertRupiahToNumeric(input) {
  const numericValue = input.replace(/Rp\s|\./g, "");
  const numericAmount = parseFloat(numericValue);
  if (!isNaN(numericAmount)) {
    return numericAmount;
  } else {
    return null; // or throw an error, return a message, etc.
  }
}

export default function ModalDetailTicketCreateEvent() {
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state) => state.createEvent.modalStatus.isOpenModalDetailTicket
  );
  const type = useSelector(
    (state) => state.createEvent.modal.detailTicket.type
  );

  const editTicket = useSelector(
    (state) => state.createEvent.modal.detailTicket
  );
  const draftTicketName = useSelector(
    (state) => state.createEvent.modal.detailTicket.ticketName
  );
  const dateSell = useRef(null);
  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0);
  const [ticketQty, setTicketQty] = useState(0);
  const [ticketDesc, setTicketDesc] = useState("");
  const [formattedPrice, setFormattedPrice] = useState("Rp 0");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("10:00");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("11:00");
  const toast = useToast();
  const [endTimeHourList, setEndTimeHourList] = useState([
    ...configConstants.hourList,
  ]);

  const onClose = () => {
    setTicketName("");
    setTicketPrice(0);
    setTicketQty(0);
    setTicketDesc("");
    setFormattedPrice("Rp 0");
    setStartDate("");
    setStartTime("10:00");
    setEndDate("");
    setEndTime("11:00");
    dispatch(setModalDetileTicketStatus(false));
    dispatch(
      setModalDetilTicket({
        type: "",
        ticketName: "",
        ticketQty: 0,
        ticketDesc: "",
        startDate: "",
        startTime: "",
        endDate: "",
        endTime: "",
      })
    );
  };

  const onNext = () => {
    dateSell.current.click();
  };

  const onChangeTicketName = (e) => {
    if (e.target.value.length > 50) return;
    setTicketName(e.target.value);
  };

  const onChangeTicketQty = (e) => {
    const value = e.target.value;
    const parseValue = parseInt(value);

    if (value > 1000) {
      setTicketQty(1000);
      return;
    }
    if (isNaN(parseValue)) {
      setTicketQty(0);
      return;
    }
    setTicketQty(parseValue.toString());
  };

  const onChangeTicketDesc = (e) => {
    if (e.target.value.length > 140) return;
    setTicketDesc(e.target.value);
  };

  const formatCurrency = (value) => {
    // Format and store the numeric price
    let numericValue = convertRupiahToNumeric(value);
    if (numericValue >= 10000000) {
      setTicketPrice(10000000);
      numericValue = 10000000;
    }
    if (numericValue !== null) {
      setTicketPrice(numericValue);
    }

    // Format the input value for display
    const formatted = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(numericValue);

    setFormattedPrice(formatted);
  };
  const onToastError = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  const onSave = () => {
    if (
      ticketName === "" ||
      (type !== ticketType.free.name && ticketPrice < 20000) ||
      ticketQty === 0 ||
      ticketDesc === "" ||
      startDate === "" ||
      endDate === "" ||
      endTime === ""
    ) {
      onToastError();
      return;
    }
    const ticket = { sellPeriod: {} };
    ticket["name"] = ticketName;
    ticket["price"] = ticketPrice;
    ticket["quota"] = ticketQty;
    ticket["description"] = ticketDesc;
    ticket["ticketType"] = type;
    ticket["sellPeriod"]["start"] = `${startDate} ${startTime}`;
    ticket["sellPeriod"]["end"] = `${endDate} ${endTime}`;
    //   if (editTicket.index !== null) {
    //     dispatch(
    //       editTicketByIndex({
    //         index: editTicket.index,
    //         data: ticket,
    //       })
    //     );
    //     onClose();
    //     return;
    //   }
    dispatch(addTicketTier(ticket));
    onClose();
  };

  // useEffect(() => {
  //   if (isOpen) {

  //   }
  // }, [isOpen]);

  useEffect(() => {
    if (startDate === endDate) {
      const hourIndex = configConstants.hourList.findIndex(
        (hour) => hour === startTime
      );
      const newHourList = configConstants.hourList.slice(hourIndex + 1);
      setEndTimeHourList(configConstants.hourList.slice(hourIndex + 1));
    } else {
      setEndTimeHourList(configConstants.hourList);
    }
  }, [endDate, startTime, startDate, endTime]);

  useEffect(() => {
    const hourIndex = configConstants.hourList.findIndex(
      (hour) => hour === startTime
    );
    setEndTimeHourList(configConstants.hourList.slice(hourIndex + 1));
  }, []);

  // useEffect(() => {
  //   setTicketName(editTicket.ticketName);
  //   setTicketPrice(editTicket.ticketPrice);
  //   setFormattedPrice(
  //     new Intl.NumberFormat("id-ID", {
  //       style: "currency",
  //       currency: "IDR",
  //       minimumFractionDigits: 0,
  //     }).format(editTicket.ticketPrice ?? 0)
  //   );
  //   setTicketQty(editTicket.ticketQty);
  //   setTicketDesc(editTicket.ticketDesc);
  //   setStartDate(editTicket.startDate);
  //   setStartTime(editTicket.startTime ?? "10:00");
  //   setEndDate(editTicket.endDate ?? startDate);
  //   setEndTime(editTicket.endTime ?? "11:00");
  // }, [editTicket]);

  useEffect(() => {
    if (!endDate) setEndDate(startDate);
    if (diffTwoDate(startDate, endDate) < 0) setEndDate(startDate);
  }, [startDate]);

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs defaultIndex={0}>
              <TabList jus>
                <Spacer />
                <Tab>DETAIL TIKET</Tab>
                <Spacer />
                <Tab
                  ref={dateSell}
                  isDisabled={
                    !ticketName ||
                    (type !== ticketType.free.name && ticketPrice < 20000) ||
                    !ticketQty ||
                    !ticketDesc
                  }
                >
                  TANGGAL PENJUALAN
                </Tab>
                <Spacer />
              </TabList>

              <TabPanels>
                <TabPanel>
                  <FormControl gap={"30px"}>
                    <FormLabel>Nama Tiket</FormLabel>
                    <Input
                      type='text'
                      placeholder='Maksimal 50 karakter'
                      value={ticketName}
                      onChange={onChangeTicketName}
                    />
                    {type !== ticketType.free.name && (
                      <>
                        <FormLabel>
                          {type === ticketType.paid.name
                            ? "Harga Tiket"
                            : "Harga Minimum"}
                        </FormLabel>
                        <Input
                          type='text'
                          placeholder='Enter price'
                          value={formattedPrice}
                          onChange={(e) => formatCurrency(e.target.value)}
                        />
                      </>
                    )}
                    <FormLabel>Jumlah Tiket</FormLabel>
                    <Input
                      type='number'
                      value={ticketQty}
                      onChange={onChangeTicketQty}
                    />
                    <FormLabel>Deskripsi Tiket</FormLabel>
                    <Textarea
                      type='number'
                      maxHeight={"120px"}
                      minHeight={"120px"}
                      value={ticketDesc}
                      onChange={onChangeTicketDesc}
                    />
                    <HStack>
                      <Spacer />
                      <FormHelperText>
                        {140 - ticketDesc.length}/140 karakter
                      </FormHelperText>
                    </HStack>
                    <Button
                      colorScheme='blue'
                      width={"100%"}
                      onClick={onNext}
                      isDisabled={
                        !ticketName ||
                        (type !== ticketType.free.name &&
                          ticketPrice < 20000) ||
                        !ticketQty ||
                        !ticketDesc
                      }
                      mt={"20px"}
                    >
                      Selanjutnya
                    </Button>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl gap={"30px"}>
                    <FormLabel>Tanggal Mulai</FormLabel>
                    <HStack>
                      <Input
                        type='date'
                        defaultValue={startDate}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        min={
                          new Date().toISOString().split("T")[0] || "2021-01-01"
                        }
                      />
                      <Select
                        isDisabled={!startDate}
                        onChange={(e) => setStartTime(e.target.value)}
                        defaultValue={startTime ?? "10:00"}
                        value={startTime}
                      >
                        {configConstants.hourList.map((hour, index) => {
                          return (
                            <option key={index} value={hour}>
                              {hour}
                            </option>
                          );
                        })}
                      </Select>
                    </HStack>
                    <FormLabel>Tanggal Berakhir</FormLabel>
                    <HStack>
                      <Input
                        type='date'
                        isDisabled={!startDate}
                        min={startDate}
                        defaultValue={startDate}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                      <Select
                        isDisabled={!startDate}
                        value={endTime}
                        defaultValue={endTime ?? "11:00"}
                        onChange={(e) => setEndTime(e.target.value)}
                      >
                        {endTimeHourList.map((hour, index) => {
                          return (
                            <option key={index} value={hour}>
                              {hour}
                            </option>
                          );
                        })}
                      </Select>
                    </HStack>
                    <Button
                      colorScheme='blue'
                      width={"100%"}
                      onClick={() => {
                        onSave();
                      }}
                      mt={"20px"}
                      isDisabled={!endDate}
                    >
                      Simpan
                    </Button>
                  </FormControl>
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Text>{JSON.stringify(editTicket)}</Text>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
