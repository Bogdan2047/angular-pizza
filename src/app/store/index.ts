import { ActionReducerMap } from '@ngrx/store';
import * as Pizza from './reducer';

export interface State {
  pizza: Pizza.State;
}

export const reducers: ActionReducerMap<any> = {
  pizza: Pizza.pizzaReducer,
};
