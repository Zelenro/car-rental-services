import { createSlice } from '@reduxjs/toolkit';


const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setCars: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setCars, setLoading, setError } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;