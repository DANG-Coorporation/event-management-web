import { Heading, VStack, Text, HStack } from "@chakra-ui/layout";
import { MdLocationPin } from "react-icons/md";
import propType from "prop-types";

RatingDetailInfo.propTypes = {
  eventName: propType.string,
  eventLocation: propType.string,
  eventTime: propType.string,
};

export default function RatingDetailInfo({
  eventName,
  eventTime,
  eventLocation,
}) {
  return (
    <VStack
      textAlign={"left"}
      h={"100%"}
      w={"100%"}
      align={"left"}
      ml={"1rem"}
      justify={"center"}
    >
      <Heading>{eventName}</Heading>
      <Text>{{ eventTime }}</Text>
      <HStack>
        <MdLocationPin color="grey" />
        <Text color={"grey"}>{eventLocation}</Text>
      </HStack>
    </VStack>
  );
}
