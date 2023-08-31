import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./features/test/testSlicer";
import deviceDetectionReducer from "./features/deviceDetection/deviceDetectionSlicer";
export const store = configureStore({
  reducer: {
    test: testReducer,
    deviceDetection: deviceDetectionReducer,
  },
});
