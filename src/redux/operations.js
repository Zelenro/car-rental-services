import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CARS_SLICE, FETCH_ALL_CARS } from './constants';
import { setCars } from './carsSlice';

axios.defaults.baseURL = 'https://65246abbea560a22a4e9d4f9.mockapi.io';

export const fetchAllCars = createAsyncThunk(
  `${CARS_SLICE}/${FETCH_ALL_CARS}`,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/cars', { params: { page: 1, limit: 12 } });
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const fetchFilteredCars = createAsyncThunk(
  `${CARS_SLICE}/fetchFilteredCars`,
  async (filters, thunkAPI) => {
    try {
      const { make, page, limit } = filters;
      const response = await axios.get('/cars', { params: { make, page, limit } });
      thunkAPI.dispatch(setCars(response.data));
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
