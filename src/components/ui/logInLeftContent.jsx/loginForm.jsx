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
  useToast,
} from "@chakra-ui/react";
import { MdVisibility } from "react-icons/md";
import style from "./style.module.css";

import { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { checkCredential } from "../../../api/users";
import {
  setLoginEmail,
  setLoginPassword,
} from "../../../app/features/users/userSlicer";
import { parseToken, storeToken } from "../../../utils/checkUsers";
import { useNavigate } from "react-router";

export default function LoginForm() {
  const credential = useSelector((state) => state.users.credential);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState({
    username: true,
    password: true,
  });
  const [typePassword, setTypePassword] = useState("password");
  const toast = useToast();
  const onBlurUsername = (e) => {
    if (e.target.value === "") {
      setIsError({ ...isError, username: true });
    } else {
      setIsError({ ...isError, username: false });
    }
  };

  const onBlurPassword = (e) => {
    if (e.target.value === "") {
      setIsError({ ...isError, password: true });
    } else {
      setIsError({ ...isError, password: false });
    }
  };
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const checkFormFilled = () => {
    if (usernameRef.current.value !== "") {
      setIsError((prevIsError) => ({
        ...prevIsError,
        username: false,
      }));
    }
    if (passwordRef.current.value !== "") {
      setIsError((prevIsError) => ({
        ...prevIsError,
        password: false,
      }));
    }
  };

  useEffect(() => {
    checkFormFilled();
    const token = localStorage.getItem("token");
    if (token) {
      const decodeToken = parseToken();
      if (decodeToken) {
        navigate("/");
      }
    }
  }, []);

  const onClickLogin = () => {
    checkFormFilled();
    if (isError.username || isError.password) {
      toast({
        title: "Username atau password tidak boleh kosong",
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      checkCredential(credential)
        .then((res) => {
          storeToken({
            id: res.id,
            fullName: res.fullName,
            username: res.username,
            email: res.email,
          });
          toast({
            title: "Berhasil masuk",
            status: "success",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
          navigate("/");
        })
        .catch((err) => {
          toast({
            title: err.message ?? "Terjadi kesalahan",
            status: "error",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
        });
    }
  };
  return (
    <>
      {" "}
      <Text className={style.label}>Username</Text>
      <Input
        className={style.input}
        onBlur={onBlurUsername}
        onChange={(e) => {
          dispatch(setLoginEmail(e.target.value));
          onBlurUsername(e);
        }}
        ref={usernameRef}
      />
      <Text className={style.label}>Password</Text>
      <InputGroup>
        <InputRightElement>
          <MdVisibility
            color={typePassword === "password" ? "#95A5A6" : "#3498DB"}
            onClick={() => {
              setTypePassword(
                typePassword === "password" ? "text" : "password"
              );
            }}
          />
        </InputRightElement>
        <Input
          className={style.input}
          onBlur={onBlurPassword}
          onChange={(e) => {
            dispatch(setLoginPassword(e.target.value));
            onBlurPassword(e);
          }}
          type={typePassword}
          ref={passwordRef}
        />
      </InputGroup>
      <Box>
        <Button
          variant={"solid"}
          className={style.button}
          onClick={onClickLogin}
        >
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
