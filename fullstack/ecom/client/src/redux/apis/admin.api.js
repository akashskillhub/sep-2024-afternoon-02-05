import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/admin`,
        credentials: "include"
    }),
    tagTypes: [],
    endpoints: (builder) => {
        return {
            getAdminProducts: builder.query({
                query: () => {
                    return {
                        url: "/products",
                        method: "GET"
                    }
                },
                providesTags: ["product"]
            }),
            getAdminSellers: builder.query({
                query: arg => {
                    return {
                        url: "/sellers",
                        method: "GET",
                        params: arg
                    }
                },
                providesTags: ["seller"]
            }),

            sellerAccountUpdate: builder.mutation({
                query: sellerData => {
                    return {
                        url: "/seller-update/" + sellerData._id,
                        method: "PATCH",
                        body: sellerData
                    }
                },
                invalidatesTags: ["seller"]
            }),

            productUpdate: builder.mutation({
                query: productData => {
                    return {
                        url: "/product-update/" + productData._id,
                        method: "PATCH",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),


        }
    }
})

export const {
    useLazyGetAdminProductsQuery,
    useLazyGetAdminSellersQuery,
    useProductUpdateMutation,
    useSellerAccountUpdateMutation
} = adminApi
