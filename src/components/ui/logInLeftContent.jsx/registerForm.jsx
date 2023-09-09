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
import {
  fetchReferralCode,
  resetReferralCheckCount,
  resetReferralCode,
  setEmail,
  setFullName,
  setPassword,
  setUsername,
  storeReferralLink,
} from "../../../app/features/users/userSlicer";
import style from "./style.module.css";

import * as generateUniqueId from "generate-unique-id";
import { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../../api/users";
import { set } from "lodash";
export default function RegisterForm({ loginRef }) {
  const data = useSelector((state) => state.users.data);
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [typePassword, setTypePassword] = useState("password");
  const referralRef = useRef();
  const [error, setError] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
  });
  const [firstRender, setFirstRender] = useState(true);
  const toast = useToast();
  const [referralCode, setReferralCode] = useState("");
  const [referralCount, setReferralCount] = useState(0);

  const handleOnSubmit = (e) => {
    const isError = Object.values(error).some((err) => err !== "");
    isError && e.preventDefault();
    if (isError || Object.values(data).some((d) => d === "")) {
      checkError();
      toast({
        title: "Gagal",
        description: "Mohon isi data dengan benar",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    const referralCode = generateUniqueId({
      length: 6,
    });
    postUser({ ...data, referralCode })
      .then((res) => {
        const resultUser = res.data;
        dispatch(
          storeReferralLink({
            referralCode: user.referralCode,
            userid: resultUser.id,
          })
        );
        if (res.status === 201) {
          toast({
            title: "Berhasil",
            description: "Berhasil mendaftar",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
        } else {
          toast({
            title: "Gagal",
            description: "Gagal mendaftar",
            status: "error",
            duration: 1000,
            isClosable: true,
            position: "top",
          });
        }
        loginRef.current.click();
      })
      .catch((err) => {
        toast({
          title: "Gagal",
          description: err.message ?? "Gagal mendaftar",
          status: "error",
          duration: 1000,
          isClosable: true,
          position: "top",
        });
      });
  };

  const onCheckReferralCode = () => {
    console.log("debug-user", user);
    if (user.isValidReferralCode) {
      dispatch(resetReferralCode());
      referralRef.current.disabled = false;
    } else {
      dispatch(fetchReferralCode(referralCode));
    }
  };

  const checkError = () => {
    const newError = {};

    if (data.fullName === "") {
      newError.fullName = "Nama tidak boleh kosong";
    } else {
      newError.fullName = "";
    }

    if (data.username === "") {
      newError.username = "Username tidak boleh kosong";
    } else {
      newError.username = "";
    }

    if (data.email === "") {
      newError.email = "Email tidak boleh kosong";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newError.email = "Email tidak valid";
    } else {
      newError.email = "";
    }

    if (data.password === "") {
      newError.password = "Password tidak boleh kosong";
    } else if (data.password.length < 8) {
      newError.password = "Password minimal 8 karakter";
    } else {
      newError.password = "";
    }

    setError((prevError) => ({ ...prevError, ...newError }));
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      dispatch(resetReferralCode());
      dispatch(resetReferralCheckCount());
      return;
    }
    checkError();
  }, [data, user]);

  useEffect(() => {
    console.log("debug-referralCount", referralCount, user.referralCheckCount);
    if (user.referralCheckCount === 0) {
      dispatch(resetReferralCode());
      return;
    }
    if (referralCount === 0 && user.referralCheckCount >= 1) {
      setReferralCount(user.referralCheckCount);
      return;
    }
    if (user.isValidReferralCode === true) {
      referralRef.current.disabled = true;
      toast({
        title: "Berhasil",
        description: "Kode referral valid",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    } else {
      toast({
        title: "Gagal",
        description: "Kode referral tidak valid",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }
    setReferralCount(user.referralCheckCount);
  }, [user.referralCheckCount]);

  useEffect(() => {
    dispatch(resetReferralCode());
    dispatch(resetReferralCheckCount());
  }, [dispatch]);
  return (
    <>
      <Text className={style.label}>Nama Lengkap</Text>
      <Input
        className={style.input}
        id={"registerFullName"}
        value={data.fullName}
        onChange={(e) => {
          dispatch(setFullName(e.target.value));
        }}
      />
      <Text className={style["error-message"]}>
        {error.fullName ? error.fullName : ""}
      </Text>

      <Text className={style.label}>Username</Text>
      <Input
        className={style.input}
        id={"registerUsername"}
        value={data.username}
        onChange={(e) => {
          dispatch(setUsername(e.target.value));
        }}
      />
      <Text className={style["error-message"]}>{error.username}</Text>

      <Text className={style.label} type='email'>
        Email
      </Text>
      <Input
        className={style.input}
        id={"registerEmail"}
        type='email'
        value={data.email}
        onChange={(e) => {
          dispatch(setEmail(e.target.value));
        }}
      />
      <Text className={style["error-message"]}>{error.email}</Text>

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
          type={typePassword}
          id={"registerPassword"}
          value={data.password}
          onChange={(e) => {
            dispatch(setPassword(e.target.value));
          }}
        />
      </InputGroup>
      <Text className={style["error-message"]}>{error.password}</Text>
      <Text className={style.label} type='email'>
        Referral Code (Opsional)
      </Text>
      <HStack>
        <Input
          className={style.input}
          id={"referralCode"}
          type='text'
          onChange={(e) => {
            setReferralCode(e.target.value);
          }}
          ref={referralRef}
          disabled={user.isValidReferralCode}
        />
        <Button
          colorScheme='green'
          className={style.input}
          onClick={onCheckReferralCode}
        >
          {user.isValidReferralCode ? "Batal" : "Gunakan"}
        </Button>
      </HStack>
      <Button
        variant={"solid"}
        className={style.button}
        onClick={handleOnSubmit}
      >
        Daftar
      </Button>

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
          <Text>Daftar dengan Google</Text>
        </HStack>
      </Button>
    </>
  );
}
