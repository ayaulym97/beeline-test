import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ disable, onPress, style, textStyle, text }) => {
  return (
    <TouchableOpacity disabled={disable} style={style} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;