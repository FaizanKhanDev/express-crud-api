// studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    // Initial state for student data
    name: "",
    age: "",
    fees: "",
  },
  reducers: {
    // Add reducers to handle updating student data in the store
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateFees: (state, action) => {
      state.fees = action.payload;
    },
  },
});

export const { updateName, updateAge, updateFees } = studentSlice.actions;
export const selectStudent = (state) => state.student; // Selector function

export default studentSlice.reducer;
