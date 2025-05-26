import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import PropTypes from "prop-types";

const MealsList = ({ items }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(itemData) => itemData.id}
        renderItem={(itemData) => {
          const mealItemProps = {
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
            id: itemData.item.id,
            imageUrl: itemData.item.imageUrl,
            title: itemData.item.title,
          };

          return <MealItem {...mealItemProps} />;
        }}
      />
    </View>
  );
};

MealsList.propTypes = {
  items: PropTypes.array,
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
