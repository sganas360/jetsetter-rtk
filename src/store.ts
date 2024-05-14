import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { itemsApi } from "./services/api-service";

export const store = configureStore({
    reducer: {
        [itemsApi.reducerPath]: itemsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(itemsApi.middleware)
    }
})