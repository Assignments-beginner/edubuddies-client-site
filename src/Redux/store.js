import { configureStore } from "@reduxjs/toolkit";
import eduBuddySlice from "./edubuddySlice";

export const store = configureStore({
  reducer: {
    edu: eduBuddySlice,
  },
});
