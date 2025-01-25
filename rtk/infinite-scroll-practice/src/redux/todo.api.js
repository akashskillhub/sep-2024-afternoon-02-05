import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/notes" }),
    endpoints: (builder) => {
        return {
            getTodos: builder.query({
                query: ({ limit, skip }) => {
                    return {
                        url: "/",
                        method: "GET",
                        params: { _limit: limit, _start: skip }
                    }
                },
                transformResponse: (data, meta) => {

                    return {
                        result: data,
                        total: meta.response.headers.get("X-Total-Count")
                    }
                }
            })
        }
    }
})

export const { useLazyGetTodosQuery } = todoApi
