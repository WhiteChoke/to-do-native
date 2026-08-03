import { StyleSheet } from "react-native";
import { Palette } from "../../theme/palette";

export default function customButtonStyle(theme: Palette) {
    return StyleSheet.create({
      customButton: {
        backgroundColor: theme.customButton,
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: 10,
      },
      customBottonText: {
        color: theme.customButtonText
      }
    });
}
