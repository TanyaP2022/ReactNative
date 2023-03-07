import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PostsScreen from "./main/PostsScreen";
import CreatePostsScreen from "./main/CreatePostsScreen";
import ProfileScreen from "./main/ProfileScreen";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const MainTab = createBottomTabNavigator();

export default function Home() {
  return (
    <MainTab.Navigator
      initialRouteName="CreatePostsScreen"
      backBehavior="history"
      screenOptions={{
        tabBarStyle: { paddingHorizontal: 81 },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarInactiveBackgroundColor: "#FFFFFF",
        tabBarItemStyle: {
          display: "block",
          width: 70,
          height: 40,
          borderRadius: 20,
          marginTop: 9,
          marginBottom: 9,
        },
      }}
    >
      <MainTab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          showLabel: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="grid" size={24} color={color} />
          ),
          title: "Publications",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            // fontWeight: 500,
            fontSize: 17,
          },
          headerRight: () => (
            <Ionicons
              name="exit-outline"
              size={24}
              color="rgba(189, 189, 189, 1)"
            />
          ),
        }}
      />
      <MainTab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="plus" size={24} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
