import { VStack, Image, Heading } from "@chakra-ui/react";
import style from "./style.module.css";
import loginImage from "../../../assets/login.svg";

export default function LoginFormRightContent() {
  return (
    <VStack className={style.container} justify={"center"}>
      <Heading as={"h1"} className={style.heading}>
        Welcome!
      </Heading>
      <Image className={style.image} src={loginImage}></Image>
    </VStack>
  );
}
