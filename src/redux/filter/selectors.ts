import { RootState } from "../store";

export const useFilter = (state: RootState) => state.filter;
export const useCategoryId = (state: RootState) => state.filter.categoryId;
export const useSearchValue = (state: RootState) => state.filter.searchValue;