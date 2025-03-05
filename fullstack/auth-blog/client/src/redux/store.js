import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./auth.api";
import authSlice from "./auth.slice";
import { userApi } from "./user.api";
import { adminApi } from "./admin.api";


const reduxStore = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [adminApi.reducerPath]: adminApi.reducer,
        auth: authSlice
    },
    middleware: def => [...def(), authApi.middleware, userApi.middleware, adminApi.middleware]
})

export default reduxStore