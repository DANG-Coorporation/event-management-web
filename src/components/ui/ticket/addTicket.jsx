import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function AddTicket(props) {
  const { ticketType } = props;

  return (
    <>
      <Box
        width={"100%"}
        height={"90px"}
        border={"2px"}
        borderColor={"gray.200"}
        borderRadius={"8px"}
        cursor={"pointer"}
        _hover={{ bgColor: "gray.100" }}
      >
        <HStack height={"100%"}>
          <Box
            height={"100%"}
            width={"50px"}
            borderRight={"2px dashed #E5E5E5"}
          ></Box>
          <VStack
            paddingTop={"auto"}
            pb={"auto"}
            height={"100%"}
            marginTop={"auto"}
            marginBottom={"auto"}
            gap={0}
          >
            <Text margin={"auto auto 0px 5px"} fontSize={"9pt"}>
              Buat Tiket
            </Text>
            <Text padding={0} margin={"0px auto auto 5px"} fontSize={"13pt"}>
              {ticketType}
            </Text>
          </VStack>
          <IoIosAddCircleOutline
            size={"40px"}
            style={{
              margin: "auto 20px auto auto",
            }}
            color='#E5E5E5'
          />
        </HStack>
      </Box>
    </>
  );
}
