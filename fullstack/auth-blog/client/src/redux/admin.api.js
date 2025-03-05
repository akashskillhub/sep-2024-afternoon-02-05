import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://blog-myqb.onrender.com/api/admin",
        credentials: "include"
    }),
    tagTypes: ["blog", "user"],
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/users",
                        method: "GET"
                    }
                },
                providesTags: ["user"]
            }),
            getBlogs: builder.query({
                query: () => {
                    return {
                        url: "/blogs",
                        method: "GET"
                    }
                },
                providesTags: ["blog"]
            }),
            updateAccount: builder.mutation({
                query: userData => {
                    return {
                        url: "/block-unblock-user/" + userData._id,
                        method: "PATCH",
                        body: userData
                    }
                },
                invalidatesTags: ["user"]
            }),
            updateBlog: builder.mutation({
                query: blogData => {
                    return {
                        url: "/publish-unpublish-blog/" + blogData._id,
                        method: "PATCH",
                        body: blogData
                    }
                },
                invalidatesTags: ["blog"]
            }),

        }
    }
})

export const {
    useGetBlogsQuery,
    useGetUsersQuery,
    useUpdateAccountMutation,
    useUpdateBlogMutation
} = adminApi
