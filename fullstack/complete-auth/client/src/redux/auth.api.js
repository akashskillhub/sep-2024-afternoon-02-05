import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth",
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            signin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                }
            }),
            signup: builder.mutation({
                query: userData => {
                    return {
                        url: "/register",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            signout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout",
                        method: "POST",
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    return data
                }
            }),

            fetchUsers: builder.query({
                query: userData => {
                    return {
                        url: "/users",
                        method: "GET",
                    }
                },
                transformResponse: data => {
                    // localStorage.removeItem("user")
                    return data.result
                }
            }),


        }
    }
})

export const {
    useSigninMutation,
    useSignoutMutation,
    useSignupMutation,
    useFetchUsersQuery
} = authApi
