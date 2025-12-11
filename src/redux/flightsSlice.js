import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchData: {},
  selectedFlight: null,
  bookingData: {},
};

const flightsSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload;
    },
    setBookingData: (state, action) => {
      state.bookingData = action.payload;
    },
  }
});

export const { setSearchData, setSelectedFlight, setBookingData } = flightsSlice.actions;
export default flightsSlice.reducer;
