import { Image, View } from "react-native";
import searchInputStyle from "./searchInputStyle";
import useTheme from "../../hooks/useTheme";
import { useThemeContext } from "../../context/themeContext/themeContext";
import CustomInput from "../CustomInput/CustomInput";

interface SearchInputProps {
    placeholder: string,
    filter: (v: string) => void,
}

function SearchInput(props: Readonly<SearchInputProps>) {
    const styles = useTheme(searchInputStyle);
    const { theme } = useThemeContext();

    return (
        <View style={styles.inputContainer}>
            <CustomInput
                placeholder={props.placeholder}
                setValue={(text: string) => props.filter(text)}
                style={styles.searchInput}
            />
            <Image source={theme === "light"
                ? require("../../../assets/search-dark.png")
                : require("../../../assets/search-light.png")
            }
                style={{ width: 15, height: 15 }} />
        </View>
    );
}

export default SearchInput;