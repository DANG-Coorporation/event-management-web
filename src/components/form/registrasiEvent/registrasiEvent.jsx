import React from "react";
import { useState } from "react";
import style from "./style.module.css";
import {
  Box,
  HStack,
  VStack,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Spacer,
  Divider,
  Container,
  Center,
  Checkbox,
  CheckboxGroup,
  Link,
  Button,
} from "@chakra-ui/react";

import RegistrationPersonalData from "../../ui/registrationPersonalData/registrationPersonalData";
import { CalendarIcon, AtSignIcon, TimeIcon } from "@chakra-ui/icons";
import SyaratKetentuan from "../../ui/syaratKetentuanTiket/syaratKetentuan";

import { useNavigate } from "react-router";

export default function Registration() {
 

  //   const [timer, setTimer] = useState('00:00:00');

  //   const getTimeRemaining = (e) => {
  //       const total = Date.parse(e) - Date.parse(new Date());
  //       const seconds = Math.floor((total / 1000) % 60);
  //       const minutes = Math.floor((total / 1000 / 60) % 60);
  //       const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  //       return {
  //           total, hours, minutes, seconds
  //       };
  //   }

  //   const startTimer = (e) => {
  //       let { total, hours, minutes, seconds }
  //                   = getTimeRemaining(e);
  //       if (total >= 0) {

  //           // update the timer
  //           // check if less than 10 then we need to
  //           // add '0' at the beginning of the variable
  //           setTimer(
  //               (hours > 9 ? hours : '0' + hours) + ':' +
  //               (minutes > 9 ? minutes : '0' + minutes) + ':'
  //               + (seconds > 9 ? seconds : '0' + seconds)
  //           )
  //       }
  //   }

  //   setTimer('00:24:00');

  const navigate = useNavigate();
  const timeUp = () => {
    navigate("/attendancefirstpage");
  };

  //const delayValue = setTimeout(timeUp,50000000);
  //const [timeValue,setValue] = useState(delayValue);

  return (
    <HStack w="100%" paddingLeft="5%" paddingRight="5%" p="5%">
      <VStack w="60%">
        <Box
          border="1px"
          borderRadius="md"
          bg="white"
          color="black"
          borderColor="ghostwhite"
          padding="1%"
        >
          <HStack>
            <Image
              src="https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20230823110754.jpg"
              alt="event-banner"
              maxWidth="50%"
              height="fit-content"
            />
            <List
              spacing="1%"
              fontSize={{ base: "12px", md: "16px", lg: "16px" }}
              w="50%"
            >
              <Heading
                fontSize={{ base: "12px", md: "24px", lg: "24px" }}
                fontWeight="bold"
              >
                2023 ASIA FAN MEETING IN JAKARTA: KIMBUM (Between U and Me)
              </Heading>
              <ListItem span="2">
                <ListIcon as={CalendarIcon} color="blue.500" marginRight="3%" />
                03 Sep 2023
              </ListItem>
              <ListItem>
                <ListIcon as={TimeIcon} color="blue.500" marginRight="3%" />
                19:00 - 22:00 WIB
              </ListItem>
              <ListItem>
                <ListIcon as={AtSignIcon} color="blue.500" marginRight="3%" />
                Grand Ballroom - Kempinski Hotel, DKI Jakarta
              </ListItem>
            </List>
          </HStack>
        </Box>
        <RegistrationPersonalData />
        <Spacer />
      </VStack>
      <VStack w="40%" maxHeight="100%">
        <Container
          border="1px"
          borderRadius="md"
          bg="yellow.500"
          color="black"
          borderColor="ghostwhite"
          textAlign="left"
          margin="auto"
          p="1%"
          w="100%"
        >
          <HStack>
            <Box>
              {" "}
              <Text>Mohon Selesaikan pesanan Anda dalam :</Text>
            </Box>
            <Center height="50px">
              <Divider orientation="vertical" />
            </Center>
            <Box>
              {" "}
              <Text>{"timer"}</Text>
            </Box>
          </HStack>
        </Container>

        <Box
          border="1px"
          borderRadius="md"
          bg="white"
          color="black"
          borderColor="ghostwhite"
          textAlign="left"
          margin="auto"
          p="1%"
          w="100%"
        >
          <FormControl
            p="5%"
            border={"1px"}
            borderRadius={"md"}
            borderColor={"ghostwhite"}
          >
            <HStack>
              <FormLabel w="100%">Kode Voucher</FormLabel>
              <Input type="text" placeholder="Masukkan kode voucher." />
            </HStack>

            <Text className={style.heading}>Detail Harga</Text>

            <HStack>
              <FormLabel w="100%">Harga Tiket :</FormLabel>
              <Input variant="unstyled" placeholder="Rp. 700.000,00" />
            </HStack>

            <HStack>
              <FormLabel w="100%">Biaya Layanan :</FormLabel>
              <Input variant="unstyled" placeholder="Rp. 00,00" />
            </HStack>
            <Divider></Divider>
            <HStack>
              <FormLabel w="100%">Total Bayar :</FormLabel>
              <Input
                variant="unstyled"
                textColor="black"
                textDecoration="CaptionText"
                placeholder="Rp. 700.000,00"
              />
            </HStack>
            <Spacer></Spacer>
            <br/>
            <Checkbox size='lg'>
              Saya setuju dengan S&K yang berlaku.
            </Checkbox>
            <br/>
            {/* <FormLabel> Baca S&K yang berlaku melalui tombol di bawah ini.</FormLabel>
            <SyaratKetentuan/> */}
            <FormHelperText color={"red"}>
              *S&K yang berlaku harus disetujui.
            </FormHelperText>
            <br/>
            <FormLabel>Baca S&K pemesanan di bawah ini : </FormLabel>
            <span/> <SyaratKetentuan/> <span/>
            <br />
            <br/>
            <Button w="100%" textAlign={"center"}>
              {" "}
              Beli Tiket
            </Button>
          </FormControl>
        </Box>
      </VStack>

      <Spacer />
      <Spacer />
    </HStack>
  );
}
