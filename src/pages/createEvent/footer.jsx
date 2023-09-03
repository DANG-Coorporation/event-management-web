import { Box, Button, HStack, Spacer, Text, useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function FooterCreateEvent() {
  const data = useSelector((state) => state.createEvent.data);
  const onSaveToDraft = () => {
    localStorage.setItem("draftEvent", JSON.stringify(data));
  };
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
          <Button colorScheme='blue'>Buat Event Sekarang</Button>
        </HStack>
      </Box>
    </>
  );
}
