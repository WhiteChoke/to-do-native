export type colorScheme = "light" | "dark"

export interface Palette {
    background: string,
    border: string,
    text: string,
    modalTouchZone: string,
    customButton: string,
    checkboxBorder: string,
    customButtonText: string,
    placeholderTextColor: string,
};

export const lightPalette: Palette = {
    background: "#FFFDF7",
    border: "#D9D9D9",
    text: "#000000",
    modalTouchZone: "#00000080",
    customButton: "#2C2C2C",
    checkboxBorder: "#2C2C2C",
    customButtonText: "#fff",
    placeholderTextColor: "#000",
}

export const darkPallete: Palette = {
    background: "#121212",
    border: "#2C2C2C",
    text: "#FFFFFF",
    modalTouchZone: "#000000A6",
    customButton: "#E5E5E5",
    checkboxBorder: "#E5E5E5",
    customButtonText: "#000",
    placeholderTextColor: "#fff",
}