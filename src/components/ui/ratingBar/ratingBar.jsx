import { AiFillStar } from "react-icons/ai";
import style from "./style.module.css";
import { HStack, Progress, Text } from "@chakra-ui/react";

export default function RatingBar() {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        return (
          <HStack key={index} className={style.container}>
            <Text>{(index += 1)}</Text>
            <AiFillStar className={style.starImage} />
            <Progress w={"100%"} value={"80"} color />
          </HStack>
        );
      })}
    </>
  );
}
