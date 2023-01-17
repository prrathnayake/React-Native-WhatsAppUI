import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { useIsFocused } from '@react-navigation/core';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function CameraPanel() {
  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaPermission, setHasMediaPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [zoom, setZoom] = useState(0);
  const [photo, setPhoto] = useState();
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaPermission(mediaPermission.status === "granted");
      setPhoto();
    })();
  }, []);

  const takePhoto = async () => {
    const options = { quality: 1, base64: true, exif: false, isImageMirror: false };
    const photo = await cameraRef.current.takePictureAsync(options);
    setPhoto(photo);
  };

  const savePhoto = () => {
    MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      setPhoto(undefined);
    });
  };

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return Alert.alert("Access denied");
  }
  return (
    <>
      {photo ? (
        <View style={{ flex: 1 }}>
          <Image
            style={{ flex: 1 }}
            source={{ uri: "data:image/jpg;base64," + photo.base64 }}
          />
          {hasMediaPermission ? (
            <Button title="Save" onPress={savePhoto} />
          ) : undefined}
          <Button title="Discard" onPress={() => setPhoto(undefined)} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <View
            style={{
              backgroundColor: "white",
              height: 60,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {flash === Camera.Constants.FlashMode.off ? (
              <TouchableOpacity
                onPress={() => {
                  setFlash(Camera.Constants.FlashMode.on);
                }}
              >
                <Ionicons name="flash-off" size={24} color="black" />
              </TouchableOpacity>
            ) : flash === Camera.Constants.FlashMode.on ? (
              <TouchableOpacity
                onPress={() => {
                  setFlash(Camera.Constants.FlashMode.torch);
                }}
              >
                <Ionicons name="ios-flash-outline" size={24} color="black" />
              </TouchableOpacity>
            ) : flash === Camera.Constants.FlashMode.torch ? (
              <TouchableOpacity
                onPress={() => {
                  setFlash(Camera.Constants.FlashMode.auto);
                }}
              >
                <Ionicons name="ios-flash" size={24} color="black" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setFlash(Camera.Constants.FlashMode.off);
                }}
              >
                <MaterialIcons name="flash-auto" size={24} color="black" />
              </TouchableOpacity>
            )}

            <TouchableOpacity>
              <MaterialIcons name="center-focus-weak" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            {isFocused && <Camera
              style={{ flex: 1 }}
              type={type}
              zoom={zoom}
              ref={cameraRef}
              flashMode={flash}
            ></Camera>}
          </View>

          <View
            style={{
              backgroundColor: "white",
              height: 60,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{ backgroundColor: "black", height: 40, width: 40 }}
            ></TouchableOpacity>
            <TouchableOpacity onPress={() => takePhoto()}>
              <MaterialIcons name="monochrome-photos" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            >
              <MaterialCommunityIcons
                name="camera-flip"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
