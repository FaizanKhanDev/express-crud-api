import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { student } from "../services";


export const store = configureStore({
    reducer: {
        [student.reducerPath]: student.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(student.middleware)

    
})

setupListeners(store.dispatch)
