import { IconButton } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import {
  FaThumbsDown,
  FaRegThumbsDown,
  FaThumbsUp,
  FaRegThumbsUp,
} from "react-icons/fa";
import propType from "prop-types";
import style from "./style.module.css";

ReviewLikeDislike.propTypes = {
  isLiked: propType.bool,
};

export default function ReviewLikeDislike({ isLiked }) {
  return (
    <HStack>
      <IconButton
        className={style.iconButton}
        icon={isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
        bg={isLiked ? "green.400" : "grey"}
      />
      <IconButton
        className={style.iconButton}
        icon={isLiked ? <FaRegThumbsDown /> : <FaThumbsDown />}
        bg={isLiked ? "grey" : "red.400"}
      />
    </HStack>
  );
}
