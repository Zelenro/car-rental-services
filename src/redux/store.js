import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import { filterReducer } from './filterSlice';

const middleware = [...getDefaultMiddleware(), (store) => (next) => (action) => {
  console.log('Action:', action);
  console.log('State before:', store.getState());
  next(action);
  console.log('State after:', store.getState());
}];

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
  },
  middleware,
});
