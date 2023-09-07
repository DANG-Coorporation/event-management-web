import { VStack } from "@chakra-ui/layout";
import ReviewCard from "../../ui/reviewCard/reviewCard";

export default function ReviewSection() {
  return (
    <VStack w="100%">
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </VStack>
  );
}
