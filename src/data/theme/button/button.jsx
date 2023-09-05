import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
  baseStyle: {
    color: "white",
    fontWeight: "700",
  },
  variants: {
    solid: {
      bg: "#5669ff",
      color: "white",
      h: "2.2rem",
      _hover: null,
    },
    outline: {
      color: "white",
      outline: "white",
      h: "2.2rem",
      _hover: null,
    },
  },
});

export default Button;
