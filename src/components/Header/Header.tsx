import { StyleSheet, Text } from "react-native";
import { useThemeContext } from "../../context/themeContext/themeContext";
import headerStyle from "./headerStyle";

interface HeaderProps {
    text: string
}

function Header(props: Readonly<HeaderProps>) {
    const theme = useThemeContext();
    const styles = headerStyle(theme.pallate); 
    return (
        <Text style={styles.header}>{props.text}</Text>
    );
}

export default Header;