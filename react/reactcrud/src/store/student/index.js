// studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    // Initial state for student data
    student:{
        name: "Rehman",
        age: "18",
        fees: "1300",

    }
  },
  reducers: {
    // Add reducers to handle updating student data in the store
    updateName: (state, action) => {
        console.log("object", action.payload);
      state.student.name = action.payload;
    },
    updateAge: (state, action) => {
      state.student.age = action.payload;
    },
    updateFees: (state, action) => {
      state.student.fees = action.payload;
    },
    getStudentById: (state, action) => {
        state.student = {
          _id: action.payload._id,
          name: action.payload.name,
          age: action.payload.age,
          fees: action.payload.fees.$numberDecimal,
        };
      }
  },
});

export const { updateName, updateAge, updateFees, getStudentById } = studentSlice.actions;

export default studentSlice.reducer;
