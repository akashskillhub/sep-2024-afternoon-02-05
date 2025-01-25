import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/users" }),
    endpoints: (builder) => {
        return {
            signin: builder.query({
                query: userData => {
                    return {
                        url: "/",
                        method: "GET",
                        params: userData
                    }
                },
                transformResponse: data => {
                    if (data.length > 0) {
                        localStorage.setItem("auth", JSON.stringify(data[0]))
                    }
                    return data
                }
            }),
            signup: builder.mutation({
                query: userData => {
                    return {
                        url: "/",
                        method: "POST",
                        body: userData
                    }
                },
            }),

        }
    }
})

export const {
    useLazySigninQuery,
    useSignupMutation
} = authApi
