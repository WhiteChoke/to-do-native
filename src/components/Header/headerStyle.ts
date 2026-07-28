import { StyleSheet } from "react-native";
import { Palette } from "../../theme/palette";

export default function headerStyle(theme: Palette) {
    return StyleSheet.create({
        header: {
            color: theme.text,
            fontSize: 30,
            marginTop: 75,
            fontWeight: "400",
        }
    });
}