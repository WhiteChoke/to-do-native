import { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { useThemeContext } from "../../context/themeContext/themeContext";

interface TextType {
    style?: TextStyle | TextStyle[];
    children: ReactNode
}

function CustomText({ style, children }: TextType) {
    const { pallate } = useThemeContext();

    return (
        <Text style={[{color: pallate.text}, style]}>
            {children}
        </Text> 
    );
}

export default CustomText;