import {configureStore} from '@reduxjs/toolkit';
import Cart from './Cart';
import Favourites from './Favourites';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import {combineReducers} from 'redux';

const reducer = combineReducers({
  Cart,
  Favourites,
});

const store = configureStore({
  reducer,
});

export default store;
