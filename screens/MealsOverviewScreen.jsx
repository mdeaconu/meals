import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PropTypes from "prop-types";

import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const categoryId = route.params.categoryId;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
    </View>
  );
};

MealsOverviewScreen.propTypes = {
  route: PropTypes.object,
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
