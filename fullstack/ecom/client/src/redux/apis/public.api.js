import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const publicApi = createApi({
    reducerPath: "publicApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/public`,
        credentials: "include"
    }),
    tagTypes: ["product"],
    endpoints: (builder) => {
        return {
            getProducts: builder.query({
                query: arg => {
                    return {
                        url: "/products",
                        method: "GET",
                        params: arg
                    }
                },
                providesTags: ["product"]
            }),
            getProductDetails: builder.query({
                query: _id => {
                    return {
                        url: "/product-details/" + _id,
                        method: "GET",
                        // params: arg
                    }
                },
                providesTags: ["product"]
            }),
        }
    }
})

export const { useLazyGetProductsQuery, useGetProductDetailsQuery } = publicApi
