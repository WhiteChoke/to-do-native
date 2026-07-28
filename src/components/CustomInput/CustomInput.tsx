import { StyleSheet, TextInput, TextStyle } from "react-native";
import { useThemeContext } from "../../context/themeContext/themeContext";
import customInputStyle from "./customInputStyle";

interface InputProps {
    placeholder: string,
    value: string,
    setValue: (v: string) => void,
    style?: TextStyle,
    multiline?: boolean;
}

function CustomInput(props: Readonly<InputProps>) {
    const theme = useThemeContext();
    const styles = customInputStyle(theme.pallate); 

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

export default CustomInput;