import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const mobileTodoApi = createApi({
    reducerPath: "mobileTodoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/todo`,
        credentials: "include"
    }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            mobileGetTodo: builder.query({
                query: () => {
                    return {
                        url: "/fetch",
                        method: "GET"
                    }
                },
                providesTags: ["todo"]
            }),
            mobileAddTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            mobileUpdateTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/update/" + todoData._id,
                        method: "PUT",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            mobileDeleteTodo: builder.mutation({
                query: _id => {
                    return {
                        url: "/delete/" + _id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["todo"]
            }),
        }
    }
})

export const {
    useLazyMobileGetTodoQuery,
    useMobileAddTodoMutation,
    useMobileDeleteTodoMutation,
    useMobileUpdateTodoMutation
} = mobileTodoApi
