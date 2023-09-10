import { Text, VStack } from "@chakra-ui/react";
import style from "./style.module.css";
import EventSwiperDisplay from "../../components/ui/eventSwiperDisplay/EventSwiperDisplay";
import { useEffect } from "react";
import { getEvents } from "../../app/features/eventFetching/eventFetchSlicer";
import { useDispatch, useSelector } from "react-redux";
import BannerAddvertisement from "../../components/ui/bannerAdvertisement/bannerAdvertisement";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.eventFetch.loading);
  const eventList = useSelector((state) => state.eventFetch.events);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <VStack className={style.pageContainer} align={"start"}>
      <EventSwiperDisplay variants={"eventBanner"} />
      <Text as={"span"} className={style.heading} >
        Event Untukmu
      </Text>
      {loading === "done" ? (
        <EventSwiperDisplay variants={"eventForYou"} eventList={eventList} />
      ) : (
        <></>
      )}
      <BannerAddvertisement />
      <Text as={"span"} className={style.heading}>
        Populer di Lokasimu
      </Text>
      {loading === "done" ? (
        <EventSwiperDisplay variants={"eventForYou"} eventList={eventList} />
      ) : (
        <></>
      )}
    </VStack>
  );
}
