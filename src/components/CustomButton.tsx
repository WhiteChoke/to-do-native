import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

function CustomButton(props: Readonly<ButtonProps>) {
  return (
    <TouchableOpacity style={styles.customButton} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "#2C2C2C",
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  buttonText: {
    color: "white",
  },
});

export default CustomButton;
