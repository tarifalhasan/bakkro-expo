import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import hp from "../../lib/ResponsiveHeight";

const HouseCard = ({ image, title, description, key }) => {
  return (
    <TouchableOpacity
      style={{
        width: hp(20),
      }}
      className="rounded-md"
    >
      <View>
        <Image
          style={{
            width: "100%",
            height: hp(15),
            objectFit: "contain",
          }}
          source={require("../../assets/h1.png")}
        />
      </View>
      <View
        style={{
          paddingHorizontal: hp(0.8),
          paddingBottom: hp(1),
        }}
        className="border rounded-b-md border-t-0 border-skin-border"
      >
        <Text
          style={{
            fontSize: hp(2.5),
          }}
          className={"font-bold text-black"}
        >
          Kpsum dolor
        </Text>
        <Text
          style={{
            fontSize: hp(1.5),
          }}
          className="text-black opacity-50"
        >
          Lorem ipsum dolor sit amet cons ectetur....
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default HouseCard;
