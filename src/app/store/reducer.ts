import { TypePizza } from 'src/assets/types/pizza.interface';
import { PizzaAction, PizzaOnion } from './actions';

export interface State {
  orderPizza: TypePizza[];
}

const initialState: State = {
  orderPizza: [],
};

export function pizzaReducer(state = initialState, action: PizzaOnion) {
  switch (action.type) {
    case PizzaAction.GetPizza:
      const newOrder = state.orderPizza.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count + action.payload.count,
            price: item.price + action.payload.price,
          };
        }
        return item;
      });

      const reviewId = newOrder.some((item) => item.id === action.payload.id);

      if (reviewId) {
        return {
          ...state,
          orderPizza: newOrder,
        };
      } else {
        return {
          ...state,
          orderPizza: [action.payload, ...state.orderPizza],
        };
      }

    case PizzaAction.PlusCountPizza:
      const plusCount = state.orderPizza.map((item) => {
        console.log(item);

        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count + 1,
            price: item.price + action.payload.price / item.count,
          };
        }
        return item;
      });
      const reviewPlus = plusCount.some(
        (item) => item.id === action.payload.id
      );

      if (reviewPlus) {
        return {
          ...state,
          orderPizza: plusCount,
        };
      } else {
        return {
          ...state,
          orderPizza: [action.payload, ...state.orderPizza],
        };
      }

    case PizzaAction.MinusCountPizza:
      const minusCount = state.orderPizza.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count - 1,
            price: item.price - action.payload.price / (item.count - 1),
          };
        }
        return item;
      });
      const reviewMinus = minusCount.some(
        (item) => item.id === action.payload.id
      );

      if (reviewMinus) {
        return {
          ...state,
          orderPizza: minusCount,
        };
      } else {
        return {
          ...state,
          orderPizza: [action.payload, ...state.orderPizza],
        };
      }

    case PizzaAction.DeleteOrder:
      let deleteOrder = state.orderPizza;

      const orders = deleteOrder.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        orderPizza: orders,
      };

    case PizzaAction.DeleteBacket:
      return {
        ...state,
        orderPizza: [],
      };

    default:
      return state;
  }
}
