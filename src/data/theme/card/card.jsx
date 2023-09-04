import { defineStyleConfig } from "@chakra-ui/react";

const Card = defineStyleConfig({
  baseStyle: {
    color: "black",
  },
  variants: {
    eventDisplay: {
      container: {
        bg: "blue",
        shadow: "30px, 30px, 1px, #EAEBF0",
        borderRadius: "18px",
      },
    },
  },
});

export default Card;
