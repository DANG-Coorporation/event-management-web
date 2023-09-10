import { Box, Button, HStack, Spacer, Text, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewEvent } from "../../api/createEvent";
import { resetData } from "../../app/features/createEvent/createEventSlicer";
import * as generateUniqueId from "generate-unique-id";
import { checkLogin } from "../../app/features/users/userSlicer";

export default function FooterCreateEvent() {
  const data = useSelector((state) => state.createEvent.data);
  const onSaveToDraft = () => {
    localStorage.setItem("draftEvent", JSON.stringify(data));
  };
  const dispatch = useDispatch();
  const [isSend, setIsSend] = useState(false);
  const onSend = () => {
    setIsSend(true);
  };
  const toast = useToast();
  const offSend = () => {
    setIsSend(false);
  };
  const userLogin = useSelector((state) => state.users.login);
  const [errorMessages, setErrorMessages] = useState("");

  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  useEffect(() => {
    async function asyncPostEvent() {
      try {
        const uniqId = `${data.eventName
          .toLowerCase()
          .replace(/\s/g, "-")}-${generateUniqueId({
          length: 5,
        })}`;
        const userId = userLogin.id;

        const result = await postNewEvent({ ...data, uniqId, userId });
        if (result.status === 201) {
          toast({
            title: "Event Saved",
            description: "We've saved your draft event",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          dispatch(resetData());
        }
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Something went wrong",
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      }
    }
    let tempErrorMessages = errorMessages;
    if (data.eventName === "")
      tempErrorMessages = "Nama event tidak boleh kosong";
    else if (data.coverImage === "")
      tempErrorMessages = "Cover image tidak boleh kosong";
    else if (data.organizerPhoto === "")
      tempErrorMessages = "Organizer photo tidak boleh kosong";
    else if (data.formatIndex === null)
      tempErrorMessages = "Format tidak boleh kosong";
    else if (data.topicIndex === null)
      tempErrorMessages = "Topik tidak boleh kosong";
    else if (data.tickets.length === 0)
      tempErrorMessages = "Ticket tidak boleh kosong";
    else if (data.tag.length === 0)
      tempErrorMessages = "Tag tidak boleh kosong";
    else if (data.eventTime.date.start === "")
      tempErrorMessages = "Tanggal event tidak boleh kosong";
    else if (data.eventTime.date.end === "")
      tempErrorMessages = "Tanggal event tidak boleh kosong";
    else if (data.eventTime.time.start === "")
      tempErrorMessages = "Waktu event tidak boleh kosong";
    else if (data.eventTime.time.end === "")
      tempErrorMessages = "Waktu event tidak boleh kosong";
    else if (data.address.name === "")
      tempErrorMessages = "Nama tempat tidak boleh kosong";
    else if (data.address.city === "")
      tempErrorMessages = "Kota tidak boleh kosong";
    else if (data.address.placeName === "")
      tempErrorMessages = "Nama tempat tidak boleh kosong";
    else if (data.address.coordinate.lat === "")
      tempErrorMessages = "Koordinat tidak boleh kosong";
    else if (data.address.coordinate.long === "")
      tempErrorMessages = "Koordinat tidak boleh kosong";
    else if (data.eventDescription === "")
      tempErrorMessages = "Deskripsi event tidak boleh kosong";
    else if (data.isTermAndCondition === false)
      tempErrorMessages = "Anda harus menyetujui syarat dan ketentuan";

    setErrorMessages(tempErrorMessages);
    if (isSend && !tempErrorMessages) {
      asyncPostEvent();
    }
    offSend();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSend]);

  useEffect(() => {
    if (errorMessages !== "") {
      toast({
        title: "Error",
        description: errorMessages,
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
    setErrorMessages("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorMessages]);

  return (
    <>
      <Box
        height={"70px"}
        boxShadow={"0px -2px 4px rgba(0, 0, 0, 0.1)"}
        position={"fixed"}
        bottom={"0px"}
        bgColor={"white"}
        width={"100%"}
        padding={"10px 40px 10px 40px"}
        style={{
          zIndex: "10 !important",
        }}
      >
        <HStack height={"100%"} maxWidth={"1200px"} margin={"auto"}>
          <Text fontSize={"17pt"}>Yeay!</Text>
          <Text fontSize={"11pt"}>
            Tinggal selangkah lagi dan event kamu berhasil dibuat.
          </Text>
          <Spacer />
          <Button
            onClick={() => {
              toast({
                title: "Event Saved",
                description: "We've saved your draft event",
                status: "success",
                duration: 1000,
                isClosable: true,
              });
              onSaveToDraft();
            }}
          >
            Simpan Draft
          </Button>
          <Button colorScheme='blue' onClick={onSend}>
            Buat Event Sekarang
          </Button>
        </HStack>
      </Box>
    </>
  );
}
