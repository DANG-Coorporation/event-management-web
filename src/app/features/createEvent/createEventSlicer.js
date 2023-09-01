import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "createEvent",
  coverImage: "",
  formatIndex: 0,
  topicIndex: 0,
  isOpenModalCategory: false,
  isPrivate: false,
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
  },
});

export const {
  setCoverImage,
  removeCoverImage,
  setModalCategory,
  setFormatEvent,
  setTopicEvent,
  setEventPrivacy,
} = createEventSlice.actions;

export default createEventSlice.reducer;
