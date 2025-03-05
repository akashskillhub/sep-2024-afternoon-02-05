import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const sellerApi = createApi({
    reducerPath: "sellerApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/seller`,
        credentials: "include"
    }),
    tagTypes: ["product"],
    endpoints: (builder) => {
        return {
            readProducts: builder.query({
                query: () => {
                    return {
                        url: "/get-product",
                        method: "GET"
                    }
                },
                providesTags: ["product"]
            }),
            createProduct: builder.mutation({
                query: productData => {
                    return {
                        url: "/add-product",
                        method: "POST",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            modifyProduct: builder.mutation({
                query: productData => {
                    return {
                        url: "/update-product/" + productData._id,
                        method: "PATCH",
                        body: productData
                    }
                },
                invalidatesTags: ["product"]
            }),
            removeProduct: builder.mutation({
                query: _id => {
                    return {
                        url: "/delete-product/" + _id,
                        method: "DELETE",
                    }
                },
                invalidatesTags: ["product"]
            }),

        }
    }
})

export const {
    useCreateProductMutation,
    useLazyReadProductsQuery,
    useModifyProductMutation,
    useRemoveProductMutation
} = sellerApi
