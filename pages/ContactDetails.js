import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import * as Contacts from "expo-contacts";
import ContactDetailsCard from "../components/ContactDetailsCard";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import SmallLoader from "../components/loadingEffects/SmallLoader";

export default function ContactDetails() {
  const navigation = useNavigation();
  const [contactList, setContactList] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [pageLoad, setPageLoad] = useState(false);

  useEffect(() => {
    setPageLoad(true);
    if (contactList.length === 0) {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          const { data } = await Contacts.getContactsAsync({});

          if (data.length > 0) {
            setContactList(data);
            setPageLoad(false);
          }
        }
      })();
    }
  }, []);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="auto" />
      {showSearch ? (
        <View
          style={{
            backgroundColor: "#128C7E",
            paddingTop: 40,
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              style={{ fontSize: 30, color: "white", paddingLeft: 20 }}
              name="arrow-back"
              size={24}
              color="white"
              onPress={() => setShowSearch(false)}
            />
            <TextInput
              style={{ flex: 1, fontSize: 23, marginLeft: 10, padding: 5 }}
              placeholder={search === "" ? "Search contacts" : null}
              onChangeText={setSearch}
              value={search}
            />
            <Entypo
              name="dots-three-vertical"
              size={24}
              color="white"
              style={{ paddingRight: 10 }}
            />
          </View>
        </View>
      ) : (
        <View
          style={{
            backgroundColor: "#128C7E",
            paddingTop: 40,
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Ionicons
              style={{ fontSize: 30, color: "white", paddingLeft: 20 }}
              name="arrow-back"
              size={24}
              color="white"
              onPress={() => {
                navigation.navigate("Chat");
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AntDesign
                name="search1"
                size={24}
                color="white"
                style={{ paddingRight: 15 }}
                onPress={() => setShowSearch(true)}
              />
              <Entypo
                name="dots-three-vertical"
                size={24}
                color="white"
                style={{ paddingRight: 10 }}
              />
            </View>
          </View>
        </View>
      )}
      {pageLoad ? (
        <View style={{ paddingTop: 300 }}>
          <SmallLoader />
        </View>
      ) : search === "" ? (
        contactList.map((contact) => {
          return <ContactDetailsCard data={contact} key={contact.id} />;
        })
      ) : (
        contactList.map((contact) => {
          if (
            (contact.firstName &&
              contact.firstName.toLowerCase().includes(search.toLowerCase())) ||
            (contact.lastName &&
              contact.lastName.toLowerCase().includes(search.toLowerCase()))
          ) {
            return <ContactDetailsCard data={contact} key={contact.id} />;
          }
        })
      )}
    </ScrollView>
  );
}
