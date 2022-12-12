import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSliceState } from "./types";

const initialState: IFilterSliceState = {
    categoryId: 0,
    sortId: 0,
    orderId: 0,
    currentPagination: 1,
    searchValue: '',
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSortId(state, action: PayloadAction<number>) {
            state.sortId = action.payload;
        },
        setOrderId(state, action: PayloadAction<number>) {
            state.orderId = action.payload;
        },
        setCurrentPagination(state, action: PayloadAction<number>) {
            state.currentPagination = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        }
    }
});
  
export const {setCategoryId, setSortId, setOrderId, setCurrentPagination, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;