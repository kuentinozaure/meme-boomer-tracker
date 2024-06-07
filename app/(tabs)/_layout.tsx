import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

const TabBarTitle = {
  home: "index",
  statistics: "statistics",
};

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name={TabBarTitle.home}
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={TabBarTitle.statistics}
        options={{
          title: "Statistics",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
