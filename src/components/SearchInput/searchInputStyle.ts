import { StyleSheet } from "react-native";
import { Palette } from "../../theme/palette";

export default function searchInputStyle(theme: Palette) {
    return StyleSheet.create({
        inputContainer: {
            flexDirection: "row",
            borderWidth: 1,
            borderColor: theme.border,
            borderStyle: "solid",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10
        },
        searchInput: {
            flex: 1,
            borderWidth: 0
        }
    })
}