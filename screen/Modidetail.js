import React, { useState, useCallback, useEffect } from "react";
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

function Modidetail({ navigation, route }) {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setLink(bookinfo.list[route.params.number - 1].link);
    setName(bookinfo.list[route.params.number - 1].favName);
  }, []);

  const onChangeLink = (changeLink) => {
    setLink(changeLink);
  };
  const onChangeName = (changeName) => {
    setName(changeName);
  };

  const modifyBookmark = () => {
    // 입력된 값들 보내기..
    Alert.alert("수정이 완료되었습니다.");
    navigation.navigate("Bookmark");
  };

  return (
    <View style={styles.contain}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>나만의 즐겨찾기</Text>
      </View>
      <View style={styles.modiCon}>
        <View style={styles.modiCon1}>
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <View style={styles.bookcontain} key={route.params.number}>
              <Image
                key={route.params.number}
                source={{
                  uri:
                    "https://www.google.com/s2/favicons?sz=64&domain=" +
                    bookinfo.list[route.params.number - 1].link,
                }}
                style={{ width: 32, height: 32 }}
              />
              <View style={styles.numText}>
                <Text style={styles.textFont}>BookNumber:</Text>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 5,
                    width: 30,
                    borderColor: theme.borderBG,
                    borderWidth: 1,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                    }}
                  >
                    {bookinfo.list[route.params.number - 1].num}
                  </Text>
                </View>
              </View>
              <View style={styles.nameText}>
                <Text style={styles.textFont}>즐겨찾기 이름 :</Text>
                <TextInput
                  // onSubmitEditing={addToDo}
                  onChangeText={onChangeName}
                  value={name}
                  returnKeyType="done"
                  keyboardType="default"
                  placeholder="즐겨찾기 이름 입력"
                  style={styles.inputText}
                />
              </View>
              <View style={styles.linkText}>
                <Text style={styles.textFont}>즐겨찾기 URL :</Text>
                <TextInput
                  onChangeText={onChangeLink}
                  value={link}
                  returnKeyType="done"
                  keyboardType="email-address"
                  placeholder="URL 입력"
                  style={styles.inputText}
                />
              </View>
            </View>
          </View>
          <View style={styles.finishbtn}>
            <TouchableOpacity onPress={() => modifyBookmark()}>
              <Text style={styles.loginfont}>수정</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "grey",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    margin: 50,
  },
  modiCon: {
    width: 300,
    height: 350,
    alignItems: "center",
  },
  modiCon1: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 300,
    height: 370,
  },
  linkText: {
    marginTop: 20,
  },
  bookcontain: {
    marginTop: 50,
  },
  numText: {
    marginTop: 30,
  },
  nameText: {
    marginTop: 20,
  },
  textFont: {
    fontSize: 20,
    fontWeight: "500",
  },
  inputText: {
    fontSize: 20,
    backgroundColor: "white",
    borderColor: theme.borderBG,
    borderWidth: 1,
    borderRadius: 5,
  },
  finishbtn: {
    borderColor: theme.buttonBG,
    borderWidth: 1,

    alignItems: "center",
    width: 280,
    height: 30,
    marginTop: 30,
    marginLeft: 10,
    borderRadius: 5,
  },
  loginfont: {
    fontSize: 20,
    marginTop: 3,
  },
});
export default Modidetail;
