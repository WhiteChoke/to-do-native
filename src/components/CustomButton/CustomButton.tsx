import { TouchableOpacity } from "react-native";
import customButtonStyle from "./customButtomStyle";
import useTheme from "../../hooks/useTheme";
import CustomText from "../CustomText/CustomText";

interface ButtonProps {
  text: string;
  onPress: () => void;
}

function CustomButton(props: Readonly<ButtonProps>) {
    const styles = useTheme(customButtonStyle); 
  return (
    <TouchableOpacity style={styles.customButton} onPress={props.onPress}>
      <CustomText style={styles.customBottonText}>{props.text}</CustomText>
    </TouchableOpacity>
  );
}

export default CustomButton;
