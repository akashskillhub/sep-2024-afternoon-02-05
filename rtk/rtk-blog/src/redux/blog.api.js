import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/articles" }),
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
                query: blogData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            updateBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/" + blogData.id,
                        method: "PATCH",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),
            deleteBlog: builder.mutation({
                query: id => {
                    return {
                        url: "/" + id,
                        method: "DELETE",
                        // body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),

        }
    }
})

export const {
    useGetBlogsQuery,
    useAddBlogMutation,
    useDeleteBlogMutation,
    useUpdateBlogMutation
} = blogApi
