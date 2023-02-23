import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Bookmark from "./screen/Bookmark";
import Modi from "./screen/Modi";
import Modidetail from "./screen/Modidetail";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Bookmark" component={Bookmark} />
        <Stack.Screen name="Modi" component={Modi} />
        <Stack.Screen name="Modidetail" component={Modidetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
