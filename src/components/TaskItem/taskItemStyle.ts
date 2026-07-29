import { StyleSheet } from "react-native";
import { Palette } from "../../theme/palette";

export default function taskItemStyle(theme: Palette) {
    return StyleSheet.create({
        taskContainer: {
            flex: 1,
            flexDirection: "row",
            gap: 10,
            height: "15%",
            justifyContent: "center",
            alignItems: "center",
            borderColor: theme.border,
            borderWidth: 1,
            borderStyle: "solid",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 15,
            marginVertical: 8,
        },
        taskState: {
            borderRadius: 5,
            height: 25,
            width: 25
        },
        title: {
            color: theme.text,
            fontSize: 24,
            flexShrink: 1
        },
        deleteImage: {
            height: 25,
            width: 25,
        },
        deleteButton: {
            marginLeft: "auto",
        }
    });
}