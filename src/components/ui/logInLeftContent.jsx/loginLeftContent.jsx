import { MdVisibility } from "react-icons/md";
import style from "./style.module.css";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

import { FcGoogle } from "react-icons/fc";

export default function LoginFormLeftContent() {
  return (
    <VStack className={style.container} align={"start"} >
      <Tabs className={style.tabContainer}>
        <TabList className={style.tabList}>
          <Tab
            className={style.tab}
            _selected={{ borderColor: "primary.500", color: "primary.500" }}
          >
            Masuk
          </Tab>
          <Tab
            className={style.tab}
            _selected={{ borderColor: "primary.500", color: "primary.500" }}
          >
            Daftar
          </Tab>
        </TabList>

        <TabPanels py={"1rem"} h={"100%"}>
          <TabPanel px={"0"}>
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
          </TabPanel>

          <TabPanel textAlign={"left"} px={0} height={"100%"}>
            <Text className={style.label}>Nama Lengkap</Text>
            <Input className={style.input} />

            <Text className={style.label}>Username</Text>
            <Input className={style.input} />

            <Text className={style.label} type="email">
              Email
            </Text>
            <Input className={style.input} />

            <Text className={style.label}>Password</Text>
            <InputGroup>
              <InputRightElement>
                <MdVisibility />
              </InputRightElement>
              <Input className={style.input} />
            </InputGroup>
            <Button variant={"solid"} className={style.button}>
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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}
