import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const mobileAuthApi = createApi({
    reducerPath: "mobileAuthApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/auth`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            mobileRegister: builder.mutation({
                query: userData => {
                    return {
                        url: "/signup",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            mobileLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/signin",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => data.result
            }),
            mobileLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/signout",
                        method: "POST",
                    }
                },
            }),

        }
    }
})

export const {
    useMobileLoginMutation,
    useMobileLogoutMutation,
    useMobileRegisterMutation
} = mobileAuthApi
