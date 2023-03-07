import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PostsScreen({ navigation }) {
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>PostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    marginTop: 92,
    marginBottom: 17,
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 30,
    color: "#212121",
  },
});
