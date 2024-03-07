import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { IFilter } from '../types';

const initialState: IFilter = {};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string|null>) => {
      if (action.payload) state.brand = action.payload;
      else delete state.brand;
    },
    setPrice: (state, action: PayloadAction<number|null>) => {
      if (action.payload ?? false) state.price = action.payload as number;
      else delete state.price;
    },
    setProduct: (state, action: PayloadAction<string|null>) => {
      if (action.payload) state.product = action.payload;
      else delete state.product;
    },
    resetFilter: (state) => {
      delete state.brand;
      delete state.price;
      delete state.product;
    },
  },
})

export const { setBrand, resetFilter, setPrice, setProduct } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectFilter = (state: RootState) => state.filter;
