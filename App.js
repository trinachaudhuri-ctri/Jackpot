import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./src/screens/home";
import Profile from "./src/screens/profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  const [signedIn, setIsSignIn] = useState(false);
  const getToken = async () => {
    const retreivedToken =await AsyncStorage.getItem("token");
    if(retreivedToken){
    setIsSignIn(true);
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        // initialRouteName={signedIn? 'Home':'Login'}
      >
        {/* {signedIn ? (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        ) : (
          <> */}
            <Stack.Screen name="Login" component={Profile} />
            <Stack.Screen name="Home" component={Home} />
          {/* </> */}
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
