import { createSelector } from '@ngrx/store';

const selectPizza = (state: any) => state.pizza;

export const selectPizzaOrder = createSelector(
  selectPizza,
  (state: any) => state.orderPizza
);
