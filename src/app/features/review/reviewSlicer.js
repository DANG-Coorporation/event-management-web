import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "../../../api/fetchReviews";
import { checkReviewByUser } from "../../../api/checkReviewByUser";
import { fetchReviewByEvent } from "../../../api/fetchReviewByEvent";

export const getReviews = createAsyncThunk("reviews/fetch", async () => {
  try {
    const res = await fetchReviews();
    const data = await res.data;
    return data;
  } catch (e) {
    return e;
  }
});

export const getReviewByUserandEvent = createAsyncThunk(
  "reviews/fetchById",
  async (param = {}) => {
    try {
      const res = await checkReviewByUser(param);
      const data = await res.data;
      return data;
    } catch (e) {
      return e;
    }
  }
);

export const getReviewByEvent = createAsyncThunk(
  "reviews/fetchByEvent",
  async (eventId) => {
    try {
      const res = await fetchReviewByEvent(eventId);
      const data = await res.data;
      return data;
    } catch (e) {
      return e;
    }
  }
);

const reviewSlicer = createSlice({
  name: "reviews",
  initialState: {
    error: null,
    loading: {
      perEvent: "idle",
      all: "idle",
      byUserEvent: "idle",
      postReview: "idle",
    },
    reviewAll: [],
    review: null,
    reviewPerEvent: [],
    reviewObjList: null,
  },

  reducers: {
    setReviewObjList: (state, action) => {
      state.reviewObjList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.reviewAll = action.payload;
      state.loading.all = "success";
    });

    builder.addCase(getReviews.rejected, (state, action) => {
      state.error = action.payload;
      state.loading.all = "failed";
    });

    builder.addCase(getReviewByUserandEvent.fulfilled, (state, action) => {
      state.review = action.payload;
      state.loading.byUserEvent = "success";
    });

    builder.addCase(getReviewByUserandEvent.rejected, (state, action) => {
      state.error = action.payload;
      state.loading.byUserEvent = "failed";
    });

    builder.addCase(getReviewByEvent.fulfilled, (state, action) => {
      state.reviewPerEvent = action.payload;
      state.loading.perEvent = "success";
    });

    builder.addCase(getReviewByEvent.rejected, (state, action) => {
      state.error = action.payload;
      state.loading.perEvent = "failed";
    });

    builder.addCase(getReviewByEvent.pending, (state) => {
      state.loading.perEvent = "loading";
    });
  },
});

export const { setReviewObjList } = reviewSlicer.actions;
export default reviewSlicer.reducer;
