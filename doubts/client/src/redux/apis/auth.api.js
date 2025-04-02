import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    // baseQuery: fetchBaseQuery({ baseUrl: `https://blog-myqb.onrender.com/api/auth` }),
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth` }),
    endpoints: (builder) => {
        return {
            register: builder.mutation({
                query: userData => {
                    return {
                        url: "/register-user",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            login: builder.mutation({
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
            logout: builder.mutation({
                query: userData => {
                    return {
                        url: "/logout-user",
                        method: "POST",
                        // body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("user")
                    return data.result
                }
            }),
            oauth: builder.mutation({
                query: userData => {
                    return {
                        url: "/oauth",
                        method: "POST",
                        body: userData
                    }
                },
            }),

        }
    }
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useOauthMutation } = authApi
