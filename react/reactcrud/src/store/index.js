import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { student } from "../services";
import { studentSlice } from "../store/student";

export const store = configureStore({
    reducer: {
        [student.reducerPath]: student.reducer,
        student: studentSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(student.middleware)

    
})

setupListeners(store.dispatch)
