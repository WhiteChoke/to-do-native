import { TextInput, TextStyle } from "react-native";
import customInputStyle from "./customInputStyle";
import useTheme from "../../hooks/useTheme";
import { useThemeContext } from "../../context/themeContext/themeContext";

interface InputProps {
    placeholder?: string,
    value?: string,
    setValue: (v: string) => void,
    style?: TextStyle,
    multiline?: boolean;
}

function CustomInput(props: Readonly<InputProps>) {
    const styles = useTheme(customInputStyle); 
    const { pallate } = useThemeContext();

    return ( 
        <TextInput 
            placeholder={props.placeholder}
            onChangeText={(text: string) => props.setValue(text)}
            value={props.value}
            placeholderTextColor={pallate.placeholderTextColor}
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