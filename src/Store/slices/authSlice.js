
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || [],
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const newUser = { ...action.payload, bookings: [] };
      state.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
    },
    loginUser: (state, action) => {
  const { email, password } = action.payload;
  const foundUser = state.users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    state.currentUser = foundUser;
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
  } else {
    throw new Error("Invalid credentials");
  }
},
   addBookingToCurrentUser: (state, action) => {
      const booking = action.payload;
      const currentUserEmail = state.currentUser?.email;

      state.users = state.users.map(user => {
        if (user.email === currentUserEmail) {
          const updatedUser = {
            ...user,
            bookings: [...(user.bookings || []), booking],
          };
          if (state.currentUser.email === user.email) {
            state.currentUser = updatedUser;
          }
          return updatedUser;
        }
        return user;
      });

      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
    },
  }
});

export const { registerUser, setCurrentUser , loginUser ,addBookingToCurrentUser } = authSlice.actions;
export default authSlice.reducer;
