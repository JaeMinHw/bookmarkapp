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

function SignUp({ navigation }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const getSign = async () => {
    // 회원가입 버튼 누르면 서버랑 통신 후 데이터베이스에 저장해서 다시 login으로 돌아오기

    // try {
    //   const response = await fetch(
    //     `https://127.0.0.1:5000/signup/woals99/woals99`
    //   );
    //   const data = await response.json();
    //   console.log(data);
    // } catch (error) {
    //   console.error(error);
    // }
    if (id != "" && pw != "") {
      Alert.alert("회원가입이 완료되었습니다.");
      navigation.navigate("Login");
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
            keyboardType="email-address"
            placeholder="아이디 입력"
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
            placeholder="비밀번호 입력"
            style={styles.pw}
          />
        </View>
      </View>
      <View style={styles.btn}>
        <View style={styles.signbtn}>
          <TouchableOpacity onPress={getSign}>
            <Text style={styles.signfont}> 회원가입</Text>
          </TouchableOpacity>
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
  },
  idbox: {
    // paddingVertical: 20,
    // paddingHorizontal: 20,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  id: {
    margin: 20,
    fontSize: 20,
    paddingHorizontal: 5,
  },
  pwbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pw: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  btn: {
    // marginTop: 100,
    flexDirection: "row",
    marginTop: 100,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  signbtn: {
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: theme.buttonBG,
  },
  signfont: {
    margin: 5,
    fontSize: 20,
  },
});

export default SignUp;
