import { CartPizza } from "../redux/cart/types";

export function getCartFromLS(): CartPizza[] {
    const data = localStorage.getItem('cart');
    return data? JSON.parse(data): [];
}