import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
// import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/ImageBackground.jpg")}
        >
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

// ~~~~~~~~~~~~~~~styles~~~~~~~~~~~~~~~~~~~~~

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
