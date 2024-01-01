import React from "react";
import { Image, Text, View } from "react-native";
import hp from "../../lib/ResponsiveHeight";

export default function HomeBannerCard() {
  return (
    <View
      style={{
        paddingTop: hp(4),
      }}
      className="relative"
    >
      <Image
        className="rounded-md"
        style={{
          width: "100%",
          height: hp(55),
          objectFit: "cover",
        }}
        source={require("../../assets/home_banner.png")}
      />
      <View
        style={{
          width: "55%",
          top: hp(45),
          left: hp(2),
        }}
        className=" absolute "
      >
        <Text
          style={{
            fontSize: hp(3.5),
          }}
          className="text-white font-bold"
        >
          White Mordern House
        </Text>
        <Text
          style={{
            fontSize: hp(1.6),
          }}
          className="text-white font-normal"
        >
          Broad way street , <Text className="font-bold">America</Text>
        </Text>
      </View>
    </View>
  );
}
