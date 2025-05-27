import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";

// import { FavoritesContext } from "../store/context/favorites-context";

import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailScreen = () => {
  //const favoritesMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  //const mealIsFavorite = favoritesMealCtx.ids.includes(mealId);
  const mealIsFavorite = favoriteMealIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      // favoritesMealCtx.removeFavorite(mealId)
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoritesMealCtx.addFavorite(mealId)
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, mealIsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    height: 350,
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
