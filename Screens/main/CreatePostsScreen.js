import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CreatePostsScreen({ navigation }) {
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>CreatePostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
