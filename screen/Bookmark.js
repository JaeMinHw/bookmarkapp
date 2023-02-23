import React, { useState, useCallback } from "react";
import { theme } from "../color";
import { StatusBar } from "expo-status-bar";
import { bookinfo } from "./bookinfo";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Image,
  Linking,
} from "react-native";

function Bookmark({ navigation }) {
  const handlePress = async (num, link) => {
    // Checking if the link is supported for links with custom URL scheme.
    if (link === null) {
      Alert.alert(
        "등록하지 않은 " + num + "번 bookmark",
        "등록하러 가시겠습니까?",
        [
          {
            text: "취소",
          },
          {
            text: "등록",
            style: "destructive",
            onPress: () => {
              navigation.navigate("Modidetail", { number: num });
            },
          },
        ]
      );
      return;
    } else {
      link = "https://" + link;
      const supported = await Linking.canOpenURL(link);
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(link);
      } else {
        Alert.alert(`Don't know how to open this URL: ${link}`);
      }
    }
  };

  return (
    <View style={styles.contain}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>나만의 즐겨찾기</Text>
      </View>
      <View style={styles.con}>
        {Object.keys(bookinfo.list).map((key) => (
          <TouchableOpacity
            onPress={() =>
              handlePress(bookinfo.list[key].num, bookinfo.list[key].link)
            }
          >
            <View style={styles.con1}>
              <View style={styles.bookcontain} key={key}>
                <Image
                  key={key}
                  source={{
                    uri:
                      "https://www.google.com/s2/favicons?sz=64&domain=" +
                      bookinfo.list[key].link,
                  }}
                  style={{ width: 32, height: 32 }}
                />
                <Text style={styles.bookma}>{bookinfo.list[key].favName}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.modibtn}>
        <TouchableOpacity onPress={() => navigation.navigate("Modi")}>
          <View>
            <Text style={styles.moditext}>즐겨찾기 수정</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    margin: 50,
  },
  con: {
    flexDirection: "row",
    justifyContent: "space-between",

    flexWrap: "wrap",
  },
  con1: {
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 30,
    marginBottom: 5,
  },
  bookcontain: {
    alignItems: "center",
    width: 70,
    height: 60,
  },
  bookma: {
    fontSize: 20,
  },
  modibtn: {
    backgroundColor: theme.buttonBG,
    marginTop: 20,
    borderRadius: 5,
  },
  moditext: {
    fontSize: 25,
  },
});

export default Bookmark;
