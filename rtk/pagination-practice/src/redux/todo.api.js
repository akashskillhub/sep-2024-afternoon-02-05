import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/notes" }),
    tagTypes: [],
    endpoints: (builder) => {
        return {
            getNotes: builder.query({
                //     👇 object destructuring
                query: ({ limit, skip }) => {
                    return {
                        url: "/",
                        method: "GET",
                        params: { _limit: limit, _start: skip } // filter inside json-server
                    }
                },
                transformResponse: (result, meta) => {

                    return {
                        result,
                        total: meta.response.headers.get("X-Total-Count")
                    }
                },
                providesTags: []
            }),


        }
    }
})

export const {
    useGetNotesQuery, // page load
    useLazyGetNotesQuery // conditional 
} = todoApi
