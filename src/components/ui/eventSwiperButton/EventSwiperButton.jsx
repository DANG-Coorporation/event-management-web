import "./style.scoped.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Box } from "@chakra-ui/react";
import propType from "prop-types";

EventSwiperButton.propTypes = {
  variants: propType.string,
  onclick: propType.func,
  isHover: propType.bool,
  setHover: propType.func,
};

export default function EventSwiperButton({ variants, onclick, isHover,}) {
  return (
    <Box
      className={
        variants === "right"
          ? "navButton navbarButtonRight"
          : "navButton navbarButtonLeft"
      }
      opacity={isHover ? 1 : 0}
      onClick={onclick}
    >
      {variants === "right" ? (
        <MdKeyboardArrowRight />
      ) : (
        <MdKeyboardArrowLeft />
      )}
    </Box>
  );
}
