import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface MyButtonProps {
  title: string;
  onPress: () => void;
}

const MyButton = ({ title, onPress }: MyButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7} // opacity when pressed
      style={styles.button}
      onPress={onPress} // function to call when pressed
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "orange",
    paddingHorizontal: 40, //x-axis padding
    paddingVertical: 15, // y-axis padding
    borderRadius: 10, // rounded corners
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "700",
    textAlign: "center", // center the text
  },
});
export default MyButton;
