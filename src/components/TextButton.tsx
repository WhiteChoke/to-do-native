import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
            <Text>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    textButton: {
        backgroundColor: "transparent"
    }
});

export default Textbutton;