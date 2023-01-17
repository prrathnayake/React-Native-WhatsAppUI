import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Avatar(props) {
  return (
    <TouchableOpacity style={{ margin: 5 }} onPress={props.onPress}>
      <Image
        source={props.src || require("../assets/user-icon.png")}
        style={{
          width: props.width || 60,
          height: props.height || 60,
          borderRadius: props.width / 2 || 30,
        }}
      />
    </TouchableOpacity>
  );
}
