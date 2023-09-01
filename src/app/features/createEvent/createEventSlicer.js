import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
const today = DateTime.now().toISODate();
const initialState = {
  name: "createEvent",
  userFullName: "Galih Setyawan",
  coverImage: "",
  organizerPhoto: "",
  formatIndex: 0,
  topicIndex: 0,
  isOpenModalCategory: false,
  isOpenModalEventDateTime: false,
  isOpenModalGetEventLocation: false,
  eventTime: {
    date: {
      start: today,
      end: today,
    },
    time: {
      start: "00:00",
      end: "00:00",
    },
  },
  address: {
    name: "Stadion GBK",
    city: "Jakarta",
    placeName: "Gelora Bung Karno",
    coordinate: {
      lat: -6.218335,
      long: 106.802216,
    },
  },
  isPrivate: false,
  tag: [],
};

const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    setCoverImage: (state, action) => {
      state.coverImage = action.payload;
    },
    removeCoverImage: (state) => {
      state.coverImage = "";
    },
    setModalCategory: (state, action) => {
      state.isOpenModalCategory = action.payload;
    },
    setFormatEvent: (state, action) => {
      state.formatIndex = action.payload;
    },
    setTopicEvent: (state, action) => {
      state.topicIndex = action.payload;
    },
    setEventPrivacy: (state, action) => {
      state.isPrivate = action.payload;
    },
    setEventTags: (state, action) => {
      state.tag = action.payload;
    },
    setOrganizerPhoto: (state, action) => {
      state.organizerPhoto = action.payload;
    },
    setModalEventDateTime: (state, action) => {
      state.isOpenModalEventDateTime = action.payload;
    },
    setEventStartDate: (state, action) => {
      state.eventTime.date.start = action.payload;
    },
    setEventEndDate: (state, action) => {
      state.eventTime.date.end = action.payload;
    },
    setEventStartTime: (state, action) => {
      state.eventTime.time.start = action.payload;
    },
    setEventEndTime: (state, action) => {
      state.eventTime.time.end = action.payload;
    },
    setModalGetEventLocation: (state, action) => {
      state.isOpenModalGetEventLocation = action.payload;
    },
    setEventAddressName: (state, action) => {
      state.address.name = action.payload;
    },
    setEventAddressCity: (state, action) => {
      state.address.city = action.payload;
    },
    setEventAddressPlaceName: (state, action) => {
      state.address.placeName = action.payload;
    },
    setEventAddressCoordinateLat: (state, action) => {
      state.address.coordinate.lat = action.payload;
    },
    setEventAddressCoordinateLong: (state, action) => {
      state.address.coordinate.long = action.payload;
    },
  },
});

export const {
  setCoverImage,
  removeCoverImage,
  setModalCategory,
  setFormatEvent,
  setTopicEvent,
  setEventPrivacy,
  setEventTags,
  setOrganizerPhoto,
  setModalEventDateTime,
  setEventStartDate,
  setEventEndDate,
  setEventStartTime,
  setEventEndTime,
  setModalGetEventLocation,
  setEventAddressName,
  setEventAddressCity,
  setEventAddressPlaceName,
  setEventAddressCoordinateLat,
  setEventAddressCoordinateLong,
} = createEventSlice.actions;

export default createEventSlice.reducer;
