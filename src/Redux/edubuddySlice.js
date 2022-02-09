import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  student: [],
  teacher: [],
};

export const eduBuddySlice = createSlice({
  name: "edubuddy",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses = action.payload;
    },

    loadStudent: (state, action) => {
      state.student = action.payload;
    },
  },
});

export const { addCourse, loadStudent } = eduBuddySlice.actions;
export default eduBuddySlice.reducer;
