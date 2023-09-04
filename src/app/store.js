import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./features/test/testSlicer";
import deviceDetectionReducer from "./features/deviceDetection/deviceDetectionSlicer";
import deviceDarkenReducer from "./features/screenDarken/deviceDarkenSlicer";
import createEventReducer from "./features/createEvent/createEventSlicer";

export const store = configureStore({
  reducer: {
    test: testReducer,
    deviceDetection: deviceDetectionReducer,
    screenDarken: deviceDarkenReducer,
    createEvent: createEventReducer,
  },
});
