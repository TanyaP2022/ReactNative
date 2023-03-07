import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

const LoadAppLication = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [isFonts, setIsFonts] = useState(false);
  const routing = useRoute(true);

  // if (!isFonts) {
  //   return (
  //     <AppLoading
  //       startAsync={LoadAppLication}
  //       onFinish={() => setIsFonts(true)}
  //       onError={console.warn}
  //     />
  //   );
  // }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <NavigationContainer>
        <View style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={require("./assets/ImageBackground.jpg")}
          ></ImageBackground>
        </View>
        {routing}
      </NavigationContainer>
    </TouchableWithoutFeedback>
  );
}

// ~~~~~~~~~~~~~~~styles~~~~~~~~~~~~~~~~~~~~~

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
