import { Text, VStack } from "@chakra-ui/react";
import style from "./style.module.css";
import EventSwiperDisplay from "../../components/ui/eventSwiperDisplay/eventSwiperDisplay";
import { useEffect } from "react";
import { getEvents } from "../../app/features/eventFetching/eventFetchSlicer";
import { useDispatch } from "react-redux";
import BannerAddvertisement from "../../components/ui/bannerAdvertisement/bannerAdvertisement";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <VStack className={style.pageContainer} align={"start"}>
      <EventSwiperDisplay variants={"eventBanner"} />
      <Text as={"span"} className={style.heading}>
        Event Untukmu
      </Text>
      <EventSwiperDisplay variants={"eventForYou"} />
      <BannerAddvertisement />
      <Text as={"span"} className={style.heading}>
        Populer di Lokasimu
      </Text>
      <EventSwiperDisplay variants={"eventForYou"} />
    </VStack>
  );
}
