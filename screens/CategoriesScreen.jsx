import React from "react";
import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";
import PropTypes from "prop-types";

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={() => navigation.navigate("MealsOverview")}
        />
      )}
      numColumns={2}
    />
  );
};

CategoriesScreen.propTypes = {
  navigation: PropTypes.object,
};

export default CategoriesScreen;
