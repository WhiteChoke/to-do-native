import { Text, TouchableOpacity } from "react-native";
import customButtonStyle from "./customButtomStyle";
import useTheme from "../../hooks/useTheme";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

function CustomButton(props: Readonly<ButtonProps>) {
    const styles = useTheme(customButtonStyle); 
  return (
    <TouchableOpacity style={styles.customButton} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
