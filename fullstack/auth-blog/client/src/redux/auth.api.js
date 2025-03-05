import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://blog-myqb.onrender.com/api/auth", credentials: "include" }),
    endpoints: (builder) => {
        return {
            signupUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/register-user",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            signinUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-user",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("user", JSON.stringify(data.result))
                    return data.result
                }
            }),
            signoutUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-user",
                        method: "POST",
                        // body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    return data
                }
            }),
            signinAdmin: builder.mutation({
                query: userData => {
                    return {
                        url: "/login-admin",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("admin", JSON.stringify(data.result))
                    return data.result
                }
            }),
            sendotp: builder.mutation({
                query: userData => {
                    return {
                        url: "/send-otp",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            signoutAdmin: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-admin",
                        method: "POST",
                        // body: userData
                    }
                },
            }),


        }
    }
})

export const {
    useSigninUserMutation,
    useSignupUserMutation,
    useSignoutUserMutation,

    useSigninAdminMutation,
    useSendotpMutation,
    useSignoutAdminMutation
} = authApi
