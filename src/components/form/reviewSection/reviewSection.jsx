import { Heading, VStack } from "@chakra-ui/layout";
import ReviewCard from "../../ui/reviewCard/reviewCard";
import propType from "prop-types";

ReviewSection.propTypes = {
  reviewItems: propType.array,
};

export default function ReviewSection({ reviewItems }) {
  return (
    <VStack w="100%">
      {reviewItems.length > 0 ? (
        reviewItems.map((item, index) => {
          return <ReviewCard key={index} reviewItem={item} />;
        })
      ) : (
        <Heading color={"grey"} size={"md"} mt={"3rem"}>belum ada review</Heading>
      )}
    </VStack>
  );
}
