import { Box } from "@chakra-ui/react";
import propType from "prop-types";

RatingCard.propTypes = {
  //   w: propType.string,
  //   h: propType.string,
  //   flexGrow: propType.string,
  children: propType.element,
};

export default function RatingCard({ children }) {
  return (
    <Box
      w={"20%"}
      h={"100%"}
      p={"1rem"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      
    >
      {children}
    </Box>
  );
}
