import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/user`,
        credentials: "include"
    }),
    endpoints: (builder) => {
        return {
            placeOrder: builder.mutation({
                query: orderData => {
                    return {
                        url: "/palce-order",
                        method: "POST",
                        body: orderData
                    }
                },
            }),
            fetchOrders: builder.query({
                query: arg => {
                    return {
                        url: "/orders",
                        method: "GET",
                        params: arg
                    }
                },
            }),
        }
    }
})

export const { usePlaceOrderMutation, useLazyFetchOrdersQuery } = userApi
