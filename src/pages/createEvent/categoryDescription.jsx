import {
  Box,
  Checkbox,
  Grid,
  HStack,
  Select,
  Spacer,
  Switch,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import RichTextEditor from "../../components/ui/richTextEditor";
import AddTicket from "../../components/ui/ticket/addTicket";
import BigTicketDisplay from "../../components/ui/ticket/ticketDisplay";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalDetailTicketType,
  setModalDetileTicketStatus,
  ticketType,
} from "../../app/features/createEvent/createEventSlicer";

export default function CategoryDescriptionEvent() {
  const ticketList = useSelector((state) => state.createEvent.data.tickets);
  const dispatch = useDispatch();
  console.log("debug-ticketList", ticketList);

  return (
    <>
      {" "}
      <Tabs width={"100%"} mt={"30px"}>
        <TabList>
          <Tab margin={"auto"}>KATEGORI TIKET</Tab>
          <Tab margin={"auto"}>DESKRIPSI EVENT</Tab>
        </TabList>

        <TabPanels>
          <TabPanel padding={"0px"} pt={"20px"}>
            {ticketList.map((ticket, index) => {
              return (
                <BigTicketDisplay
                  key={index}
                  name={ticket.name}
                  type={ticket.ticketType}
                  startTime={ticket.sellPeriod.start}
                  endTime={ticket.sellPeriod.end}
                  price={ticket.price}
                  desc={ticket.description}
                  index={index}
                />
              );
            })}
            {/* <BigTicketDisplay /> */}
            <Grid
              templateColumns={"repeat(3, 1fr)"}
              gap={6}
              margin={"5px"}
              mt={"20px"}
            >
              <Box
                onClick={() => {
                  dispatch(setModalDetailTicketType(ticketType.paid.name));
                  dispatch(setModalDetileTicketStatus(true));
                }}
              >
                <AddTicket ticketType={"Berbayar"} />
              </Box>
              <Box
                onClick={() => {
                  dispatch(
                    setModalDetailTicketType(ticketType.minimumPay.name)
                  );
                  dispatch(setModalDetileTicketStatus(true));
                }}
              >
                <AddTicket ticketType={"Bayar Sesukamu"} />
              </Box>
              <Box
                onClick={() => {
                  dispatch(setModalDetailTicketType(ticketType.free.name));
                  dispatch(setModalDetileTicketStatus(true));
                }}
              >
                <AddTicket ticketType={"Gratis"} />
              </Box>
            </Grid>
            <Grid templateColumns={"4fr 7fr"} mt={"45px"}>
              <Box pl={"15px"}>
                <VStack gap={"5px"}>
                  <Text
                    marginLeft={"10px"}
                    fontSize={"19pt"}
                    marginRight={"auto"}
                    mb={"30px"}
                  >
                    Formulir Data Pemesan
                  </Text>
                  <Checkbox
                    marginLeft={"10px"}
                    marginRight={"auto"}
                    isDisabled
                    defaultChecked
                    size={"lg"}
                  >
                    Nama Lengkap
                  </Checkbox>
                  <Checkbox
                    marginLeft={"10px"}
                    marginRight={"auto"}
                    isDisabled
                    defaultChecked
                    size={"lg"}
                  >
                    Email
                  </Checkbox>
                  <Checkbox
                    marginLeft={"10px"}
                    marginRight={"auto"}
                    isDisabled
                    defaultChecked
                    size={"lg"}
                  >
                    Nomor Handphone
                  </Checkbox>
                  <Checkbox
                    marginLeft={"10px"}
                    marginRight={"auto"}
                    size={"lg"}
                  >
                    Nomor KTP
                  </Checkbox>
                  <Checkbox
                    marginLeft={"10px"}
                    marginRight={"auto"}
                    size={"lg"}
                  >
                    Tanggal Lahir
                  </Checkbox>
                  <Checkbox
                    marginLeft={"10px"}
                    marginRight={"auto"}
                    size={"lg"}
                  >
                    Jenis Kelamin
                  </Checkbox>
                </VStack>
              </Box>
              <Box height={"300px"} paddingLeft={"10px"}>
                <VStack>
                  <Text fontSize={"19pt"} marginRight={"auto"} mb={"30px"}>
                    Pengaturan Tambahan
                  </Text>
                  <HStack justifyContent={"space-between"} width={"100%"}>
                    <VStack alignItems={"start"} gap={0} maxWidth={"450px"}>
                      <Text>Jumlah maks. tiket per transaksi</Text>
                      <Text color={"gray.600"} fontSize={"11pt"}>
                        Jumlah maksimal tiket yang dapat dibeli dalam 1
                        transaksi
                      </Text>
                    </VStack>
                    <Spacer />
                    <Select width={"100px"}>
                      <option value='option1'>1 Tiket</option>
                      <option value='option2'>2 Tiket</option>
                      <option value='option3'>3 Tiket</option>
                      <option value='option4'>4 Tiket</option>
                      <option value='option5' defaultValue>
                        5 Tiket
                      </option>
                    </Select>
                  </HStack>
                  <HStack justifyContent={"space-between"} width={"100%"}>
                    <VStack alignItems={"start"} gap={0} maxWidth={"450px"}>
                      <Text>1 akun email - 1 kali transaksi</Text>
                      <Text color={"gray.600"} fontSize={"11pt"}>
                        akun email hanya dapat melakukan 1 kali transaksi
                        pembelian tiket
                      </Text>
                    </VStack>
                    <Spacer />
                    <Switch id='email-alerts' />
                  </HStack>
                  <HStack justifyContent={"space-between"} width={"100%"}>
                    <VStack alignItems={"start"} gap={0} maxWidth={"450px"}>
                      <Text>1 tiket - 1 data pemesan</Text>
                      <Text color={"gray.600"} fontSize={"11pt"}>
                        1 tiket hanya dapat digunakan untuk 1 data pemesan, data
                        antar tiket tidak boleh sama.
                      </Text>
                    </VStack>
                    <Spacer />
                    <Switch id='email-alerts2' />
                  </HStack>
                </VStack>
              </Box>
            </Grid>
          </TabPanel>
          <TabPanel padding={"0px"} pt={"20px"}>
            <RichTextEditor />
            <Text margin={"10px auto 10px 0px"} cursor={"pointer"}>
              + Syarat & Ketentuan
            </Text>
            <RichTextEditor />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
