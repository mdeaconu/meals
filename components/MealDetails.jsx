import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";

const MealDetails = ({
  affordability,
  complexity,
  duration,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

MealDetails.propTypes = {
  affordability: PropTypes.string,
  complexity: PropTypes.string,
  duration: PropTypes.number,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
