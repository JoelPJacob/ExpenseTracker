import { createSlice } from '@reduxjs/toolkit';
import { setItem, getItem, removeItem } from '../utils/storage';

const initialState = {
  users: getItem('users') || [], // Store multiple users
  loggedInUser: getItem('loggedInUser') || null, // Store the current logged-in user
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser(state, action) {
      const { name, email, password } = action.payload;
      const newUser = { id: Date.now(), name, email, password };
      state.users.push(newUser);
      setItem('users', state.users); // Update users list in storage
    },
    login(state, action) {
      state.loggedInUser = action.payload;
      setItem('loggedInUser', action.payload); // Store the logged-in user
    },
    logout(state) {
      state.loggedInUser = null;
      removeItem('loggedInUser');
    },
  },
});

export const { registerUser, login, logout } = userSlice.actions;
export default userSlice.reducer;
