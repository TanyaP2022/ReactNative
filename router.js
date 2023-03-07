import React from "react";
import { TouchableOpacity, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useNavigation } from "@react-navigation/native";

import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import Home from "./Screens/Home";
import PostsScreen from "./Screens/main/PostsScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
import ProfileScreen from "./Screens/main/ProfileScreen";
// icons import
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = () => {
  //   const navigation = useNavigation();
  //   if (!isAuth) {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Registration"
        options={{ headerShown: false }}
        component={RegistrationScreen}
      />
      <AuthStack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <AuthStack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
    </AuthStack.Navigator>
  );
  //   }
  //   return (
  //     <MainTab.Navigator
  // initialRouteName="CreatePostsScreen"
  // backBehavior="history"
  // screenOptions={{
  //   tabBarStyle: { paddingHorizontal: 81 },
  // }}
  //     >
  //       <MainTab.Screen
  //         options={{
  //           headerShown: false,
  //           tabBarShowLabel: false,
  //           tabBarIcon: ({ focused, size, color }) => (
  //             <Feather name="grid" size={24} color="rgba(33, 33, 33, 0.8)" />
  //           ),
  //         }}
  //         name="Posts"
  //         component={PostsScreen}
  //       />
  //       <MainTab.Screen
  //         options={{
  //           tabBarShowLabel: false,
  //           title: "Publications",
  //           headerTitleStyle: {
  //             color: "#212121",
  //             fontFamily: "Roboto-Medium",
  //             fontSize: 17,
  //             lineHeight: 22,
  //             letterSpacing: -0.408,
  //             background: "#FFFFFF",
  //           },
  //           tabBarIcon: ({ focused, size, color }) => (
  //             <AntDesign name="plus" size={13} color="#FFFFFF" />
  //           ),
  //           tabBarIconStyle: {
  //             display: "block",
  //             width: 70,
  //             height: 40,
  //             backgroundColor: "#FF6C00",
  //             borderRadius: 20,
  //             marginTop: 9,
  //           },
  //           headerRight: () => (
  //             <Button
  //               onPress={() => alert("This is a button!")}
  //               title="Press me"
  //               color="#BDBDBD"
  //             />
  //           ),
  //         }}
  //         name="Create"
  //         component={CreatePostsScreen}
  //       />
  //       <MainTab.Screen
  //         options={{
  //           tabBarShowLabel: false,
  //           headerShown: false,
  //           tabBarIcon: ({ focused, size, color }) => (
  //             <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
  //           ),
  //         }}
  //         name="Profile"
  //         component={ProfileScreen}
  //       />
  //     </MainTab.Navigator>
  //   );
};
