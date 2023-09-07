import { Box } from "@chakra-ui/react";
import propType from "prop-types";

RatingCard.propTypes = {
  w: propType.string,
  h: propType.string,
  flexGrow: propType.string,
  children: propType.element,
};

RatingCard.defaultProps = {
  w: "20%",
  h: "220px",
  flexGrow: "0",
};

export default function RatingCard({ w, h, flexGrow, children }) {
  return (
    <Box
      w={w}
      h={h}
      p={"1rem"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      flexGrow={flexGrow}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      {children}
    </Box>
  );
}
