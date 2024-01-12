import { Tabs } from "expo-router";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import TabBar from "../../components/TabBar";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
      // tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <AntDesign name="appstore1" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <FontAwesome name="user" size={24} color={color} />
            ) : (
              <FontAwesome name="user" size={24} color={color} />
            ),
        }}
      />
    </Tabs>
  );
}
