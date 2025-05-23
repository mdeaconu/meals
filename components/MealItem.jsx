import React from "react";
import PropTypes from "prop-types";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
  affordability,
  complexity,
  duration,
  id,
  imageUrl,
  title,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={() => {
          navigation.navigate("MealDetail", { mealId: id });
        }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

MealItem.propTypes = {
  affordability: PropTypes.string,
  complexity: PropTypes.string,
  duration: PropTypes.number,
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

export default MealItem;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  mealItem: {
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    margin: 16,
    overflow: Platform.select({ ios: "visible", android: "hidden" }),
    shadowColor: "black",
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
  },
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
