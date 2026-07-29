import { StyleSheet } from "react-native";
import { Palette } from "../../theme/palette";

export default function mainPageStyle(theme: Palette) {
    return StyleSheet.create({
        mainContainer: {
            flex: 1,
            backgroundColor: theme.background,
            justifyContent: "space-between"
        },
        taskContainer: {
            flex: 1,
            alignItems: "center",
            width: "100%",
            paddingHorizontal: 60,
        },
        createTask: {
            flexDirection: "row",
            marginVertical: 25,
            gap: 10,
        },
        taskDataContainer: {
            flexDirection: "row",
            justifyContent: 'space-between',
            width: "100%",
            marginVertical: 16
        },
        taskList: {
            flex: 1,
            width: "100%",
        },
        bottomButtons: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "auto",
            alignItems: "center",
            marginHorizontal: 30,
            marginBottom: 10
        }
    });
}