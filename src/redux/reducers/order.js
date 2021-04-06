import { INCREMENT, DECREMENT, DELETE_POSITION } from '../constants';

export default (state = {}, action) => {
  const { type, id } = action;

  // { [productId]: amount }
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case DELETE_POSITION:
      return { ...state, [id]: 0 }
    default:
      return state;
  }
}