import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

const MealDetailScreen = () => {
  const route = useRoute();
  const mealId = route.params.mealId;

  return <Text>This is the Meal Detail screen ({mealId})</Text>;
};

export default MealDetailScreen;
