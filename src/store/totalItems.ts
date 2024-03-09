import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState = {
  count: 1
};

export const totalItemsSlice = createSlice({
  name: "totalItems",
  initialState,
  reducers: {
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    
  },
});

export const { setTotalItems } =
  totalItemsSlice.actions;
export const totalItemsReducer = totalItemsSlice.reducer;

export const selectTotalItems = (state: RootState) => state.totalItems.count;
