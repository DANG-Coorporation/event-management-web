import { HStack, VStack } from "@chakra-ui/react";
import RatingDisplay from "../../components/form/ratingDisplay/ratingDIsplay";
import { RatingBreakdown } from "../../components/form/ratingBreakdown/ratingBreakdown";

export default function RatingPage() {
  return (
    <VStack w={"100%"}>
      <HStack w={"100%"}>
        <RatingDisplay />
        <RatingBreakdown />
      </HStack>
    </VStack>
  );
}
