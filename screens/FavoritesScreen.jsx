import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

//import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealList/MealsList";

import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  //const favoriteMealsCtx = useContext(FavoritesContext);
  //const favoriteMeals = MEALS.filter((meal) =>
  //  favoriteMealsCtx.ids.includes(meal.id),
  //);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id),
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
