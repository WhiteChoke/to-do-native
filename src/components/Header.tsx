import { StyleSheet, Text } from "react-native";

interface HeaderProps {
    text: string
}

function Header(props: Readonly<HeaderProps>) {
    return (
        <Text style={styles.header}>{props.text}</Text>
    );
}

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontSize: 30,
        marginTop: 75,
        fontWeight: "400",
    }
});

export default Header;