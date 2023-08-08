import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useRoutes, BrowserRouter } from "react-router-dom";
import MainCharacterApp from './components/Characters/MainCharacterApp';
import MainFavoritesApp from './components/Favorites/MainFavoritesApp';
import { fetchCharacters } from './redux/features/character/characterSlice';

const AppRoutes = () => {
  const dispatch = useDispatch();
  
  dispatch(fetchCharacters());

  let routes = useRoutes([
    { path: "/", element: <Navigate to="/characters" /> },
    { path: "/characters", element: <MainCharacterApp /> },
    { path: "/favorites", element: <MainFavoritesApp /> },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
