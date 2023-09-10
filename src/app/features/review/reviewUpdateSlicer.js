import { createSlice } from "@reduxjs/toolkit";

const reviewUpdateSlicer = createSlice({
  name: "reviewUpdate",
  initialState: {
    isUpdate: false,
  },
  reducers: {
    setIsUpdate: (state, action) => {
      state.isUpdate = action.payload;
    },
  },
});

export const { setIsUpdate } = reviewUpdateSlicer.actions;
export default reviewUpdateSlicer.reducer;
