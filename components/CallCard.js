import { View, Text } from "react-native";
import React from "react";
import Avatar from "./Avatar";

import { Ionicons } from "@expo/vector-icons";

export default function CallCard() {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          paddingRight: 20,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Avatar/>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Name</Text>
            <Text style={{}}>Yesterday, 20.26</Text>
          </View>
        </View>
        <Ionicons name="call" size={24} color="#075E54" />
      </View>
    </View>
  );
}
