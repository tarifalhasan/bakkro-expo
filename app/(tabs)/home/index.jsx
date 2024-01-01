import React from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { OutlineButton, PrimaryButton } from "../../../components/button";
import HomeBannerCard from "../../../components/home/HomeBannerCard";
import HouseCard from "../../../components/shared/HouseCard";
import { HomeSlidesData } from "../../../constants/homeSlides";
import hp from "../../../lib/ResponsiveHeight";

const Home = () => {
  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{ paddingVertical: hp(5), paddingHorizontal: hp(2) }}
        className="flex-row items-start justify-between"
      >
        <View>
          <Text style={{ fontSize: hp(3) }} className="text-black font-normal">
            Hello, <Text className="font-bold">Jenny</Text>
          </Text>
          <Text
            style={{
              fontSize: hp(2),
            }}
            className="tet-black opacity-[0.67] font-normal"
          >
            Welcome to Bakkro
          </Text>
        </View>
        <View
          style={{
            width: hp(6),
          }}
        >
          <Image
            style={{
              width: "100%",
              height: hp(6),
              objectFit: "cover",
              borderRadius: 9,
            }}
            source={require("../../../assets/tarif.jpg")}
          />
          <View className="flex-row items-center gap-x-2">
            <Text
              style={{
                fontSize: hp(1.7),
              }}
              className="text-black font-normal"
            >
              0.00
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: hp(2),
        }}
        className="flex-row  space-x-4  justify-between"
      >
        <PrimaryButton btnStyle={"flex-1"} title={"Find accommodation"} />
        <OutlineButton btnStyle={"flex-1"} title={"Purchase/Rental"} />
      </View>
      <View
        style={{
          paddingHorizontal: hp(2),
        }}
      >
        <HomeBannerCard />
      </View>

      <View
        style={{
          paddingTop: hp(3),
          paddingBottom: hp(3),
        }}
      >
        <FlatList
          data={HomeSlidesData}
          renderItem={({ item }) => (
            <HouseCard
              title={item.title}
              image={item.image}
              description={item.description}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ width: 16 }} />} // Adjust the width as needed
          identifier
          contentContainerStyle={{
            marginLeft: hp(2),
            paddingRight: hp(4),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
