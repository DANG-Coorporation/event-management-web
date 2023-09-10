import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchReviewByEvent } from "../../../api/fetchReviewByEvent";

export const getReviewByEvent = createAsyncThunk(
  "reviewByEvent/get",
  async (eventId) => {
    try {
      const res = await fetchReviewByEvent(eventId);
      const status = await res.data;
      return status;
    } catch (e) {
      return e.response.status;
    }
  }
);

const ReviewByEventSlicer = createSlice({
  name: "reviewByEvent",
  initialState: {
    loading: "idle",
    reviewByEvent: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getReviewByEvent.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(getReviewByEvent.fulfilled, (state, action) => {
      state.loading = "success";
      state.reviewByEvent = action.payload;
    });

    builder.addCase(getReviewByEvent.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default ReviewByEventSlicer.reducer;
