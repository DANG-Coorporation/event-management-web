import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postReview } from "../../../api/postReview";

export const postUserReview = createAsyncThunk(
  "reviews/postReview",
  async (data = {}) => {
    try {
      const res = await postReview(data);
      const status = res.status;
      return status;
    } catch (e) {
      return e.response.status;
    }
  }
);

const postReviewSlicer = createSlice({
  name: "postReview",
  initialState: {
    loading: "idle",
    statusCode: 0,
  },
  extraReducers: (builder) => {
    builder.addCase(postUserReview.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(postUserReview.fulfilled, (state, action) => {
      state.statusCode = action.payload;
      if (action.payload.toString().startsWith("5")) {
        state.loading = "failed";
      } else {
        state.loading = "success";
      }
    });

    builder.addCase(postUserReview.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default postReviewSlicer.reducer;
