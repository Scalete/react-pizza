export type Pizza = {
    id: number;
    title?: string;
    name?: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating?: number;
};

export type FetchPizzasSlice = Record<string, number>;
export type SortParams = Record<number, string>;

export interface IPizzaSliceState {
  pizzaTypes: string[];
  pizzasData: Pizza[];
  status: PizzaStatus;
}

export enum PizzaStatus {
  LOADING = 'loading',
  SUCCES = 'succes',
  ERROR = 'error'
}
