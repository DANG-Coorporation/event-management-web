import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./features/test/testSlicer";

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
