import authReducer from './auth';
import cartReducer from './cart';
import categoryReducer from './category';
import { combineReducers } from 'redux';
import itemReducer from './item';
import itemsReducer from './items';
import pageReducer from './page';

const rootReducer = combineReducers({
  item: itemReducer,
  items: itemsReducer,
  page: pageReducer,
  auth: authReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default rootReducer;
