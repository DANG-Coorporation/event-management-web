import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkReviewByUser } from "../../../api/checkReviewByUser";

export const getReviewByUserEvent = createAsyncThunk(
  "reviewByuserEvent/get",
  async (param = {}) => {
    try {
      const res = await checkReviewByUser(param);
      const status = await res.data;
      return status;
    } catch (e) {
      return e.response.status;
    }
  }
);

const ReviewByUserEventSlicer = createSlice({
  name: "reviewByuserEvent",
  initialState: {
    loading: "idle",
    reviewByUserEvent: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getReviewByUserEvent.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(getReviewByUserEvent.fulfilled, (state, action) => {
      state.loading = "success";
      state.reviewByUserEvent = action.payload;
    });

    builder.addCase(getReviewByUserEvent.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default ReviewByUserEventSlicer.reducer;
