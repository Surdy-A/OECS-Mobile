import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./screens/Home";
import { Platform } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { navigationRef } from "./layout/RootNavigation";
import NewsDetail from "./screens/NewsDetail";
import AboutGlobo from "./screens/About";
import Shows from "./screens/Shows";
import ShowsPage from "./screens/ShowsPage";
import ContactForm from "./screens/ContactForm";
import ContactForm2 from "./screens/ContactForm2";

import Payment from "./screens/Payment";

import ShowDetail from "./screens/ShowDetail";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
        ref={navigationRef}
      >
        <Stack.Navigator initialRouteName="News" headerMode="screen">
          <Stack.Screen
            name="News"
            component={Homepage}
            options={{
              header: () => <Header headerDisplay="SLearn" />,
            }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              header: () => <Header headerDisplay="SLearn" />,
            }}
          />
          <Stack.Screen
            name="About"
            component={AboutGlobo}
            options={{
              header: () => <Header headerDisplay="SLearn" />,
            }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
            options={{
              header: () => <Header headerDisplay="SLearn" />,
            }}
          />

          <Stack.Screen
            name="Shows"
            component={Shows}
            options={{
              header: () => <Header headerDisplay="SLearn" />,
            }}
          />
          <Stack.Screen
            name="ShowsPage"
            component={ShowsPage}
            options={{
              header: () => <Header headerDisplay="SLearn" />,
            }}
          />
          <Stack.Screen
            name="ShowDetail"
            component={ShowDetail}
            options={{
              header: () => <Header headerDisplay="SLearn" />,
            }}
          />

          <Stack.Screen
            name="ContactForm"
            component={ContactForm}
            options={{
              header: () => <Header headerDisplay="SLearn" />,
            }}
          />

          <Stack.Screen
            name="ContactForm2"
            component={ContactForm2}
            options={{
              header: () => <Header headerDisplay="SLearn" />,
            }}
          />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    );
  }
}
