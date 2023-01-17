import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import CountryList from "./CountryList";
import Verify from "./Verify";

export default function AddDetails() {
  const [showCountries, setShowCountries] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [countriy, setCountry] = useState("Choose a country");
  const [code, setCode] = useState("");
  const [mobile, setMobile] = useState("");

  const handleNext = () => {
    Alert.alert(
      `Your number is: +${code} ${mobile}`,
      "Is this Ok, or would you like to edith the number?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => setShowNext(true) },
      ]
    );
  };

  return (
    <>
      {showNext ? (
        <Verify />
      ) : showCountries ? (
        <CountryList
          setShowCountries={setShowCountries}
          setCountry={setCountry}
          setCode={setCode}
        />
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
        >
          <View style={{ flex: 1, marginTop: 50 }}>
            <View
              style={{
                flexDirection: "row",
                width: 350,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  color: "#128C7E",
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Enter your phone number
              </Text>
              <Entypo name="dots-three-vertical" size={18} color="black" />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderBottomWidth: 1,
                  borderBottomColor: "#25D366",
                  paddingVertical: 10,
                  width: 200,
                }}
                onPress={() => setShowCountries(true)}
              >
                <Text
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: 17,
                  }}
                >
                  {countriy}
                </Text>
                <AntDesign name="caretdown" size={13} color="#128C7E" />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 20,
                  width: 200,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: "#25D366",
                    justifyContent: "flex-start",
                    width: "20%",
                    alignItems: "center",
                  }}
                >
                  <Text>+</Text>
                  <TextInput
                    style={{ flex: 1, marginLeft: 3 }}
                    keyboardType={"number-pad"}
                    value={code}
                  />
                </View>
                <TextInput
                  style={[styles.inputFields, { width: "70%" }]}
                  placeholder="Phone number"
                  keyboardType={"number-pad"}
                  autoFocus={true}
                  onChangeText={setMobile}
                  value={mobile}
                />
              </View>
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
            <Text style={{ color: "white", padding: 13, fontSize: 13 }}>
              NEXT
            </Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  inputFields: {
    borderBottomWidth: 1,
    borderBottomColor: "#25D366",
    paddingHorizontal: 5,
  },
});
