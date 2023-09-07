import { Heading, VStack, Text, HStack } from "@chakra-ui/layout";
import { MdLocationPin } from "react-icons/md";
import { convertStringToDate } from "../../../utils/dateHelper";

export default function RatingDetailInfo() {
  return (
    <VStack
      textAlign={"left"}
      h={"100%"}
      w={"100%"}
      align={"left"}
      ml={"1rem"}
      justify={"center"}
    >
      <Heading>Konser Kimbum</Heading>
      <Text>{convertStringToDate("2023-06-05")}</Text>
      <HStack>
        <MdLocationPin color="grey" />
        <Text color={"grey"}>Location</Text>
      </HStack>
    </VStack>
  );
}
