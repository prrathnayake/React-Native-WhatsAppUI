import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useRef, useState } from "react";

import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ProfileDetails from "./ProfileDetails";

export default function Verify() {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [digit5, setDigit5] = useState("");
  const [digit6, setDigit6] = useState("");

  const textInputRef1 = useRef(null);
  const textInputRef2 = useRef(null);
  const textInputRef3 = useRef(null);
  const textInputRef4 = useRef(null);
  const textInputRef5 = useRef(null);

  const [renderNextPage, setRenderNextPage] = useState(false);

  const handleNext = () => {
    const secureCode = digit1 + digit2 + digit3 + digit4 + digit5 + digit6;
    console.log(secureCode);
    setRenderNextPage(true);
  };

  return (
    <>
      {renderNextPage ? (
        <ProfileDetails />
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ marginTop: 50 }}>
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
                  Verify your phone number
                </Text>
                <Entypo name="dots-three-vertical" size={18} color="black" />
              </View>
              <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text>Enter the verification code.</Text>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    style={styles.digitInput}
                    maxLength={1}
                    value={digit1}
                    onChangeText={(value) => {
                      setDigit1(value);
                      if (value.length >= 1) {
                        textInputRef1.current?.focus();
                      }
                    }}
                    keyboardType="number-pad"
                  />
                  <TextInput
                    ref={(ref) => (textInputRef1.current = ref)}
                    style={styles.digitInput}
                    maxLength={1}
                    value={digit2}
                    keyboardType="number-pad"
                    onChangeText={(value) => {
                      setDigit2(value);
                      if (value.length >= 1) {
                        textInputRef2.current?.focus();
                      }
                    }}
                  />
                  <TextInput
                    ref={(ref) => (textInputRef2.current = ref)}
                    style={styles.digitInput}
                    maxLength={1}
                    value={digit3}
                    keyboardType="number-pad"
                    onChangeText={(value) => {
                      setDigit3(value);
                      if (value.length >= 1) {
                        textInputRef3.current?.focus();
                      }
                    }}
                  />
                  <TextInput
                    ref={(ref) => (textInputRef3.current = ref)}
                    style={styles.digitInput}
                    maxLength={1}
                    value={digit4}
                    keyboardType="number-pad"
                    onChangeText={(value) => {
                      setDigit4(value);
                      if (value.length >= 1) {
                        textInputRef4.current?.focus();
                      }
                    }}
                  />
                  <TextInput
                    ref={(ref) => (textInputRef4.current = ref)}
                    style={styles.digitInput}
                    maxLength={1}
                    value={digit5}
                    keyboardType="number-pad"
                    onChangeText={(value) => {
                      setDigit5(value);
                      if (value.length >= 1) {
                        textInputRef5.current?.focus();
                      }
                    }}
                  />
                  <TextInput
                    ref={(ref) => (textInputRef5.current = ref)}
                    style={styles.digitInput}
                    maxLength={1}
                    value={digit6}
                    keyboardType="number-pad"
                    onChangeText={(value) => {
                      setDigit6(value);
                    }}
                  />
                </View>
                <Text style={{ marginTop: 10 }}>Enter 6-digit code</Text>
              </View>
            </View>
            <View style={{ paddingTop: 20, paddingLeft: 30 }}>
              <View style={styles.options}>
                <MaterialCommunityIcons
                  name="android-messages"
                  size={30}
                  color="black"
                />
                <Text style={{ fontSize: 15, marginLeft: 10 }}>
                  Resend code
                </Text>
              </View>
              <View style={styles.options}>
                <Ionicons name="md-call" size={30} color="black" />
                <Text style={{ fontSize: 15, marginLeft: 10 }}>Call me</Text>
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
  digitInput: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#25D366",
    paddingVertical: 10,
    width: 20,
    marginHorizontal: 5,
    padding: 5,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
  },
});
