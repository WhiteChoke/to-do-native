import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useThemeContext } from "../../context/themeContext/themeContext";
import customButtonStyle from "./customButtomStyle";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

function CustomButton(props: Readonly<ButtonProps>) {
    const theme = useThemeContext();
    const styles = customButtonStyle(theme.pallate); 
  return (
    <TouchableOpacity style={styles.customButton} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
