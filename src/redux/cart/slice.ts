import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/cart";
import { CartPizza, ICartSliceState, IChangePizza } from "./types";

const initialState: ICartSliceState = {
    pizzasData: getCartFromLS()
}
  
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addPizzaToCart({pizzasData}, action: PayloadAction<CartPizza>) {
        const addingPizza = action.payload;
        let addedChanges = false;

        pizzasData.map(item => {
            if(item.id === addingPizza.id && item.type === addingPizza.type && item.size === addingPizza.size) {
            item.count++;
            addedChanges = true;
            }

            return item;
        });

        if(!addedChanges) {
            pizzasData.push(addingPizza);
        }
        },

        minusPizza({pizzasData}, action: PayloadAction<IChangePizza>) {
        const {id, type, size} = action.payload;
        const foundItem = pizzasData.find(item => item.id === id && item.type === type && item.size === size);

        if (foundItem) {
            foundItem.count--;
        }
        
        },

        removePizza({pizzasData}, action: PayloadAction<IChangePizza>) {
        if(window.confirm('Вы точно хотите удалить эту пиццу ?')) {
            const {id, type, size} = action.payload;
            const foundDeleteItemIndex = pizzasData.findIndex(item => item.id === id && item.type === type && item.size === size);
            pizzasData.splice(foundDeleteItemIndex, 1);
        }
        },

        clearCart({pizzasData}) {
        if(window.confirm('Вы точно хотите очистить корзину ?')) {
            pizzasData.splice(0, pizzasData.length);
        }
        }
    }
});

export const {addPizzaToCart, minusPizza, removePizza, clearCart} = cartSlice.actions;

export default cartSlice.reducer;