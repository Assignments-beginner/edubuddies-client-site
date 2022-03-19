import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  student: [],
  teacher: [],
  historyData: [],
  role: [],
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
    addHistoryData: (state, action) => {
      console.log(action.payload);
      state.historyData = action.payload;
    },
    addRole: (state, action) => {
      console.log(action.payload);
      state.role = action.payload;
    },
  },
});

export const {
  addCourse,
  loadStudent,
  addHistoryData,
  addRole,
} = eduBuddySlice.actions;
export default eduBuddySlice.reducer;
