import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setEventEndDate,
  setEventEndTime,
  setEventStartDate,
  setEventStartTime,
  setModalEventDateTime,
} from "../../../app/features/createEvent/createEventSlicer";
import { diffTwoDate } from "../../../utils/dateHelper";

export default function ModalSetTime() {
  const event = useSelector((state) => state.createEvent);
  const isOpenModal = event.modalStatus.isOpenModalEventDateTime;
  const dispatch = useDispatch();
  const today = DateTime.now().toISODate();
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  const onChangeDateStart = (e) => {
    setStartDate(e.target.value);
  };
  const onCloseModal = () => {
    dispatch(setModalEventDateTime(false));
  };
  const onSave = () => {
    dispatch(setEventStartDate(startDate));
    dispatch(setEventEndDate(endDate));
    dispatch(setEventStartTime(startTime));
    dispatch(setEventEndTime(endTime));
    onCloseModal();
  };

  return (
    <>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpenModal}
        onClose={onCloseModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Tanggal Event</Tab>
                <Tab>Waktu Event</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Tanggal Mulai</FormLabel>
                    <Input
                      type='date'
                      min={today}
                      defaultValue={today}
                      onChange={(e) => {
                        onChangeDateStart(e);
                        setStartDate(e.target.value);
                        if (diffTwoDate(e.target.value, endDate) < 0) {
                          setEndDate(e.target.value);
                        }
                      }}
                    />
                    <FormLabel mt={"10px"}>Tanggal Berakhir</FormLabel>
                    <Input
                      type='date'
                      min={startDate}
                      defaultValue={startDate}
                      onChange={(e) => {
                        setEndDate(e.target.value);
                      }}
                      value={endDate}
                    />
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Mulai Dari</FormLabel>
                    <Input
                      type='time'
                      defaultValue={"00:00"}
                      onChange={(e) => {
                        setStartTime(e.target.value);
                      }}
                    />
                    <FormLabel>Sampai</FormLabel>
                    <Input
                      type='time'
                      defaultValue={"00:00"}
                      onChange={(e) => {
                        setEndTime(e.target.value);
                      }}
                    />
                  </FormControl>
                </TabPanel>
              </TabPanels>
            </Tabs>
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
