import AsyncStorage from "@react-native-async-storage/async-storage";
import { colorScheme } from "../../theme/palette";

export async function getTheme(): Promise<colorScheme> {
    const theme = await AsyncStorage.getItem("theme");

    if (!theme) {
        return await changeTheme("light");
    }

    return theme as colorScheme;
}

export async function changeTheme(scheme: colorScheme): Promise<colorScheme> {
    await AsyncStorage.setItem("theme", scheme)

    return scheme;
}