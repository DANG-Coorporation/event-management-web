import { AiFillStar } from "react-icons/ai";
import style from "./style.module.css";
import { HStack, Progress, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function RatingBar() {
  const ratingData = useSelector((state) => state.starRating.ratingData);
  const { rating, length } = ratingData;

  useEffect(() => {
    console.log(ratingData);
  }, [ratingData]);
  return (
    <>
      {rating === undefined
        ? [...Array(5)].map((item, index) => {
            return (
              <HStack key={index} className={style.container}>
                <Text as={"span"} className={style.starCount}>
                  {(index += 1)}
                </Text>
                <AiFillStar className={style.starImage} />
                <Progress
                  w={"100%"}
                  value={0}
                  className={style.ratingProgressBar}
                />
                <Text as={"span"} className={style.reviewAmountperStar}>
                  0
                </Text>
              </HStack>
            );
          })
        : rating.map((item, index) => {
            return (
              <HStack key={index} className={style.container}>
                <Text as={"span"} className={style.starCount}>
                  {item.star}
                </Text>
                <AiFillStar className={style.starImage} />
                <Progress
                  w={"100%"}
                  value={item.value}
                  className={style.ratingProgressBar}
                  max={length}
                />
                <Text as={"span"} className={style.reviewAmountperStar}>
                  {length}
                </Text>
              </HStack>
            );
          })}
    </>
  );
}
