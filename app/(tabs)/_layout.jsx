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
            <Image
              style={{
                width: hp(3),
                height: hp(3),
                objectFit: "contain",
                tintColor: color,
              }}
              source={require("../../assets/tabs/Home.png")}
            />
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
            <Image
              style={{
                width: hp(3),
                height: hp(3),
                objectFit: "contain",
                tintColor: color,
              }}
              source={require("../../assets/tabs/Search.png")}
            />
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
            <Image
              style={{
                width: hp(3),
                height: hp(3),
                objectFit: "contain",
                tintColor: color,
              }}
              source={require("../../assets/tabs/Heart.png")}
            />
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
            <Image
              style={{
                width: hp(3),
                height: hp(3),
                objectFit: "contain",
                tintColor: color,
              }}
              source={require("../../assets/tabs/user.png")}
            />
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
