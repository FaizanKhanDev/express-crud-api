// store.js
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { student } from "../services";
import studentReducer from "../store/student/index";

export const store = configureStore({
  reducer: {
    [student.reducerPath]: student.reducer,
    students: studentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(student.middleware),
});

setupListeners(store.dispatch);
