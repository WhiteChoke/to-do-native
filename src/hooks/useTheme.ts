import { useThemeContext } from "../context/themeContext/themeContext";
import { Palette } from "../theme/palette";

export default function useTheme(style: (v: Palette) => any) {
    const themeContext = useThemeContext();
    return style(themeContext.pallate);
}