import { configureStore } from '@reduxjs/toolkit';
import productDetail  from "../features/productSlice";

export const store = configureStore({
    reducer: {
        products: productDetail,
    },
});
