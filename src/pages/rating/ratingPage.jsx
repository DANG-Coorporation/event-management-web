import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import style from "./style.module.css";
import RatingSection from "../../components/form/ratingSection/ratingSection";
import ReviewSection from "../../components/form/reviewSection/reviewSection";
import RatingCard from "../../components/ui/ratingCard/ratingCard";
import dummyImage from "../../assets/banner.jpg";
import RatingDetailInfo from "../../components/ui/ratingDetailInfo/ratingDetailInfo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchEventById } from "../../app/features/eventDetail/eventDetailSlicer";
// import { getEvents } from "../../app/features/eventFetching/eventFetchSlicer";
export default function RatingPage() {
  // const eventList = useSelector((state) => state.eventFetch.events);
  const detailEvent = useSelector((state) => state.detailEvent);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchEventById(id));
    // dispatch(getEvents());
  }, [dispatch, id]);
  return (
    <VStack className={style.container} spacing={"2rem"}>
      <RatingCard w={"100%"} height="100%">
        <HStack h="100%">
          <Box w={"320px"} height={"180px"} bg={"black"}>
            <Image
              src={dummyImage}
              objectFit={"contain"}
              w={"100%"}
              h={"100%"}
            />
          </Box>
          <RatingDetailInfo
            eventName={detailEvent.eventName}
            eventTime={detailEvent.eventTime.date.start}
            eventLocation={detailEvent.address.name}
          />
        </HStack>
      </RatingCard>
      <RatingSection />
      <ReviewSection />
    </VStack>
  );
}
