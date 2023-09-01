import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "createEvent",
  userFullName: "Galih Setyawan",
  coverImage: "",
  formatIndex: 0,
  topicIndex: 0,
  isOpenModalCategory: false,
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
} = createEventSlice.actions;

export default createEventSlice.reducer;
