import { HStack, Box } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import style from "./style.module.css";
import { useState } from "react";

export default function StarRating() {
  const [hover, setHover] = useState(0);
  const [selectedIndex, setIndex] = useState(0);
  return (
    <HStack
      onMouseLeave={() => {
        setHover(0);
      }}
    >
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <Box
            key={index}
            className={style.starContainer}
            onMouseEnter={() => {
              setHover(index);
            }}
            onClick={() => {
              setIndex(index);
            }}
          >
            {index <= (selectedIndex === 0 ? hover : selectedIndex) ? (
              <AiFillStar />
            ) : (
              <AiOutlineStar />
            )}
          </Box>
        );
      })}
    </HStack>
  );
}
