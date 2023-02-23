import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

function Login() {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text>Works</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
