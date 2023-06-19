import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedItems: [],
  amount: 0,
};

const savedSlice = createSlice({
  name: 'saves',
  initialState,
  reducers: {
    toggleSave: (state, action) => {
      const newItem = action.payload;
      const itemInSaves = state.savedItems.find(
        (item) => item.id === newItem.id
      );

      if (!itemInSaves) {
        state.savedItems.push({ ...newItem, amount: 1 });

     

        state.amount = amount;
      } else if (itemInSaves) {
        state.savedItems = state.savedItems.filter(
          (item) => item.id != newItem.id
        );
      }
    },
    saveAmount:(state,action)=>{
           let amount = 0;
           state.savedItems.forEach((item) => {
             amount += item.amount;
           });
    }
  },
});

export const { toggleSave, saveAmount } = savedSlice.actions;

export default savedSlice.reducer;
