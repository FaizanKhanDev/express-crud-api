import { createSlice } from "@reduxjs/toolkit";


const studentSlice = createSlice({
    name: "Student",
    initialState: {
        name: 'Khizar',
        age: '25',
        fees: '1251.25'
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateAge: (state, action) => {
            state.age = action.payload;
        },
        updateFees: (state, action) => {
            state.fees = action.payload;
        },
    }
})

export const {
    updateName,
    updateAge,
    updateFees,

} = studentSlice.actions;

export default studentSlice.reducer