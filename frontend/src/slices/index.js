import authReducer from './auth';
import { combineReducers } from 'redux';
import itemsReducer from './items';
import pageReducer from './page';

const rootReducer = combineReducers({
  items: itemsReducer,
  page: pageReducer,
  auth: authReducer
});

export default rootReducer;
