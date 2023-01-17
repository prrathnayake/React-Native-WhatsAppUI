import { StyleSheet, View, Text, Image, Button, Pressable } from "react-native";
import React from "react";

export default function Welcome(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: 'white' }}>
      <Text style={{ color: "#128C7E", fontSize: 35, fontWeight: "bold" }}>
        Welcome to WhatsApp
      </Text>
      <Image
        style={{ width: 250, height: 250, marginVertical: 130 }}
        source={require("../assets/welcome-img.png")}
      />
      <Text
        style={{ textAlign: "center", paddingHorizontal: 20, marginBottom: 10 }}
      >
        Read our Privacy Policy. Tap "Agree and continue" to accept the Term of
        Services
      </Text>
      <Pressable
        style={{
          backgroundColor: "#128C7E",
          width: 200,
          alignItems: "center",
          borderRadius: 5,
        }}
        onPress={() => props.setShowNext(true)}
      >
        <Text style={{ color: "white", padding: 13, fontSize: 13 }}>
          AGREE AND CONTINUE
        </Text>
      </Pressable>
    </View>
  );
}
