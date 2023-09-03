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
  setEventDescription,
  setFormIsDob,
  setFormIsGender,
  setFormIsIdentityNumber,
  setFormIsOneEmailOneTransaction,
  setFormIsOneTicketOneData,
  setFormMaxPerbuy,
  setIsTermAndCondition,
  setModalDetailTicketType,
  setModalDetileTicketStatus,
  setTermAndCondition,
  ticketType,
} from "../../app/features/createEvent/createEventSlicer";

export default function CategoryDescriptionEvent() {
  const ticketList = useSelector((state) => state.createEvent.data.tickets);
  const formOptions = useSelector((state) => state.createEvent.data.form);
  const isTermAndCondition = useSelector(
    (state) => state.createEvent.data.isTermAndCondition
  );
  const data = useSelector((state) => state.createEvent.data);
  const dispatch = useDispatch();
  console.log("debug-formOptions", formOptions);
  console.log("debug-maxBuy", typeof formOptions.maxPerbuy);
  console.log("debug-ticketList", ticketList);
  const handleChangeEventDescription = (content) => {
    dispatch(setEventDescription(content));
  };

  const handleChangeTermAndCondition = (content) => {
    dispatch(setTermAndCondition(content));
  };

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
                    isChecked={formOptions.isIdentityNumber}
                    onChange={(e) =>
                      dispatch(setFormIsIdentityNumber(e.target.checked))
                    }
                  >
                    Nomor KTP
                  </Checkbox>
                  <Checkbox
                    marginLeft={"10px"}
                    marginRight={"auto"}
                    size={"lg"}
                    isChecked={formOptions.isDob}
                    onChange={(e) => dispatch(setFormIsDob(e.target.checked))}
                  >
                    Tanggal Lahir
                  </Checkbox>
                  <Checkbox
                    marginLeft={"10px"}
                    marginRight={"auto"}
                    size={"lg"}
                    isChecked={formOptions.isGender}
                    onChange={(e) =>
                      dispatch(setFormIsGender(e.target.checked))
                    }
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
                    <Select
                      width={"100px"}
                      onChange={(e) => {
                        dispatch(setFormMaxPerbuy(e.target.value));
                      }}
                      defaultValue={`${formOptions.maxPerbuy}` || "3"}
                    >
                      <option value='1'>1 Tiket</option>
                      <option value='2'>2 Tiket</option>
                      <option value='3'>3 Tiket</option>
                      <option value='4'>4 Tiket</option>
                      <option value='5'>5 Tiket</option>
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
                    <Switch
                      id='email-alerts'
                      isChecked={formOptions.isOneEmailOneTransaction}
                      onChange={(e) => {
                        dispatch(
                          setFormIsOneEmailOneTransaction(e.target.checked)
                        );
                      }}
                    />
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
                    <Switch
                      id='email-alerts2'
                      isChecked={formOptions.isOneTicketOneData}
                      onChange={(e) => {
                        dispatch(setFormIsOneTicketOneData(e.target.checked));
                      }}
                    />
                  </HStack>
                </VStack>
              </Box>
            </Grid>
          </TabPanel>
          <TabPanel padding={"0px"} pt={"20px"}>
            <RichTextEditor
              onChangeText={handleChangeEventDescription}
              defaultText={data.eventDescription}
            />
            <Text
              margin={"10px auto 10px 0px"}
              cursor={"pointer"}
              onClick={() =>
                dispatch(setIsTermAndCondition(!isTermAndCondition))
              }
            >
              {isTermAndCondition ? "+" : "-"} Syarat & Ketentuan
            </Text>
            {isTermAndCondition && (
              <RichTextEditor
                onChangeText={handleChangeTermAndCondition}
                defaultText={data.termAndCondition}
              />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
