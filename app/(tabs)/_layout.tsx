import { Tabs } from "expo-router";
import { Image } from "react-native";
import Colors from "../../constants/Colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.dark,
        tabBarInactiveTintColor: Colors.gray,
        tabBarLabelStyle: {
          fontFamily: "urb-bold",
        },
        tabBarStyle: {
          height: 55,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                className="w-8 h-8"
                source={require("../../assets/images/icons/home.png")}
              />
            ) : (
              <Image
                className="w-7 h-7"
                source={require("../../assets/images/icons/home-outline.png")}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, focused, size }) =>
            focused ? (
              <Image
                className="w-8 h-8"
                source={require("../../assets/images/icons/search.png")}
              />
            ) : (
              <Image
                className="w-7 h-7"
                source={require("../../assets/images/icons/search-outline.png")}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                className="h-8 w-7"
                source={require("../../assets/images/icons/cart.png")}
              />
            ) : (
              <Image
                className="w-7 h-7"
                source={require("../../assets/images/icons/cart-outline.png")}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color, size }) =>
            focused ? (
              <Image
                className="w-8 h-8 "
                source={require("../../assets/images/icons/account.png")}
              />
            ) : (
              <Image
                className="w-7 h-7"
                source={require("../../assets/images/icons/account-outline.png")}
              />
            ),
        }}
      />
    </Tabs>
  );
}
