import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
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
import Asyncstorage from '@react-native-async-storage/async-storage';
import {PersistGate} from 'redux-persist/integration/react';

const rootReducer = combineReducers({
  Cart,
  Favourites,
});

// redux persist option
const persistConfig = {
  key: 'root',
  version: 1,
  storage: Asyncstorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

//persisted store
let persistor = persistStore(store);

export {store, persistor, PersistGate};
