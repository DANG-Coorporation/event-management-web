import { extendTheme } from "@chakra-ui/react";
import Button from "./button/button";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        w: "100vw",
        h: "100vh",
      },
    },
  },
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
  },
});
