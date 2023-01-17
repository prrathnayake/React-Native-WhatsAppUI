import { View, Text, ScrollView } from "react-native";
import React from "react";
import Avatar from "./Avatar";
import StatusCard from "./StatusCard";

export default function StatusPanel() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: "row", alignItems: "center", margin: 10 }}>
        <Avatar />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "600" }}>My Status</Text>
          <Text>Tap to add status update</Text>
        </View>
      </View>
      <Text style={{ margin: 10 }}>Recent Update</Text>
      <View>
        <View style={{ marginLeft: 10 }}>
          <StatusCard />
        </View>
      </View>
    </ScrollView>
  );
}
