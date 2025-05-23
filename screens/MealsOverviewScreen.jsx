import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ navigation, route }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const title = CATEGORIES.find(
      (category) => category.id === categoryId,
    ).title;

    navigation.setOptions({ title: title });
  }, [categoryId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={(itemData) => {
          const mealItemProps = {
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
            imageUrl: itemData.item.imageUrl,
            title: itemData.item.title,
          };

          return <MealItem {...mealItemProps} />;
        }}
      />
    </View>
  );
};

MealsOverviewScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
