import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/todo`,
        credentials: "include"
    }),
    tagTypes: ["todo"],
    endpoints: (builder) => {
        return {
            getTodos: builder.query({
                query: todoData => {
                    return {
                        url: "/",
                        method: "GET",
                        params: todoData
                    }
                },
                providesTags: ["todo"]
            }),
            addTodos: builder.mutation({
                query: todoData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
            deleteTodos: builder.mutation({
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

export const { useLazyGetTodosQuery, useAddTodosMutation, useDeleteTodosMutation } = todoApi
