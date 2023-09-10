import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEventById, getEventsByQuery } from "../../../api/event";

const initialState = {
  pageDetail: {},
  id: 0,
  loading: false,
  error: false,
  status: "idle",
  discoveryStatus: "idle",
  discovery: [],
};

export const fetchEventById = createAsyncThunk(
  "pageDetail/getPageDetail",
  async (id) => {
    try {
      const res = await getEventById(id);
      const data = await res.data[0];
      return data;
    } catch (e) {
      return e;
    }
  }
);

export const fetchEventByQuery = createAsyncThunk(
  "pageDetail/fetchEventByQuery",
  async (query) => {
    try {
      const res = await getEventsByQuery(query);
      const data = await res.data;
      return data;
    } catch (e) {
      return e;
    }
  }
);

const pageDetailSlice = createSlice({
  name: "pageDetail",
  initialState,
  reducers: {
    getPageDetail: (state) => {
      state.loading = true;
    },
    getPageDetailSuccess: (state, action) => {
      state.pageDetail = action.payload;
      state.loading = false;
      state.error = false;
    },
    getPageDetailFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEventById.fulfilled, (state, action) => {
      state.pageDetail = action.payload;
      state.loading = false;
      state.error = false;
      state.status = "success";
    });

    builder.addCase(fetchEventById.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.status = "loading";
    });
    builder.addCase(fetchEventById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.status = "failed";
    });
    builder.addCase(fetchEventByQuery.fulfilled, (state, action) => {
      state.discovery = action.payload;
      state.discoveryStatus = "success";
    });
    builder.addCase(fetchEventByQuery.pending, (state) => {
      state.discoveryStatus = "loading";
    });
  },
});

export const { getPageDetail, getPageDetailSuccess, getPageDetailFail } =
  pageDetailSlice.actions;

export default pageDetailSlice.reducer;
