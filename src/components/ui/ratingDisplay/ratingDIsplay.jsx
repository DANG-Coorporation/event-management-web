import { Text, VStack } from "@chakra-ui/react";
import style from "./style.module.css";
import StarRating from "../starRating/starRating";
import RatingCard from "../ratingCard/ratingCard";

export default function RatingDisplay() {
  return (
    <RatingCard>
      <VStack className={style.container}>
        <Text as={"span"} className={style.header}>
          Rating Breakdown
        </Text>
        <Text as={"span"} className={style.rating}>
          4
          <Text as={"span"} className={style.ratingMax}>
            /5
          </Text>
        </Text>
        <StarRating />
        <Text as="span" className={style.ratingAmount}>
          202 reviews
        </Text>
      </VStack>
    </RatingCard>
  );
}
