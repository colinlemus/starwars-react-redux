import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useRoutes, BrowserRouter } from "react-router-dom";
import MainCharacterApp from './components/Characters/MainCharacterApp';
import MainFavoritesApp from './components/Favorites/MainFavoritesApp';
import { fetchCharacters, fetchPlanet } from './redux/features/characterSlice';

const AppRoutes = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.character.characters);
  const planetCache = useSelector(state => state.character.planetCache);
  
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    if (!characters || !planetCache) return;

    characters.forEach(character => {
      if (!planetCache[character.homeworld]) {
        dispatch(fetchPlanet(character.homeworld));
      }
    });
  }, [characters, planetCache, dispatch]);

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
