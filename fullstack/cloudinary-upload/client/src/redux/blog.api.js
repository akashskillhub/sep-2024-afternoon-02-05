import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/articles" }),
    tagTypes: ["blog"],
    endpoints: (builder) => {
        return {
            getBlogs: builder.query({
                query: () => {
                    return {
                        url: "/",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            addBlog: builder.mutation({
                query: userData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deleteBlog: builder.mutation({
                query: _id => {
                    return {
                        url: "/remove/" + _id,
                        method: "DELETE",
                        // body: userData
                    }
                },
                invalidatesTags: ["blog"]
            }),

        }
    }
})

export const { useAddBlogMutation, useGetBlogsQuery, useDeleteBlogMutation } = blogApi
