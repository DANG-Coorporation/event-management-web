import { Text, VStack } from "@chakra-ui/react";
import style from "./style.module.css";
import StarRating from "../starRating/starRating";
import RatingCard from "../ratingCard/ratingCard";
import { useSelector } from "react-redux";
import StarRatingStatic from "../starRatingStatic/starRatingStatic";

export default function RatingDisplay() {
  const stars = useSelector((state) => state.starRating.starAmount);
  const isRated = useSelector((state) => state.starRating.isRated);
  const rating = useSelector((state) => state.starRating.numericRating);
  const ratingData = useSelector((state) => state.starRating.ratingData);
  const { length } = ratingData;
  return (
    <RatingCard>
      <VStack className={style.container}>
        <Text as={"span"} className={style.header}>
          Rating Breakdown
        </Text>
        <Text as={"span"} className={style.rating}>
          {rating}
          <Text as={"span"} className={style.ratingMax}>
            /5
          </Text>
        </Text>
        {isRated ? <StarRatingStatic stars={stars} /> : <StarRating />}
        <Text as="span" className={style.ratingAmount}>
          {`${length} reviews`}
        </Text>
      </VStack>
    </RatingCard>
  );
}
