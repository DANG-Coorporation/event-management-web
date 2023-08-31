import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "deviceDetection",
  status: "idle",
  device: {
    isDesktopOrLaptop: false,
    isBigScreen: false,
    isTabletOrMobile: false,
    isPortrait: false,
    isRetina: false,
  },
};

const deviceDetectionSlice = createSlice({
  name: "deviceDetection",
  initialState,
  reducers: {
    setDevice: (state, action) => {
      state.device = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setDevice, setStatus } = deviceDetectionSlice.actions;

export const fetchDeviceInfo = () => async (dispatch) => {
  try {
    const isDesktopOrLaptop = window.matchMedia("(min-width: 1224px)").matches;
    const isBigScreen = window.matchMedia("(min-width: 1824px)").matches;
    const isTabletOrMobile = window.matchMedia("(max-width: 1224px)").matches;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const isRetina = window.matchMedia("(min-resolution: 2dppx)").matches;

    const device = {
      isDesktopOrLaptop,
      isBigScreen,
      isTabletOrMobile,
      isPortrait,
      isRetina,
    };

    dispatch(setDevice(device));
    dispatch(setStatus("done"));
  } catch (error) {
    dispatch(setStatus("failed"));
  }
};

export default deviceDetectionSlice.reducer;
