export type CartPizza = {
    id: number;
    title?: string;
    price: number;
    imgUrl: string;
    type: number;
    size: number;
    count: number;
};

export interface ICartSliceState {
    pizzasData: CartPizza[];
}
  
export interface IChangePizza {
    id: number;
    type: number;
    size: number;
}