import { Box, Image } from "@chakra-ui/react";
import style from "./style.module.css";
import addverImg from "../../../assets/banner-iklan.jpg";

export default function BannerAddvertisement() {
  return (
    <Box className={style.imageContainer}>
      <Image className={style.addverImage} src={addverImg}></Image>
    </Box>
  );
}
