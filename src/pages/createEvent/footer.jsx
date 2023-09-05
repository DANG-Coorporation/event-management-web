import {
  Box,
  Button,
  HStack,
  Spacer,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetData } from "../../app/features/createEvent/createEventSlicer";
import { postNewEvent } from "../../api/createEvent";
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

  const offSend = () => {
    setIsSend(false);
  };

  useEffect(() => {
    async function asyncPostEvent() {
      try {
        const result = await postNewEvent(data);
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
        // Handle the error properly
        console.error(error); // Log the error for debugging purposes
        toast({
          title: "Error",
          description: "Something went wrong", // Use a generic error message
          status: "error",
          duration: 1000,
          isClosable: true,
        });
      }
    }

    if (isSend) {
      asyncPostEvent();
      offSend();
    }
  }, [isSend]);

  const toast = useToast();
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
