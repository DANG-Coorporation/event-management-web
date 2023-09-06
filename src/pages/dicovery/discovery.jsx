import { HStack } from "@chakra-ui/react";
import style from "./style.module.css";
import DiscoveryFilter from "../../components/form/discoveryFilter/discoveryFilter";
import DiscoveryEventDisplay from "../../components/form/discoveryEventDisplay/discoveryEventDisplay";
import { constant } from "../../data/constant";

export default function Discovery() {
  return (
    <HStack className={style.pageContainer} align={"strech"}>
      <DiscoveryFilter items={constant.accordionItems} />
      <DiscoveryEventDisplay />
    </HStack>
  );
}
