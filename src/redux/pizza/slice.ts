import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./asyncAction";
import { IPizzaSliceState, PizzaStatus } from "./types";

const initialState: IPizzaSliceState = {
    pizzaTypes: ['тонкое', 'традиционное'],
    pizzasData: [],
    status: PizzaStatus.LOADING
}

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.pizzasData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = PizzaStatus.LOADING;
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = PizzaStatus.SUCCES;
            state.pizzasData = action.payload;
        })
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.status = PizzaStatus.ERROR;
            alert(PizzaStatus.ERROR);
            state.pizzasData = [];
        })
    },
});
  
export const {setPizzas} = pizzaSlice.actions;
export default pizzaSlice.reducer;