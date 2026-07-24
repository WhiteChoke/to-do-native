import { StyleSheet, TextInput } from "react-native";

interface InputProps {
    placeholder: string,
    value: string,
    setValue: (v: string) => void
}

function CustomInput(props: Readonly<InputProps>) {
    return ( 
        <TextInput 
            placeholder={props.placeholder}
            onChangeText={(text: string) => props.setValue(text)}
            value={props.value}
            style={styles.customInput}
        />
     );
}

const styles = StyleSheet.create({
    customInput: {
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderStyle: "solid",
        borderRadius: 10,
        flex: 1,
        paddingHorizontal: 10
    }
})

export default CustomInput;