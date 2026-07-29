import { StyleSheet, TouchableOpacity } from "react-native";
import CustomText from "./CustomText/CustomText";

interface TextButtonProps {
    onPress: () => void,
    text: string
}

function Textbutton(props: Readonly<TextButtonProps>) {
    return (  
        <TouchableOpacity 
          style={styles.textButton}
          onPress={props.onPress}
        >
            <CustomText>{props.text}</CustomText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textButton: {
        backgroundColor: "transparent"
    }
});

export default Textbutton;