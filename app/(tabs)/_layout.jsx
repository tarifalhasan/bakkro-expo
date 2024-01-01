import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router/tabs";
import { Image, useColorScheme } from "react-native";
import colors from "../../constants/colors";
import hp from "../../lib/ResponsiveHeight";

export default function _layout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarInactiveTintColor: "#3A3A47",
        tabBarStyle: {
          height: hp(8),
          paddingTop: hp(2),
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={hp(3.5)} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: hp(1.8),
            fontWeight: "700",
          },
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <AntDesign name="search1" size={hp(3.5)} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: hp(1.8),
            fontWeight: "700",
          },
        }}
      />
      <Tabs.Screen
        name="favorite/index"
        options={{
          tabBarLabel: "Favorite",
          tabBarIcon: ({ color }) => (
            <AntDesign name="hearto" size={hp(3.5)} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: hp(1.8),
            fontWeight: "700",
          },
        }}
      />
      <Tabs.Screen
        name="owner/index"
        options={{
          tabBarLabel: "Owner",
          tabBarIcon: ({ color }) => (
            <Image
              style={{
                width: hp(3),
                height: hp(3),
                objectFit: "contain",
                tintColor: color,
              }}
              source={require("../../assets/key.png")}
            />
          ),
          tabBarLabelStyle: {
            fontSize: hp(1.8),
            fontWeight: "700",
          },
        }}
      />
      <Tabs.Screen
        name="account/index"
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: hp(1.8),
            fontWeight: "700",
          },
        }}
      />
    </Tabs>
  );
}
