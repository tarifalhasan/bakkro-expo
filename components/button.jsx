import React from "react";
import { Text, TouchableOpacity } from "react-native";
import hp from "../lib/ResponsiveHeight";

export const PrimaryButton = ({ title, btnStyle, ...props }) => {
  return (
    <TouchableOpacity
      className={` ${btnStyle} bg-skin-primary flex-row justify-center items-center rounded-md `}
      style={{
        height: hp(6),
      }}
      {...props}
    >
      <Text
        style={{
          fontSize: hp(1.8),
        }}
        className="text-white font-bold "
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export const OutlineButton = ({ title, btnStyle, ...props }) => {
  return (
    <TouchableOpacity
      className={` ${btnStyle} border rounded-md border-skin-primary flex-row justify-center items-center `}
      style={{
        height: hp(6),
      }}
      {...props}
    >
      <Text
        style={{
          fontSize: hp(1.8),
          color: "#E97400",
        }}
        className=" font-bold  "
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
