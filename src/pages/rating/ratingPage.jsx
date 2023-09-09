import { Box, HStack, Image, VStack } from "@chakra-ui/react";
import style from "./style.module.css";
import RatingSection from "../../components/form/ratingSection/ratingSection";
import ReviewSection from "../../components/form/reviewSection/reviewSection";
import RatingCard from "../../components/ui/ratingCard/ratingCard";
import RatingDetailInfo from "../../components/ui/ratingDetailInfo/ratingDetailInfo";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { fetchEventById } from "../../app/features/eventDetail/eventDetailSlicer";
import LoadingPage from "../loading/loadingPage";
import { convertDateTimeFormat } from "../../utils/dateHelper";
import configTime from "../../data/configTime";
import { getReviewByEvent } from "../../app/features/reviewFetching/reviewFetchingSlicer";
import { getUsersByReview } from "../../app/features/users/userSlicer";
import { generateReviewObject } from "../../utils/generateReviewobj";
import { setReviewObjList } from "../../app/features/reviewFetching/reviewFetchingSlicer";
// import { getEvents } from "../../app/features/eventFetching/eventFetchSlicer";
export default function RatingPage() {
  // const eventList = useSelector((state) => state.eventFetch.events);
  const pageDetail = useSelector((state) => state.detailEvent.pageDetail);
  const detailEventStat = useSelector((state) => state.detailEvent.status);

  const reviewStatus = useSelector((state) => state.reviews.loading);
  // const review = useSelector((state) => state.reviews.review);
  const reviewPerEvent = useSelector((state) => state.reviews.reviewPerEvent);

  const userByReview = useSelector((state) => state.users.usersByReview);
  const userByReviewStat = useSelector((state) => state.users.status);
  const reviewData = useSelector((state) => state.reviews.reviewObjList);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchEventById(id));
    dispatch(getReviewByEvent(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (reviewPerEvent.length === 0 && reviewStatus.perEvent === "idle") {
      return;
    }
    dispatch(getUsersByReview(reviewPerEvent));
  }, [reviewPerEvent, dispatch, reviewStatus]);

  useEffect(() => {
    if (userByReview.length === 0 && userByReviewStat === "idle") {
      return;
    }
    console.log("set obj list");
    dispatch(
      setReviewObjList([...generateReviewObject(userByReview, reviewPerEvent)])
    );
  }, [userByReview, reviewPerEvent, userByReviewStat, dispatch]);

  useEffect(() => {
    console.log("reviewPerEvent => ", reviewStatus);
    console.log("userByReview => ", userByReviewStat);
    console.log("obj => ", reviewData);
  }, [reviewStatus, userByReviewStat, reviewData]);

  return detailEventStat !== "success" ||
    reviewStatus.perEvent !== "success" ||
    userByReviewStat !== "success" ||
    reviewData === null ? (
    <>
      <LoadingPage />
    </>
  ) : (
    <VStack className={style.container} spacing={"2rem"}>
      <RatingCard w={"100%"} height="100%">
        <HStack h="100%">
          <Box w={"320px"} height={"180px"} bg={"black"}>
            <Image
              src={pageDetail.coverImage}
              objectFit={"contain"}
              w={"100%"}
              h={"100%"}
            />
          </Box>
          <RatingDetailInfo
            eventName={pageDetail.eventName}
            eventTime={convertDateTimeFormat(
              pageDetail.eventTime.date.start,
              configTime.iso_date,
              configTime.date_month_full_string
            )}
            eventLocation={pageDetail.address.city.split(",")[0]}
            // item.address.city.split(",")[0]
          />
        </HStack>
      </RatingCard>
      <RatingSection />
      <ReviewSection
        reviewItems={generateReviewObject(userByReview, reviewPerEvent)}
      />
    </VStack>
  );
}
