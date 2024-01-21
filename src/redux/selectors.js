import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.cars.isLoading;
export const selectError = state => state.cars.error;

export const selectFilteredCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    const { make, price, mileageFrom, mileageTo } = filter;

    return cars.filter(car => {
      const makeMatch = make ? car.make.toLowerCase().includes(make.toLowerCase()) : true;
      const priceMatch = price ? car.price === parseFloat(price) : true;
      const mileageMatch =
        (mileageFrom ? car.mileage >= parseFloat(mileageFrom) : true) &&
        (mileageTo ? car.mileage <= parseFloat(mileageTo) : true);

      return makeMatch && priceMatch && mileageMatch;
    });
  }
);