import { StyleSheet } from "react-native";
import { Palette } from "../../theme/palette";

export default function customInputStyle(theme: Palette) {
    return StyleSheet.create({
    customInput: {
        borderWidth: 1,
        borderColor: theme.border,
        borderStyle: "solid",
        borderRadius: 10,
        paddingHorizontal: 10,
    }
})
}