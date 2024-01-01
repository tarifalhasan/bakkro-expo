import { TextInput } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Input({ ...props }) {
  return (
    <TextInput
      placeholder="First name"
      className="border w-full rounded-lg  bg-transparent border-skin-border  text-skin-secondary "
      style={{
        paddingHorizontal: hp(1.8),
        paddingVertical: hp(1.9),
      }}
      {...props}
    />
  );
}
