import { Box } from "@chakra-ui/react";
import WebFooter from "../webFooter/webFooter";
import WebNavbar from "../webNavbar/webNavbar";
import style from "./style.module.css";
import propType from "prop-types";
import { useSelector } from "react-redux";

WithNavFooter.propTypes = {
  element: propType.element,
};

export default function WithNavFooter({ element }) {
  const isBlacken = useSelector((state) => state.screenDarken.isScreenDarken);
  return (
    <>
      <WebNavbar />
      <Box className={style.container}>
        {element}
        <Box
          className="app-darken"
          display={isBlacken ? "block" : "none"}
          bg={isBlacken ? "rgba(0, 0, 0, 0.4)" : "transparent"}
        />
      </Box>
      <WebFooter />
    </>
  );
}
