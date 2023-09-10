import { configureStore } from "@reduxjs/toolkit";
import createEventReducer from "./features/createEvent/createEventSlicer";
import deviceDetectionReducer from "./features/deviceDetection/deviceDetectionSlicer";
import detailEventReducer from "./features/eventDetail/eventDetailSlicer";
import eventFetchReducer from "./features/eventFetching/eventFetchSlicer";
import eventSwiperHoverDetectionReducer from "./features/eventSwiperHoverDetection/eventSwiperHoverDetection";
import deviceDarkenReducer from "./features/screenDarken/deviceDarkenSlicer";
import testReducer from "./features/test/testSlicer";
import userReducer from "./features/users/userSlicer";
import reviewReducer from "./features/review/reviewSlicer";
import starRatingReducer from "./features/starRatingBehaviour/starRating";
import postReviewReducer from "./features/review/postReviewSlicer";
import reviewUpdateReducer from "./features/review/reviewUpdateSlicer";
import reviewByUserEventReducer from "./features/review/getReviewByUserEvent";
import reviewByEventReducer from "./features/review/getReviewByEvent";
export const store = configureStore({
  reducer: {
    test: testReducer,
    deviceDetection: deviceDetectionReducer,
    screenDarken: deviceDarkenReducer,
    createEvent: createEventReducer,
    swiperHoverDetection: eventSwiperHoverDetectionReducer,
    eventFetch: eventFetchReducer,
    users: userReducer,
    detailEvent: detailEventReducer,
    reviews: reviewReducer,
    reviewByUserEvent: reviewByUserEventReducer,
    reviewByEvent: reviewByEventReducer,
    postReview: postReviewReducer,
    starRating: starRatingReducer,
    updateReview: reviewUpdateReducer,
  },
});
