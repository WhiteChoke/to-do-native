import { useCallback, useEffect, useMemo, useState } from "react";
import { colorScheme, darkPallete, lightPalette } from "../../theme/palette";
import { getTheme, setTheme } from "../../db/repository/ThemeRepository";
import { ThemeContext, ThemeContextType } from "./themeContext";

const pallates = {
    "light": lightPalette,
    "dark": darkPallete
}

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [currentTheme, setCurrentTheme] = useState<colorScheme>("light");

    useEffect(() => {
        getTheme()
            .then((res) => setCurrentTheme(res))
            .catch(() => console.log("failed to load theme"))
    }, []);

    const changeTheme = useCallback(async () => {
        const theme = currentTheme === "light"
            ? "dark"
            : "light" 
        setCurrentTheme(theme);

        await setTheme(theme);
    }, [currentTheme]);

    const currentPallete = pallates[currentTheme];

    const contextValue = useMemo<ThemeContextType>(() => ({
        theme: currentTheme,
        changeTheme: changeTheme,
        pallate: currentPallete
    }), [currentTheme, changeTheme, currentPallete])

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;