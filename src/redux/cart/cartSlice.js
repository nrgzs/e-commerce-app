import { createSlice } from '@reduxjs/toolkit';
import { products } from '../../../data/products';

/* const testitems = products.slice(0, 4);

const itemseWithAmount = testitems.map((product) => {
  return { ...product, amount: 1 };
}); */

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const itemInCart = state.cartItems.find((item) => item.id === newItem.id);

      if (!itemInCart) {
        state.cartItems.push({ ...newItem, amount: 1 });
      } else {
        state.cartItems.map((item) =>
          item.id === newItem.id
            ? { ...newItem, amount: item.amount + 1 }
            : item
        );
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const Id = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id != Id);
    },

    increase: (state, action) => {
      const Id = action.payload;
      const cartItem = state.cartItems.find((item) => item.id == Id);

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
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.total = total;
      state.amount = amount;
    },
  },
});

export const {
  clearCart,
  removeItem,
  addAmount,
  increase,
  decrease,
  calculateTotal,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
