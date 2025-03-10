import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./apis/auth.api";
import authSlice from "./slices/auth.slice";
import cartSlice from "./slices/cart.slice";
import { sellerApi } from "./apis/seller.api";
import { adminApi } from "./apis/admin.api";
import { publicApi } from "./apis/public.api";
import { userApi } from "./apis/user.api";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [sellerApi.reducerPath]: sellerApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        [publicApi.reducerPath]: publicApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        auth: authSlice,
        cart: cartSlice,
    },
    middleware: def => [
        ...def(),
        authApi.middleware,
        sellerApi.middleware,
        adminApi.middleware,
        publicApi.middleware,
        userApi.middleware,
    ]
})

export default reduxStore