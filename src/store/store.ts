import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { productApi } from "./api/productApi";
import { filterReducer } from "./filterSlice";
import { totalItemsReducer } from "./totalItems";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    filter: filterReducer,
    totalItems: totalItemsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
