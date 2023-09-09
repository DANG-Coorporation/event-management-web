import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "../../../api/fetchReviews";
import { fetchReviewById } from "../../../api/fetchReviewById";
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

export const getReviewById = createAsyncThunk(
  "reviews/fetchById",
  async (param = {}) => {
    try {
      const res = await fetchReviewById(param);
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
      byId: "idle",
    },
    reviewAll: [],
    review: {},
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

    builder.addCase(getReviewById.fulfilled, (state, action) => {
      state.review = action.payload;
      state.loading.byId = "success";
    });

    builder.addCase(getReviewById.rejected, (state, action) => {
      state.error = action.payload;
      state.loading.byId = "failed";
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
