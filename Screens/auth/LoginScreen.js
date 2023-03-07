import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const emailHandler = (email) =>
    setEmail((prevState) => ({ ...prevState, email: email }));
  const passwordHandler = (password) =>
    setPassword((prevState) => ({ ...prevState, password: password }));

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    navigation.navigate("Home");

    console.log("email", email);
    console.log("password", password);

    setEmail("");
    setPassword("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ ...styles.form, marginBottom: isShowKeyboard ? 0 : 0 }}>
        <Text style={styles.hederText}>Sign in</Text>
        <TextInput
          value={email}
          onChangeText={emailHandler}
          onFocus={() => setIsShowKeyboard(true)}
          placeholder="Email"
          style={styles.input}
        />

        <TextInput
          value={password}
          onChangeText={passwordHandler}
          onFocus={() => setIsShowKeyboard(true)}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={styles.btn}>
          <Button color={"#FFFFFF"} title={"Sign in"} onPress={keyboardHide} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text style={styles.bodyText}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

// ~~~~~~~~~~~~~~~styles~~~~~~~~~~~~~~~~~~~~~
const styles = StyleSheet.create({
  form: {
    paddingRight: 16,
    paddingLeft: 16,
    // width: 375,
    // height: 549,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopStartRadius: 25,
  },
  hederText: {
    marginTop: 92,
    marginBottom: 17,
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 30,
    color: "#212121",
  },
  input: {
    padding: 15,
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",

    fontStyle: "normal",
    fontSize: 16,
    color: "#BDBDBD",
  },
  btn: {
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
  },
  bodyText: {
    marginTop: 16,
    marginBottom: 30,
    textAlign: "center",
    fontStyle: "normal",
    fontSize: 16,
    color: "#1B4371",
  },
});
