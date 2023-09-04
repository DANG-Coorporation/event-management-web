import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEvent } from "../../../api/fetchEvents";

const initialState = {
  events: [],
  loading: "idle",
  error: null,
};

export const getEvents = createAsyncThunk("eventFetch/getevents", async () => {
  try {
    const res = await fetchEvent();
    const data = await res.data;
    return data;
  } catch (e) {
    return e;
  }
});

const eventFetchSlice = createSlice({
  name: "eventFetch",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.events = action.payload;
    });

    builder.addCase(getEvents.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(getEvents.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.payload;
    });
  },
});

export default eventFetchSlice.reducer;
