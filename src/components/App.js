import React from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllCars } from 'redux/operations';
import CarList from './CarList/CarList';
import { Filter } from './Filter/Filter';
import { selectError, selectIsLoading } from 'redux/selectors';
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <Layout>
      <h1>Car Rent</h1>
      <Filter />

      {isLoading && !error && (
        <p
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Loading...
        </p>
      )}

      <CarList />
      <GlobalStyle />
    </Layout>
  );
};
