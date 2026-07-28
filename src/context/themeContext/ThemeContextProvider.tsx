import { useEffect, useMemo, useState } from "react";
import { colorScheme, darkPallete, lightPalette, Palette } from "../../theme/palette";
import { getTheme } from "../../db/repository/ThemeRepository";
import { ThemeContext, ThemeContextType } from "./themeContext";

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [currentTheme, setCurrentTheme] = useState<colorScheme>("light");
    const [pallate, setPallate] = useState<Palette>(lightPalette);

    useEffect(() => {
        getTheme()
            .then((res) => setCurrentTheme(res))
            .catch(() => console.log("failed to load theme"))
    }, []);


    const contextValue = useMemo<ThemeContextType>(() => ({
        currentTheme, 
        setCurrentTheme, 
        pallate
    }), [currentTheme, pallate])

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;