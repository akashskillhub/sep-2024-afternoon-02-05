import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/notes" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getTodos: builder.query({
                query: ({ limit, start }) => {
                    return {
                        url: "/",
                        method: "GET",
                        params: { _limit: limit, _start: start }
                    }
                },
                transformErrorResponse: () => { },
                transformResponse: (data, meta) => {
                    // console.warn("data", data)
                    // console.warn("meta", meta)
                    // // ❌ we will not use this code in future
                    // console.log(meta.response.headers.get("X-Total-Count"))
                    return {
                        result: data,
                        total: meta.response.headers.get("X-Total-Count")
                    }

                }
                // providesTags: ["tagName"]
            }),
            addTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: todoData
                    }
                },
                // invalidatesTags: ["tagName"]
            }),
        }
    }
})

export const {
    useAddTodoMutation,
    useGetTodosQuery,
    useLazyGetTodosQuery
} = todoApi
