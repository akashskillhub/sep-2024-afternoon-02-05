import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/auth`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            googleLogin: builder.mutation({
                query: userData => {
                    return {
                        url: "/continue-with-google",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            userSignOut: builder.mutation({
                query: userData => {
                    return {
                        url: "/user-logout",
                        method: "POST",
                        body: userData
                    }
                },
            }),

            sellerSignUp: builder.mutation({
                query: userData => {
                    return {
                        url: "/seller-register",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            sellerSignIn: builder.mutation({
                query: userData => {
                    return {
                        url: "/seller-login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("seller", JSON.stringify(data.result))
                    return data.result
                }
            }),
            sellerSignOut: builder.mutation({
                query: userData => {
                    return {
                        url: "/seller-logout",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("seller")
                    return data
                }
            }),

            sendOTP: builder.mutation({
                query: userData => {
                    return {
                        url: "/send-otp",
                        method: "POST",
                        body: userData
                    }
                },
            }),
            adminSignIn: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin-login",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.setItem("admin", JSON.stringify(data.result))
                    return data.result
                }
            }),
            adminLogout: builder.mutation({
                query: userData => {
                    return {
                        url: "/admin-logout",
                        method: "POST",
                        body: userData
                    }
                },
                transformResponse: data => {
                    localStorage.removeItem("admin")
                    return data
                }
            }),

        }
    }
})

export const {
    useAdminSignInMutation,
    useSendOTPMutation,
    useAdminLogoutMutation,

    useGoogleLoginMutation,
    useUserSignOutMutation,

    useSellerSignUpMutation,
    useSellerSignInMutation,
    useSellerSignOutMutation,
} = authApi