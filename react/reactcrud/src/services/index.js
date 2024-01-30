import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const student = createApi({
    reducerPath: 'student',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),

    endpoints: (builder) => ({

    })
})