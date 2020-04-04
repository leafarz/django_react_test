import authReducer from './auth';
import { combineReducers } from 'redux';
import itemReducer from './item';
import itemsReducer from './items';
import pageReducer from './page';

const rootReducer = combineReducers({
  item: itemReducer,
  items: itemsReducer,
  page: pageReducer,
  auth: authReducer,
});

export default rootReducer;
