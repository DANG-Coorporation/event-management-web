import { extendTheme } from "@chakra-ui/react";
import Button from "./button/button";
import Card from "./card/card";

export const theme = extendTheme({
  // styles: {
  //   global: {
  //     "body, html": {
  //       bg: "white",
  //     },
  //   },
  // },
  colors: {
    primary: {
      500: "#5669ff",
    },
    txtColor: {
      500: "white",
    },
    txtColorSecondary: {
      500: "black",
    },
  },
  components: {
    Button,
    Card,
  },
});
