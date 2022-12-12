import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchPizzasSlice, Pizza, SortParams } from "./types";

export const fetchPizzas = createAsyncThunk<Pizza[], FetchPizzasSlice>(
  'pizza/fetchPizzasStatus',
  async ({sortId, orderId, categoryId, currentPagination}) => {

    const renderSortDataParam = () => {
      const sortData: SortParams = {
        0: 'rating',
        1: 'price',
        2: 'name',
      };

      return sortData[sortId];
    };

    const renderSortOrder = () => {
      const sortOrder: SortParams = {
        0: 'desc',
        1: 'asc',
      };

      return sortOrder[orderId];
    };

    const { data } = await axios.get<Pizza[]>(
      `https://6314d07efa82b738f74eb750.mockapi.io/items?category=${
        categoryId === 0 ? '' : categoryId
      }&sortBy=${renderSortDataParam()}&order=${renderSortOrder()}&page=${currentPagination}&limit=4`,
    );

    return data;
  }
);