import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortId(state, action) {
      state.sortId = action.payload;
    },
    setOrderId(state, action) {
      state.orderId = action.payload;
    },
    setCurrentPagination(state, action) {
      state.currentPagination = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    }
  }
});

export const {setCategoryId, setSortId, setOrderId, setCurrentPagination, setSearchValue} = filterSlice.actions;

export default filterSlice.reducer;