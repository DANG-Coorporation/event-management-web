import { HStack, Box } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import style from "./style.module.css";
import propType from "prop-types";

StarRatingStatic.propTypes = {
  stars: propType.number,
};

export default function StarRatingStatic({ stars }) {
  return (
    <HStack>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <Box key={index} className={style.starContainer}>
            {index <= stars ? <AiFillStar /> : <AiOutlineStar />}
          </Box>
        );
      })}
    </HStack>
  );
}
