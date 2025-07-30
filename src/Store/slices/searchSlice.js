import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setHotels(state, action) {
      state.hotels = action.payload;
      console.log("from slice", action.payload);
      
    },
    clearHotels(state) {
      state.hotels = [];
    },
  },
});

export const { setHotels, clearHotels } = searchSlice.actions;
export default searchSlice.reducer;
