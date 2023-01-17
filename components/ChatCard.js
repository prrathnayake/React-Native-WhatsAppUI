import { View, Text } from "react-native";
import React from "react";
import Avatar from "./Avatar";

export default function ChatCard() {
  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      <View style={{ flex:1, flexDirection: "row", alignItems: "center" }}>
        <Avatar />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Pasan Ransika</Text>
          <Text style={{}}>Hey</Text>
        </View>
      </View>
      <Text style={{ paddingRight: 10, paddingTop: 10}}>18.52</Text>
    </View>
  );
}
