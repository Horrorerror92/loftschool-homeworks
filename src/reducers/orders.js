import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.

export default (state = [], action) => {
  switch (action.type) {

    case CREATE_NEW_ORDER:
      return [
        ...state,
        {
          id: action.payload.id,
          recipe: action.payload.recipe,
          position: 'clients',
          ingredients: []

        }
      ];

    case MOVE_ORDER_NEXT: {
      return state.map(order => {
        if (order.id === action.payload) {
          switch (order.position) {
            case 'clients':
              return { ...order, position: 'conveyor_1' };
            case 'conveyor_1':
              return { ...order, position: 'conveyor_2' };
            case 'conveyor_2':
              return { ...order, position: 'conveyor_3' };
            case 'conveyor_3':
              return { ...order, position: 'conveyor_4' };
            case 'conveyor_4':
              const isAllIndegrients = order.recipe.every(i => order.ingredients.includes(i));
              if (isAllIndegrients) {
                return { ...order, position: 'finish' };
              } else {
                return order;
              }
            default:
              return order;
          }
        } else {
            return order;
        }
      });
    }

    case MOVE_ORDER_BACK: {
      return state.map(order => {
        if (action.payload === order.id) {
          switch (order.position) {
            case 'conveyor_4':
              return { ...order, position: 'conveyor_3' };
            case 'conveyor_3':
              return { ...order, position: 'conveyor_2' };
            case 'conveyor_2':
              return { ...order, position: 'conveyor_1' };
            default:
              return order;
              }
        } else {
          return order;
        }
      });
    }
    case ADD_INGREDIENT: {
      const newOrder = state.find(order => order.position === action.payload.from);
      if (!newOrder) {
        return state;
      }
      return state.map(order => {
        if (order.id === newOrder.id) {
          return {
            ...order,
            ingredients: [...order.ingredients, action.payload.ingredient]
          }
        } else {
          return order;
        }
      });
    }
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
