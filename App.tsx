import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomeIcon from "@/assets/icons/home.svg";
import DiscoverIcon from "@/assets/icons/discover.svg";
import ActivityIcon from "@/assets/icons/activity.svg";
import BookmarksIcon from "@/assets/icons/bookmark.svg";
import ProfileIcon from "@/assets/icons/profile.svg";
import ForYou from "@/screens/for-you/for-you";
import store from "@/store";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={() => ({
              headerShown: false,
              tabBarStyle: {
                backgroundColor: "rgb(0,0,0)",
                borderTopColor: "transparent",
                height: 100,
                borderBottomWidth: 20,
              },
              tabBarActiveTintColor: "white",
            })}
          >
            <Tab.Screen
              name="Home"
              component={ForYou}
              options={{
                tabBarIcon: ({ focused }) => (
                  <HomeIcon fillOpacity={focused ? 1.0 : 0.4} width={50} />
                ),
              }}
            />
            <Tab.Screen
              name="Discover"
              component={View}
              options={{
                tabBarIcon: ({ focused }) => (
                  <DiscoverIcon fillOpacity={focused ? 1.0 : 0.4} width={45} />
                ),
              }}
            />
            <Tab.Screen
              name="Activity"
              component={View}
              options={{
                tabBarIcon: ({ focused }) => (
                  <ActivityIcon fillOpacity={focused ? 1.0 : 0.4} width={40} />
                ),
              }}
            />
            <Tab.Screen
              name="Bookmarks"
              component={View}
              options={{
                tabBarIcon: ({ focused }) => (
                  <BookmarksIcon fillOpacity={focused ? 1.0 : 0.4} width={23} />
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={View}
              options={{
                tabBarIcon: ({ focused }) => (
                  <ProfileIcon fillOpacity={focused ? 1.0 : 0.4} width={60} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    fontFamily: "SF Pro Rounded",
  },
});
