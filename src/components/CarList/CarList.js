import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCars } from 'redux/operations';
import { selectError, selectFilteredCars, selectIsLoading } from 'redux/selectors';
import { Description, Img, LearnMoreButton, List, ListItem, Price, Title, TitleContainer } from './CarList.styled';
import errImgCar from '../../assets/errorcar.jpg';


const ITEMS_PER_PAGE = 12;

const CarList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredCars = useSelector(selectFilteredCars);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayedCars, setDisplayedCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchAllCars());
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (filteredCars && filteredCars.length > 0) {
      setTotalPages(Math.ceil(filteredCars.length / ITEMS_PER_PAGE));
    }
  }, [filteredCars]);

  useEffect(() => {
    const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIdx = currentPage * ITEMS_PER_PAGE;
    setDisplayedCars(filteredCars.slice(startIdx, endIdx));
  }, [filteredCars, currentPage]);

  const fetchFilteredData = async (make, price, mileageFrom, mileageTo, page) => {
    const url = new URL('https://65246abbea560a22a4e9d4f9.mockapi.io/cars');
    url.searchParams.append('make', make);
    url.searchParams.append('price', price);
    url.searchParams.append('mileageFrom', mileageFrom);
    url.searchParams.append('mileageTo', mileageTo);
    url.searchParams.append('page', page);
    url.searchParams.append('limit', ITEMS_PER_PAGE);

    const response = await fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });

    if (response.ok) {
      const result = await response.json();

      setTotalPages(Math.ceil(result.total / ITEMS_PER_PAGE));
    } else {

    }
  };


  const nextPage = async () => {
    if (currentPage < totalPages) {
      const nextPageNumber = currentPage + 1;
      setCurrentPage(nextPageNumber);
      fetchFilteredData(nextPageNumber);
    }
  };

  const prevPage = async () => {
    if (currentPage > 1) {
      const prevPageNumber = currentPage - 1;
      setCurrentPage(prevPageNumber);
      fetchFilteredData(prevPageNumber);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <List>
        {displayedCars.map((car) => (
          <ListItem key={car.id}>
            {car.img ? (
              <Img
                src={car.img}
                alt="car"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = errImgCar;
                }}
              />
            ) : (
              <Img src={errImgCar} alt="Default Car" />
            )}

            <TitleContainer>
              <Title>
                {car.make} {car.model}, {car.year}
              </Title>
              <Price>{car.rentalPrice}</Price>
            </TitleContainer>
            <Description>
              {car.address} | {car.rentalCompany} | {car.accessories[2]} | {car.type} | {car.id} | {car.functionalities[0]}
            </Description>
            <LearnMoreButton>Learn more</LearnMoreButton>
          </ListItem>
        ))}
        {displayedCars.length === 0 && (
          <ListItem>
            <Img src={errImgCar} alt="Default Car" />
          </ListItem>
        )}
      </List>
      <div>
        <button onClick={prevPage} disabled={currentPage <= 1}>Previous Page</button>
        <span>Page {currentPage} of {totalPages || 1}</span>
        <button onClick={nextPage} disabled={currentPage >= totalPages}>Next Page</button>
      </div>
    </>
  );
};

export default CarList;
