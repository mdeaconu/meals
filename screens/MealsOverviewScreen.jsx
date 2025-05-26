import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";

import MealsList from "../components/MealList/MealsList";

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

  return <MealsList items={displayedMeals} />;
};

MealsOverviewScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default MealsOverviewScreen;
