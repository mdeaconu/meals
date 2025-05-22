import React from "react";
import { StyleSheet } from "react-native";

import CategoriesScreen from "./screens/CategoriesScreen";

const App = () => {
  return <CategoriesScreen />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
