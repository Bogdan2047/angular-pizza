import { Action } from '@ngrx/store';

export enum PizzaAction {
  GetPizza = '[Main Page] Get Pizza',
  PlusCountPizza = '[Backet Page] Plus Count',
  MinusCountPizza = '[Backet Page] Minus Count',
  DeleteOrder = '[Backet Page] Delete Order',
  DeleteBacket = '[Backet Page] Delete Backet',
}

export class GetPizza implements Action {
  readonly type = PizzaAction.GetPizza;

  constructor(
    public payload: {
      id: number;
      title: string;
      price: number;
      type: string;
      size: string;
      img: string;
      count: number;
    }
  ) {}
}

export class PlusCountPizza implements Action {
  readonly type = PizzaAction.PlusCountPizza;

  constructor(public payload: { id: number; count: number; price: number }) {}
}

export class MinusCountPizza implements Action {
  readonly type = PizzaAction.MinusCountPizza;

  constructor(public payload: { id: number; count: number; price: number }) {}
}

export class DeleteOrder implements Action {
  readonly type = PizzaAction.DeleteOrder;

  constructor(public payload: { id: number }) {}
}

export class DeleteBacket implements Action {
  readonly type = PizzaAction.DeleteBacket;
}

export type PizzaOnion =
  | GetPizza
  | PlusCountPizza
  | MinusCountPizza
  | DeleteOrder
  | DeleteBacket;
