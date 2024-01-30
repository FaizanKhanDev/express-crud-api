import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const student = createApi({
    reducerPath: 'student',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),

    endpoints: (builder) => ({
        getAllStudentsList: builder.query({
            query: () => ({
                url:"/student",
                method: "GET"

            })

        }),
        createStudent: builder.mutation({
            query: (student) => ({
                url: "/student",
                method: "POST",
                body: student
            })
        })
    })
})

export const { useGetAllStudentsListQuery } = student