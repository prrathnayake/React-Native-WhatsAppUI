import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Avatar from "./Avatar";
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from "expo-image-picker";

export default function ProfileDetails() {
  const navigation = useNavigation();

  const [image, setImage] = useState(null);
  const [name, setName] = useState('')

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setImage(`data:image/jpg;base64,${result.base64}`);
    }
  };
  const handleNext = () => {
    navigation.navigate('Home')
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ flex: 1, alignItems: "center", paddingTop: 80 }}>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>Profile info</Text>
        <Text style={{ paddingBottom: 20 }}>
          Pleace provide your name and an optional photo
        </Text>
        <Avatar
          src={image && { uri: image }}
          width={120}
          height={120}
          onPress={() => pickImage()}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: 250,
            borderBottomWidth: 1,
            borderBottomColor: "#128C7E",
            marginTop: 10,
          }}
        >
          <TextInput style={{flex:1}} maxLength={25} onChangeText={setName} value={name}/>
          <Text>{25 - name.length}</Text>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "#128C7E",
          width: 100,
          alignItems: "center",
          borderRadius: 5,
          marginBottom: 20,
        }}
        onPress={() => handleNext()}
      >
        <Text style={{ color: "white", padding: 13, fontSize: 13 }}>NEXT</Text>
      </Pressable>
    </View>
  );
}
