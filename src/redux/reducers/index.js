import { combineReducers } from 'redux';
import order from './order';
import basketReducer from './basket';

export default combineReducers({
  order: order,
  basket: basketReducer
});
