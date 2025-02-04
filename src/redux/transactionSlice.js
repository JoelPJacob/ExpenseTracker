// import { createSlice } from '@reduxjs/toolkit';
// import { saveData, getData } from '../utils/storage';

// const initialState = {
//   transactions: getData('transactions') || [],
// };

// const transactionSlice = createSlice({
//   name: 'transactions',
//   initialState,
//   reducers: {
//     addTransaction: (state, action) => {
//       state.transactions.push(action.payload);
//       saveData('transactions', state.transactions);
//     },
//     deleteTransaction: (state, action) => {
//       state.transactions = state.transactions.filter(t => t.id !== action.payload);
//       saveData('transactions', state.transactions);
//     },
//   },
// });

// export const { addTransaction, deleteTransaction } = transactionSlice.actions;
// export default transactionSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';
import { setItem, getItem } from '../utils/storage';

const initialState = {
  transactions: getItem('transactions') || [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(state, action) {
      state.transactions.push(action.payload);
      setItem('transactions', state.transactions);
    },
    deleteTransaction(state, action) {
      state.transactions = state.transactions.filter(
        (t) => t.id !== action.payload
      );
      setItem('transactions', state.transactions);
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
