import {configureStore} from '@reduxjs/toolkit';
import Cart from './Cart';

const store = configureStore({
  reducer: Cart,
});

export default store;
