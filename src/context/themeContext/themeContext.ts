import { createContext, useContext } from "react";
import { colorScheme, Palette } from "../../theme/palette";

export interface ThemeContextType {
    theme: colorScheme,
    changeTheme: () => void,
    pallate: Palette,
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function useThemeContext() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useThemeContext most be use with themeContext");
    }

    return context;
}