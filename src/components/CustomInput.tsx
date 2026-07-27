import { StyleSheet, TextInput, TextStyle } from "react-native";

interface InputProps {
    placeholder: string,
    value: string,
    setValue: (v: string) => void,
    style?: TextStyle,
    multiline?: boolean;
}

function CustomInput(props: Readonly<InputProps>) {
    return ( 
        <TextInput 
            placeholder={props.placeholder}
            onChangeText={(text: string) => props.setValue(text)}
            value={props.value}
            style={[
                styles.customInput, 
                props.style,
                props.multiline && { textAlignVertical: 'top', paddingTop: 10 }
            ]}
            multiline={props.multiline}
        />
     );
}

const styles = StyleSheet.create({
    customInput: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderStyle: "solid",
        borderRadius: 10,
        paddingHorizontal: 10,
    }
})

export default CustomInput;