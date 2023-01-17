import { View, Text } from "react-native";
import React from "react";
import Avatar from "./Avatar";

export default function StatusCard() {
  return (
    <View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Name</Text>
          <Text>16 minutes ago</Text>
        </View>
      </View>
    </View>
  );
}
