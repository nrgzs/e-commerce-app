import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cartSlice';
import savesReducer from './saved/saveSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducerCard = persistReducer(persistConfig, cartReducer);
const persistedReducerSaves = persistReducer(persistConfig, savesReducer);


export const store = configureStore({
  reducer: {
    cart: persistedReducerCard,
    saves: persistedReducerSaves,
  },
});
