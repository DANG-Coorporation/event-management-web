import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { MdVisibility } from "react-icons/md";
import style from "./style.module.css";

import { FcGoogle } from "react-icons/fc";

export default function LoginForm({ ref }) {
  return (
    <>
      {" "}
      <Text className={style.label}>Username</Text>
      <Input className={style.input} />
      <Text className={style.label}>Password</Text>
      <InputGroup>
        <InputRightElement>
          <MdVisibility />
        </InputRightElement>
        <Input className={style.input} />
      </InputGroup>
      <Box>
        <Button variant={"solid"} className={style.button}>
          Masuk
        </Button>
      </Box>
      <Box position={"relative"} className={style.dividerText}>
        <Divider borderColor={"gray"} />
        <AbsoluteCenter bg={"white"} p={"4px"}>
          <Text>Atau</Text>
        </AbsoluteCenter>
      </Box>
      <Button
        variant={"outline"}
        color={"black"}
        w={"100%"}
        borderColor={"primary.500"}
      >
        <HStack>
          <FcGoogle />
          <Text>Masuk dengan Google</Text>
        </HStack>
      </Button>
    </>
  );
}
