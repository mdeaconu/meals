import React, { useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const value = {
    ids: favoriteMealIds,
    addFavorite: (id) =>
      setFavoriteMealIds((currentIds) => [...currentIds, id]),
    removeFavorite: (id) =>
      setFavoriteMealIds((currentIds) =>
        currentIds.filter((mealId) => mealId !== id),
      ),
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesContextProvider.propTypes = {
  children: PropTypes.object,
};

export default FavoritesContextProvider;
