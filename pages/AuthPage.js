import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Welcome from "../components/Welcome";
import AddDetails from "../components/AddDetails";

export default function AuthPage() {
  const [showNext, setShowNext] = useState(false);
  return (
    <View style={styles.container}>
      {showNext ?<AddDetails />  : <Welcome setShowNext={setShowNext} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
