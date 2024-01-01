import { StatusBar } from "expo-status-bar";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  return (
    <SafeAreaView className="flex-1  bg-white">
      <StatusBar style="auto" />
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : ""}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: hp(1.2),
            paddingBottom: hp(3),
          }}
        >
          <View
            style={{
              paddingHorizontal: hp(3),
              rowGap: hp(8),
            }}
          >
            <View className=" flex items-center">
              <Image
                source={require("../assets/Logo.png")}
                style={{
                  width: hp(20),
                  objectFit: "contain",
                  height: hp(20),
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: hp(3.2),
                }}
                className="text-black tracking-tighter font-bold "
              >
                ENTER YOUR{" "}
              </Text>
              <Text
                style={{
                  fontSize: hp(3.2),
                }}
                className=" text-skin-primary tracking-tighter font-bold "
              >
                FIRST AND LAST NAME
              </Text>
            </View>
            <View
              style={{
                rowGap: hp(3),
              }}
            >
              <TextInput
                placeholder="First name"
                className="border w-full rounded-lg  bg-transparent border-skin-border  text-skin-secondary "
                style={{
                  paddingHorizontal: hp(1.8),
                  paddingVertical: hp(1.9),
                }}
              />
              <TextInput
                placeholder="Last name"
                className="border w-full rounded-lg  bg-transparent border-skin-border  text-skin-secondary "
                style={{
                  paddingHorizontal: hp(1.8),
                  paddingVertical: hp(1.9),
                }}
              />
            </View>
            <View
              style={{
                paddingTop: hp(5),
              }}
            >
              <TouchableOpacity
                className="w-full bg-skin-primary flex items-center rounded-10"
                style={{
                  paddingVertical: hp(2),
                  paddingHorizontal: hp(1.9),
                }}
              >
                <Text
                  style={{
                    fontSize: hp(1.8),
                  }}
                  className="text-white font-bold "
                >
                  Continuer
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
