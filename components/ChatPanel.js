import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import ChatCard from "./ChatCard";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatPanel() {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView
        style={{ flex: 1, backgroundColor: "white" }}
        showsVerticalScrollIndicator={false}
      >
        <ChatCard />
      </ScrollView>
      <TouchableOpacity style={{ position: "absolute", bottom: 15, right: 15, backgroundColor: '#25D366',  padding:20, borderRadius: 50 }} onPress={()=>{navigation.navigate('ContactList')}}>
        <MaterialCommunityIcons
          name="android-messages"
          size={30}
          color="black"
        />
      </TouchableOpacity>
    </>
  );
}
