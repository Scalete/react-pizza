import { RootState } from "../store";

export const usePizza = (state: RootState) => state.pizza;
export const usePizzaTypes = (state: RootState) => state.pizza.pizzaTypes;