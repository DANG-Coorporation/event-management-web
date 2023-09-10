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
import { getReviewByEvent } from "../../app/features/review/getReviewByEvent";
import { getReviewByUserEvent } from "../../app/features/review/getReviewByUserEvent";
import { getUsersByReview } from "../../app/features/users/userSlicer";
import { generateReviewObject } from "../../utils/generateReviewobj";
import { setReviewObjList } from "../../app/features/review/reviewSlicer";
import { checkIsLogedIn, parseToken } from "../../utils/checkUsers";
import {
  setIsRated,
  setNumericRating,
  setRatingData,
  setstarAmount,
} from "../../app/features/starRatingBehaviour/starRating";
import { setIsUpdate } from "../../app/features/review/reviewUpdateSlicer";
import { calculateAverageRating } from "../../utils/calculateRatingRate";
import { calculateRatingData } from "../../utils/calculateRatingAmount";
// import { getEvents } from "../../app/features/eventFetching/eventFetchSlicer";
export default function RatingPage() {
  const pageDetail = useSelector((state) => state.detailEvent.pageDetail);
  const detailEventStat = useSelector((state) => state.detailEvent.status);

  const reviewData = useSelector((state) => state.reviews.reviewObjList);

  const reviewByEvent = useSelector(
    (state) => state.reviewByEvent.reviewByEvent
  );
  const reviewByEventStat = useSelector((state) => state.reviewByEvent.loading);

  const reviewByUserEvent = useSelector(
    (state) => state.reviewByUserEvent.reviewByUserEvent
  );
  const reviewByUserEventStat = useSelector(
    (state) => state.reviewByUserEvent.loading
  );

  const userByReview = useSelector((state) => state.users.usersByReview);
  const userByReviewStat = useSelector((state) => state.users.status);

  const isUpdateSequence = useSelector((state) => state.updateReview.isUpdate);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    setIsUpdate(true);
    if (location.pathname.includes("/rating")) {
      const fetchAll = async () => {
        dispatch(fetchEventById(id));
        if (checkIsLogedIn()) {
          const reviewByUserEvent = await dispatch(
            getReviewByUserEvent({ eventId: id, userId: parseToken().id })
          );
          if (reviewByUserEvent.payload.length > 0) {
            dispatch(setIsRated(true));
            dispatch(setstarAmount(reviewByUserEvent.payload[0].star));
          } else {
            dispatch(setIsRated(false));
            dispatch(setstarAmount(0));
          }
        } else {
          dispatch(setIsRated(false));
          dispatch(setstarAmount(0));
        }
        const reviewbyevent = await dispatch(getReviewByEvent(id));
        console.log(reviewbyevent.payload);
        if (reviewbyevent.payload.length > 0) {
          dispatch(
            setNumericRating(calculateAverageRating(reviewbyevent.payload))
          );
          dispatch(setRatingData(calculateRatingData(reviewbyevent.payload)));
          const userbyreview = await dispatch(
            getUsersByReview(reviewbyevent.payload)
          );
          dispatch(
            setReviewObjList([
              ...generateReviewObject(
                userbyreview.payload,
                reviewbyevent.payload
              ),
            ])
          );
        } else {
          await dispatch(getUsersByReview(reviewbyevent.payload));
          dispatch(setNumericRating(0));
          dispatch(setReviewObjList([]));
        }
      };

      fetchAll();
    }
  }, [dispatch, id, location]);

  // useEffect(() => {
  //   if (location.pathname.includes("rating")) {
  //     dispatch(fetchEventById(id));
  //     dispatch(getReviewByEvent(id));
  //     if (checkIsLogedIn()) {
  //       dispatch(
  //         getReviewByUserEvent({ eventId: id, userId: parseToken().id })
  //       );
  //     }
  //   }
  // }, [dispatch, id]);

  // useEffect(() => {
  //   if (reviewByEvent.length === 0 || reviewByEventStat === "idle") {
  //     return;
  //   }
  //   console.log("reviewbyEvent", reviewByEvent);
  //   dispatch(setNumericRating(calculateAverageRating(reviewByEvent)));
  //   dispatch(getUsersByReview(reviewByEvent));
  // }, [reviewByEvent]);

  // useEffect(() => {
  //   if (userByReview.length === 0 || userByReviewStat === "idle") {
  //     return;
  //   }

  //   console.log("userByReview", userByReview);

  //   if (userByReview.length !== reviewByEvent.length) {
  //     return;
  //   }

  //   dispatch(
  //     setReviewObjList([...generateReviewObject(userByReview, reviewByEvent)])
  //   );
  // }, [userByReview]);

  // useEffect(() => {
  //   if (reviewByUserEvent === null) {
  //     return;
  //   }

  //   if (reviewByUserEvent.length > 0) {
  //     dispatch(setIsRated(true));
  //     dispatch(setstarAmount(reviewByUserEvent[0].star));
  //   } else {
  //     dispatch(setIsRated(false));
  //     dispatch(setstarAmount(0));
  //   }
  // }, [reviewByUserEvent]);

  useEffect(() => {
    if (isUpdateSequence) {
      dispatch(setIsUpdate(false));
    }
  }, [reviewData]);

  return detailEventStat !== "success" ||
    reviewByEventStat !== "success" ||
    userByReviewStat !== "success" ||
    reviewData === null ||
    isUpdateSequence ? (
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
          />
        </HStack>
      </RatingCard>
      <RatingSection />
      <ReviewSection reviewItems={reviewData} />
    </VStack>
  );
}
