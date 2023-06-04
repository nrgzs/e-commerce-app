import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../data/products';

const testitems = products.slice(0, 4);

const itemseWithAmount = testitems.map((product) => {
  return { ...product, amount: 1 };
});

const initialState = {
  cartItems: itemseWithAmount,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const Id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id != Id);
    },
    addAmount: (state, action) => {
      state.cartItems.map((item) => {
        return { ...item, amount: 1 };
      });
      console.log(state.cartItems);
    },

    increase: (state, action) => {
      const Id = action.payload;
      const cartItem = state.cartItems.find((item) => item.id == Id);
      console.log(cartItem);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const Id = action.payload;
      const cartItem = state.cartItems.find((item) => item.id == Id);
      if (cartItem.amount > 1) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    calculateTotal: (state, action) => {
        let amount = 0
        let total = 0
        state.cartItems.forEach((item) => {
            amount += item.amount
            total += item.amount * item.price
        })
        state.total = total
        state.amount = amount
    },
  },
});

//console.log(cartSlice);

export const { clearCart, removeItem, addAmount, increase, decrease ,calculateTotal} =
  cartSlice.actions;

export default cartSlice.reducer;
