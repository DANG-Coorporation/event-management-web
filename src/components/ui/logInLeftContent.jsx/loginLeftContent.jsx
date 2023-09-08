import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import style from "./style.module.css";

import { useRef } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

export default function LoginFormLeftContent() {
  const loginRef = useRef(null);
  return (
    <VStack className={style.container} align={"start"} >
      <Tabs className={style.tabContainer}>
        <TabList className={style.tabList}>
          <Tab
            ref={loginRef}
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
          <TabPanel px={"0"} ref={loginRef}>
            <LoginForm />
          </TabPanel>
          <TabPanel textAlign={"left"} px={0} height={"100%"}>
            <RegisterForm loginRef={loginRef} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
}
