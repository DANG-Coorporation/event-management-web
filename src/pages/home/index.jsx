import { Heading, VStack } from "@chakra-ui/react";
import style from "./style.module.css";

import EventForYou from "../../components/form/eventForYou/eventForYou";

export default function Home() {
  return (
    <VStack className={style.pageContainer}>
      <Heading fontSize={"24px"} fontWeight={"500"}>
        Event Untukmu
      </Heading>
      <EventForYou />
    </VStack>
  );
}
