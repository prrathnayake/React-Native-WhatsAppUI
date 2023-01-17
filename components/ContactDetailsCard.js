import { View, Text } from "react-native";
import React from "react";
import Avatar from "./Avatar";

export default function ContactDetailsCard(props) {
  return (
    <View style={{ flexDirection: "row", padding: 10 }}>
      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Avatar
          src={props.data.imageAvailable && { uri: `${props.data.image.uri}` }}
        />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            {props.data.firstName} {props.data.lastName}
          </Text>
        </View>
      </View>
      <Text style={{ paddingRight: 10, paddingTop: 10 }}></Text>
    </View>
  );
}
