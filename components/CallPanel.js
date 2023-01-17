import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

import CallCard from "./CallCard";
import { Ionicons } from '@expo/vector-icons';

export default function CallPanel() {
  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <CallCard />
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 15,
          right: 15,
          backgroundColor: "#25D366",
          padding: 20,
          borderRadius: 50,
        }}
      >
        <Ionicons name="call" size={30} color="black" />
      </TouchableOpacity>
    </>
  );
}
