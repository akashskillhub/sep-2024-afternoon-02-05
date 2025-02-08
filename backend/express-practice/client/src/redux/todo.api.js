import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/todos" }),
    tagTypes: ["note"],
    endpoints: (builder) => {
        return {
            getTodos: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["note"]
            }),
            addTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["note"]
            }),
            updateTodo: builder.mutation({
                query: todoData => {
                    return {
                        url: "/modify/" + todoData._id,
                        method: "PATCH",
                        body: todoData
                    }
                },
                invalidatesTags: ["note"]
            }),
            deleteTodo: builder.mutation({
                query: _id => {
                    return {
                        url: "/remove/" + _id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["note"]
            }),
        }
    }
})

export const {
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetTodosQuery,
    useUpdateTodoMutation
} = todoApi
