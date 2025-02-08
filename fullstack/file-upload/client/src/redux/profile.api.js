import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/account",
    }),
    tagTypes: ["profile"],
    endpoints: (builder) => {
        return {

            addAccount: builder.mutation({
                query: userData => {
                    return {
                        url: "/create",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["profile"]
            }),
            getAccounts: builder.query({
                query: userData => {
                    return {
                        url: "/",
                        method: "GET",
                    }
                },
                providesTags: ["profile"]
            }),

        }
    }
})

export const { useAddAccountMutation, useGetAccountsQuery } = profileApi
