import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import { IFilter } from "../types";

const initialState: IFilter = {};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string>) => {
      state.brand = action.payload;
    },
    setPrice: (state, action: PayloadAction<number | null>) => {
      if (action.payload !== null) state.price = action.payload;
      else delete state.price;
    },
    setProductName: (state, action: PayloadAction<string>) => {
      state.product = action.payload;
    },
    resetFilter: (state) => {
      state.brand = "";
      delete state.price;
      state.product = "";
    },
  },
});

export const { setBrand, resetFilter, setPrice, setProductName } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectFilter = (state: RootState) => state.filter;
