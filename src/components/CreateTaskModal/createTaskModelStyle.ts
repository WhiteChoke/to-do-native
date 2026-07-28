import { StyleSheet } from "react-native";
import { Palette } from "../../theme/palette";

export default function createTaskModalStyle(theme: Palette) {
    return StyleSheet.create({
          touchableContainer: {
            flex: 1,
            backgroundColor: theme.modalTouchZone,
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            paddingHorizontal: 60,
            flexDirection: "column"
          },
          mainContainer: {
            backgroundColor: theme.background,
            alignItems: "stretch",
            width: "100%",
            borderRadius: 15,
            padding: 10,
            gap: 15
          },
          dateContainer: {
            flexDirection: "row",
          },
        });
}  
