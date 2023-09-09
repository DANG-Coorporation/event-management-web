import { HStack, Box, useDisclosure, useToast } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import style from "./style.module.css";
import ReviewAlert from "../reviewDialog/reviewDialog";
import { useSelector } from "react-redux";
import {
  setIndex,
  setHover,
} from "../../../app/features/starRatingBehaviour/starRating";
import { useDispatch } from "react-redux";
import { checkIsLogedIn } from "../../../utils/checkUsers";
import { useNavigate } from "react-router";

export default function StarRating() {
  const hover = useSelector((state) => state.starRating.hover);
  const selectedIndex = useSelector((state) => state.starRating.index);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  return (
    <HStack
      onMouseLeave={() => {
        if (selectedIndex === 0) {
          dispatch(setHover(0));
        }
      }}
    >
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <Box
            key={index}
            className={style.starContainer}
            onMouseEnter={() => {
              if (selectedIndex === 0) {
                dispatch(setHover(index));
              }
            }}
            onClick={() => {
              if (!checkIsLogedIn()) {
                navigate("/logIn");
                toast({
                  description:
                    "Anda belum masuk, siliahkan masuk terlabih dahulu",
                  status: "error",
                  duration: 2500,
                  isClosable: true,
                });
                return;
              }
              if (selectedIndex === 0) {
                dispatch(setIndex(index));
                onOpen();
              }
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
      <ReviewAlert isOpen={isOpen} onClose={onClose} />
    </HStack>
  );
}
