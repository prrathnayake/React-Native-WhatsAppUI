import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ChatPanel from "../components/ChatPanel";
import StatusPanel from "../components/StatusPanel";
import CallPanel from "../components/CallPanel";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabRouter } from "@react-navigation/native";
import CameraPanel from "../components/CameraPanel";

const Tab = createMaterialTopTabNavigator();

export default function HomePage() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "#128C7E",
          paddingTop: 40,
          paddingBottom: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{ flex: 1, fontSize: 30, color: "white", paddingLeft: 20 }}
          >
            WhatsApp
          </Text>
          <AntDesign
            name="search1"
            size={24}
            color="white"
            style={{ paddingRight: 15 }}
          />
          <Entypo
            name="dots-three-vertical"
            size={24}
            color="white"
            style={{ paddingRight: 10 }}
          />
        </View>
      </View>
      <Tab.Navigator
        initialRouteName="Chat"
        screenOptions={({ route }) => {
          return {
            tabBarLabel: () => {
              if (route.name === "Camera") {
                return <Entypo name="camera" size={22} color="black" />;
              } else {
                return <Text>{route.name.toLocaleUpperCase()}</Text>;
              }
            },
          };
        }}
      >
        <Tab.Screen name="Camera" component={CameraPanel} />
        <Tab.Screen name="Chat" component={ChatPanel} />
        <Tab.Screen name="Status" component={StatusPanel} />
        <Tab.Screen name="Call" component={CallPanel} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  options: {
    color: "white",
    fontSize: 18,
  },
});
