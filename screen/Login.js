import React, { useState } from "react";
import { theme } from "../color";
import { StatusBar } from "expo-status-bar";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";

function Login({ navigation }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const logibtn = () => {
    // 로그인 버튼 누르면 서버랑 통신하여 아이디 비밀번호 확인 후 데이터베이스에 존재하면 로그인 시켜주기
    if (id != "" && pw != "") {
      // 서버에 보내서 아이디 비밀번호 체크 로그인 시 bookmark로 이동
      if (id === "woals99" && pw === "woals99") {
        navigation.navigate("Bookmark");
      } else {
        Alert.alert("아이디와 비밀번호를 확인하여주세요");
      }
    } else {
      Alert.alert("아이디와 비밀번호를 입력하여주세요.");
    }
  };

  const onChangeId = (changeid) => {
    setId(changeid);
  };

  const onChangePw = (changepw) => {
    setPw(changepw);
  };
  return (
    <View style={styles.contain}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.title}>나만의 즐겨찾기</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.idbox}>
          <Text>아이디</Text>
          <TextInput
            // onSubmitEditing={addToDo}
            onChangeText={onChangeId}
            value={id}
            // secureTextEntry
            // multiline
            returnKeyType="done"
            keyboardType="default"
            placeholder="아이디"
            style={styles.id}
          />
        </View>
        <View style={styles.pwbox}>
          <Text>비밀번호</Text>
          <TextInput
            // onSubmitEditing={addToDo}
            onChangeText={onChangePw}
            value={pw}
            secureTextEntry
            // multiline
            returnKeyType="done"
            placeholder="비밀번호"
            style={styles.pw}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.loginbtn}>
            <TouchableOpacity onPress={logibtn}>
              <Text style={styles.loginfont}>로그인</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signbtn}>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signfont}> 회원가입</Text>
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
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    margin: 50,
  },
  box: {
    marginTop: 80,
    width: 200,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 10,
  },
  idbox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 50,
  },
  id: {
    margin: 20,
    fontSize: 20,
    paddingHorizontal: 5,
    width: 100,
    // backgroundColor: "blue",
  },
  pwbox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 60,
    // justifyContent: "space-between",
  },
  pw: {
    marginVertical: 20,
    marginLeft: 15,
    width: 130,
    fontSize: 20,
    // backgroundColor: "blue",
  },
  btn: {
    // marginTop: 100,
    flexDirection: "row",
    marginTop: 100,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  loginbtn: {
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: theme.buttonBG,
  },
  loginfont: {
    margin: 6,
    fontSize: 20,
  },
  signbtn: {
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: theme.buttonBG,
  },
  signfont: {
    margin: 5,
    fontSize: 20,
  },
});

export default Login;
