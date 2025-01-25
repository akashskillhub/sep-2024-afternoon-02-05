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
                        params: userData // FILLTER
                    }
                },
                transformResponse: data => {
                    if (data.length > 0) {
                        localStorage.setItem("kahipn", JSON.stringify(data[0]))
                        return data[0]
                    } else {
                        return false
                    }
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

export const { useLazySigninQuery, useSignupMutation } = authApi
