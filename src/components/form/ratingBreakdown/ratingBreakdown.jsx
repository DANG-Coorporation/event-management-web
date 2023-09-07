import { VStack, Text } from "@chakra-ui/react";
import RatingCard from "../../ui/ratingCard/ratingCard";
import style from "./style.module.css";
import RatingBar from "../../ui/ratingBar/ratingBar";

export default function RatingBreakdown() {
  return (
    <RatingCard flexGrow={"1"}>
      <VStack className={style.container}>
        <Text as={"span"} className={style.header}>
          Overall Rating
        </Text>
        <RatingBar />
      </VStack>
    </RatingCard>
  );
}
