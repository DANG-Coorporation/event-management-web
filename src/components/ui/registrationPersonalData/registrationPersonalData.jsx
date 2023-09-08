import React from "react";
import {
  Box,
  InputLeftAddon,
  InputGroup,
  Radio,
  RadioGroup,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Input,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Spacer
} from "@chakra-ui/react";
import style from "./style.module.css";

export default function RegistrationPersonalData() {
    const date = new Date().getFullYear();

  return (
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
      <FormControl>
        <Text className={style.heading}>Informasi Pemesan</Text>
        <Spacer />
        <HStack>
          <VStack w="50%">
            <FormLabel w="100%" paddingLeft="2%">
              Nama Depan *
            </FormLabel>
            <Input type="text" placeholder="Nama Depan Anda" />
          </VStack>
          <VStack w="50%">
            <FormLabel w="100%">Nama Belakang *</FormLabel>
            <Input type="text" placeholder="Nama Belakang Anda" />
          </VStack>
        </HStack>
        <br/>
        <FormLabel>Email address *</FormLabel>
        <Input type="email" />
        <FormHelperText>Mohon input alamat email yang valid.</FormHelperText>
        <br/>
        <FormLabel>NIK KTP *</FormLabel>
        <Input type="number" />
        <FormHelperText>
          Mohon input NIK Kartu Tanda Penduduk Anda.
        </FormHelperText>
        <br/>
        <FormLabel>Tanggal Lahir</FormLabel>
        <HStack>
          {/* Tanggal */}
          <NumberInput defaultValue={1} min={1} max={31}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {/* Bulan */}
          <NumberInput defaultValue={1} min={1} max={12}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          {/* Tahun */}
          <NumberInput defaultValue={date} min={1945} max={date}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
        <br/>
        <FormLabel>No. Handphone *</FormLabel>
        <InputGroup>
          <InputLeftAddon children="+62" />
          <Input type="tel" placeholder="phone number" />
        </InputGroup>
        <br/>
        <FormLabel>Jenis Kelamin *</FormLabel>
        <RadioGroup defaultValue="Pria">
          <HStack spacing={5} direction="row">
            <Radio colorScheme="blue" value="Pria">
              Pria
            </Radio>
            <Radio colorScheme="blue" value="Wanita">
              Wanita
            </Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
