import { HStack } from "@chakra-ui/react";
import RatingDisplay from "../../ui/ratingDisplay/ratingDIsplay";
import RatingBreakdown from "../ratingBreakdown/ratingBreakdown";
import style from "./style.module.css";

export default function RatingSection() {
 
  return (
    <HStack
      className={style.container}
      w="100%"
      justify={"left"}
      spacing={"2rem"}
    >
      <RatingDisplay />
      <RatingBreakdown />
    </HStack>
  );
}
