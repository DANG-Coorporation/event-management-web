import { VStack, Text } from "@chakra-ui/react";
import RatingCard from "../../ui/ratingCard/ratingCard";
import style from "./style.module.css";
import RatingBar from "../../ui/ratingBar/ratingBar";

export function RatingBreakdown() {
  return (
    <RatingCard>
      <VStack>
        <Text as={"span"} className={style.header}>
          Overall Rating
        </Text>
        <RatingBar />
      </VStack>
    </RatingCard>
  );
}
