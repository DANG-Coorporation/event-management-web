import { Box, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";
import style from "./style.module.css";
import { MdLocationPin } from "react-icons/md";
import propType from "prop-types";
import { limitEventName } from "./limitEventName";
import { useNavigate } from "react-router";

AppCard.propTypes = {
  eventName: propType.string,
  eventDate: propType.string,
  eventPrice: propType.string,
  eventLocation: propType.string,
  eventPicture: propType.string,
};

export default function AppCard({
  eventName,
  eventDate,
  eventPrice,
  eventLocation,
  eventPicture,
}) {
  //EDITAN UTK AKSES ATTENDANCE PAGE
  const navigate = useNavigate();
  return (
    <Box
      className={style.card}
      onClick={() => {
        navigate("/attendancefirstpage");
      }}
    >
      <Box className={style.bannerContainer}>
        <Image
          className={style.banner}
          src={eventPicture}
          objectFit={"cover"}
        ></Image>
      </Box>
      <VStack className={style.detailContainer} align={"start"}>
        <Text as={"span"} className={style.eventname}>
          {limitEventName(eventName, 26)}
        </Text>
        <Text as={"span"} className={style.date}>
          {eventDate}
        </Text>
        <Text as={"span"} className={style.price}>
          {eventPrice}
        </Text>
        <Divider />
        <HStack>
          <MdLocationPin className={style.locationIcon} />
          <Text as={"span"} className={style.price}>
            {eventLocation}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
