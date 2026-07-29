import { Text } from "react-native";
import headerStyle from "./headerStyle";
import useTheme from "../../hooks/useTheme";

interface HeaderProps {
    text: string
}

function Header(props: Readonly<HeaderProps>) {
    const styles = useTheme(headerStyle); 
    return (
        <Text style={styles.header}>{props.text}</Text>
    );
}

export default Header;