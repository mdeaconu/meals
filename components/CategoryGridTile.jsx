import PropTypes from "prop-types";
import React from "react";
import { Pressable, Text, View } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

CategoryGridTile.propTypes = {
  title: PropTypes.string,
  color: PropTypes.object,
};

export default CategoryGridTile;
