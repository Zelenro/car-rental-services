import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchFilteredCars } from 'redux/operations';
import makes from '../../redux/makes.json';

export const Filter = () => {
  const [selectedMake, setSelectedMake] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const dispatch = useDispatch();

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleMileageFromChange = (e) => {
    setMileageFrom(e.target.value);
  };

  const handleMileageToChange = (e) => {
    setMileageTo(e.target.value);
  };

  const applyFilters = () => {
    dispatch(fetchFilteredCars({
      make: selectedMake,
      price,
      mileageFrom,
      mileageTo
    }));
  };

  return (
    <div>
      <label>
        Car brand:
        <select value={selectedMake} onChange={handleMakeChange}>
          <option value="">All Makes</option>
          {makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>
      </label>

      <label>
        Price/1 hour:
        <input type="number" value={price} onChange={handlePriceChange} />
      </label>

      <label>
        Car mileage/km - from:
        <input type="number" value={mileageFrom} onChange={handleMileageFromChange} />
      </label>

      <label>
        Car mileage/km - to:
        <input type="number" value={mileageTo} onChange={handleMileageToChange} />
      </label>

      <button type="button" onClick={applyFilters}>
        Apply
      </button>
    </div>
  );
};
