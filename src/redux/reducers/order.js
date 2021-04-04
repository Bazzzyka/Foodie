import { INCREMENT, DECREMENT } from '../constants';

export default (state = {}, action) => {
  const { type, id } = action;

  // { [productId]: amount }
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    default:
      return state;
  }
}