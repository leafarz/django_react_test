import { combineReducers } from 'redux';
import itemsReducer from './items';
import pageReducer from './page';

const rootReducer = combineReducers({
  items: itemsReducer,
  page: pageReducer
});

export default rootReducer;
