import { configureStore } from "@reduxjs/toolkit";
import edubuddySlice from "./edubuddySlice";

export const store = configureStore({
  reducer: {
    edu: edubuddySlice,
  },
});
