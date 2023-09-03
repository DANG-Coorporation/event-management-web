import { Box, Card, Image } from "@chakra-ui/react";
import style from "./style.module.css";
import eventbanner from "../../../assets/banner.jpg";

export default function AppCard() {
  return (
    <Card w={"300px"} h={"320px"} borderRadius={"18px"}>
      <Box className={style.bannerContainer}>
        <Image className={style.banner} src={eventbanner}></Image>
      </Box>
    </Card>
  );
}
