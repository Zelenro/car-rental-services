import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Catalog from './Catalog/Catalog';
import Favorites from './Favorites/Favorites';
import Home from './Home/Home';
import { Li, List, Wrapper } from './App.styled';

const App = () => {
  return (
    <>
      <nav>
        <List>
          <Li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </Li>
          <Li>
            <NavLink to="/catalog" activeClassName="active">Catalog</NavLink>
          </Li>
          <Li>
            <NavLink to="/favorites" activeClassName="active">Favorites</NavLink>
          </Li>
        </List>
      </nav>
      <Wrapper>
        <Routes>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/" element={<Home />} />
        </Routes></Wrapper>
    </>
  );
}

export default App;