import style from "./style.module.css";
import { Box, HStack, VStack } from "@chakra-ui/react";
import LoginFormLeftContent from "../../ui/logInLeftContent.jsx/loginLeftContent";
import LoginFormRightContent from "../../ui/loginContentRight/loginContentRight";

export default function LoginForm() {
  return (
    <VStack h={"100dvh"} w={"100dvw"} justify={"center"}>
      <HStack
        h={"100%"}
        w={"100%"}
        align={"center"}
        justify={"center"}
        p={"1rem 3rem"}
      >
        <LoginFormRightContent />
        <Box className={style.container}>
          <LoginFormLeftContent />
        </Box>
      </HStack>
    </VStack>
  );
}
