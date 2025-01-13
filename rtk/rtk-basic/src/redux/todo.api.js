import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const todoApi = createApi({
    reducerPath: "todoApi", // unique
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/notes" }),
    endpoints: builder => {
        return {
            //                👇 get
            getTodos: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET",
                    }
                },
                providesTags: ["todo"]
            }),

            //                  👇 create update delete
            addTodo: builder.mutation({
                query: (todoData) => {
                    return {
                        url: "/",
                        method: "POST",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),

            updateTodo: builder.mutation({
                query: (todoData) => {
                    return {
                        url: "/" + todoData.id,
                        method: "PATCH",
                        body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),

            deleteTodo: builder.mutation({
                query: (id) => {
                    return {
                        url: "/" + id,
                        method: "DELETE",
                        // body: todoData
                    }
                },
                invalidatesTags: ["todo"]
            }),
        }
    }
})

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = todoApi

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// export const todoApi = createApi({
//     reducerPath: "todoApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/notes" }),
//     tagTypes: ["todo"],
//     endpoints: (builder) => {
//         return {
//             getTodos: builder.query({
//                 query: () => {
//                     return {
//                         url: "/",
//                         method: "GET"
//                     }
//                 },
//                 providesTags: ["todo"]
//             }),
//             addTodo: builder.mutation({
//                 query: todoData => {
//                     return {
//                         url: "/",
//                         method: "POST",
//                         body: todoData
//                     }
//                 },
//                 invalidatesTags: ["todo"]
//             }),
//             updateTodo: builder.mutation({
//                 query: todoData => {
//                     return {
//                         url: "/" + todoData.id,
//                         method: "PATCH",
//                         body: todoData
//                     }
//                 },
//                 invalidatesTags: ["todo"]
//             }),
//             deleteTodo: builder.mutation({
//                 query: id => {
//                     return {
//                         url: "/" + id,
//                         method: "DELETE",
//                         // body: todoData
//                     }
//                 },
//                 invalidatesTags: ["todo"]
//             }),

//         }
//     }
// })

// export const {
//     useAddTodoMutation,
//     useDeleteTodoMutation,
//     useGetTodosQuery,
//     useUpdateTodoMutation
// } = todoApi
