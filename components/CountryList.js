import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { countries } from "../utilities/countryCodes";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function CountryList(props) {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      {showSearch ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 40,
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.2)",
          }}
        >
          <Ionicons
            name="ios-arrow-back-sharp"
            size={24}
            color="black"
            onPress={() => setShowSearch(false)}
          />
          <TextInput
            style={{ flex: 1, fontSize: 23, marginLeft: 10, padding: 5 }}
            placeholder={search === "" ? "Search countries" : null}
            onChangeText={setSearch}
            value={search}
          />
        </View>
      ) : (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 40,
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: "rgba(0,0,0,0.2)",
          }}
        >
          <Ionicons
            name="ios-arrow-back-sharp"
            size={24}
            color="black"
            onPress={() => props.setShowCountries(false)}
          />
          <Text
            style={{
              flex: 1,
              fontSize: 23,
              marginLeft: 10,
              margin: 5,
              color: "#128C7E",
            }}
          >
            Choose a country
          </Text>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            onPress={() => setShowSearch(true)}
          />
        </View>
      )}
      <ScrollView
        style={{
          flex: 1,
          width: "100%",
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        {search === ""
          ? countries.map((country) => {
              return (
                <TouchableOpacity
                  key={country.code + country.name}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 15,
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "rgba(0,0,0,0.2)",
                    paddingHorizontal: 10,
                  }}
                  onPress={() => {
                    props.setCountry(country.name);
                    props.setCode(country.code.replace("+", ""));
                    props.setShowCountries(false);
                  }}
                >
                  <Text style={{ fontSize: 20 }}>{country.name}</Text>
                  <Text style={{ fontSize: 20 }}>{country.code}</Text>
                </TouchableOpacity>
              );
            })
          : countries.map((country) => {
              if (country.name.toLowerCase().includes(search.toLowerCase())) {
                return (
                  <TouchableOpacity
                    key={country.code + country.name}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 15,
                      justifyContent: "space-between",
                      borderBottomWidth: 1,
                      borderBottomColor: "rgba(0,0,0,0.2)",
                      paddingHorizontal: 10,
                    }}
                    onPress={() => {
                      props.setCountry(country.name);
                      props.setCode(country.code.replace("+", ""));
                      props.setShowCountries(false);
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>{country.name}</Text>
                    <Text style={{ fontSize: 20 }}>{country.code}</Text>
                  </TouchableOpacity>
                );
              }
            })}
      </ScrollView>
    </View>
  );
}
