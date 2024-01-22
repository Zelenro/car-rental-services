import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Description,
    Img,
    LearnMoreButton,
    List,
    ListItem,
    Price,
    Title,
    TitleContainer,
    LoadMoreButton,
    FilterContainer,
    LoadMoreButtonWrapper,
} from './Catalog.styled';
import { selectFilteredCars } from 'redux/selectors';
import { fetchFilteredCars } from 'redux/operations';
import errImgCar from '../../assets/errorcar.jpg';
import makes from '../../redux/makes.json';

const parseAddress = (fullAddress) => {
    const addressParts = fullAddress.split(',').map((part) => part.trim());
    return `${addressParts[1]} | ${addressParts[2]}`;
};

const Catalog = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectFilteredCars);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const [filters, setFilters] = useState({
        make: '',
        minPrice: '',
        maxPrice: '',
        minMileage: '',
        maxMileage: '',
        page: 1,

    });

    const handleFilterChange = (filterType, value) => {
        setFilters({
            ...filters,
            [filterType]: value,
            page: 1,
        });
    };

    const handleLoadMore = () => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            page: prevFilters.page + 1,
        }));
    };

    useEffect(() => {
        setLoading(true);
        dispatch(fetchFilteredCars(filters))
            .then((result) => {
                setHasMore(result.length === filters.limit);
            })
            .finally(() => setLoading(false));
    }, [dispatch, filters]);

    return (
        <>
            <FilterContainer>
                <label>
                    Car brand
                    <select value={filters.make} onChange={(e) => handleFilterChange('make', e.target.value)}>
                        <option value="">All brand</option>
                        {makes.map((make) => (
                            <option key={make} value={make}>{make}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Price/1 hour
                    <select value={filters.maxPrice} onChange={(e) => handleFilterChange('maxPrice', e.target.value)}>
                        <option value="">All Prices</option>
                        {[...Array(50).keys()].map((index) => (
                            <option key={index * 10} value={(index + 1) * 10}>
                                {index * 10} - {(index + 1) * 10}
                            </option>
                        ))}
                    </select>
                </label>
                <label>
                    Car mileage/km - from
                    <input type="number" value={filters.minMileage} onChange={(e) => handleFilterChange('minMileage', e.target.value)} />
                </label>
                <label>
                    Car mileage/km - to
                    <input type="number" value={filters.maxMileage} onChange={(e) => handleFilterChange('maxMileage', e.target.value)} />
                </label>
                <button onClick={handleLoadMore}>Apply</button>
            </FilterContainer>

            <List>
                {cars.map((car) => (
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
                            {parseAddress(car.address)}
                            | {car.rentalCompany} | {car.accessories[2]} | {car.type} | {car.id} | {car.functionalities[0]}
                        </Description>
                        <LearnMoreButton>Learn more</LearnMoreButton>
                    </ListItem>
                ))}
                {cars.length === 0 && (
                    <ListItem>
                        <Img src={errImgCar} alt="Default Car" />
                    </ListItem>
                )}
                {loading && <p>Loading...</p>}
                {!loading && cars.length === 0 && <p>No cars found.</p>}
                {!loading && cars.length > 0 && hasMore && (
                    <LoadMoreButtonWrapper>
                        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
                    </LoadMoreButtonWrapper>
                )}
            </List>
        </>
    );
};

export default Catalog;
