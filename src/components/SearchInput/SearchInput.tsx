import { Image, StyleSheet, TextInput, View } from "react-native";
import searchInputStyle from "./searchInputStyle";
import { useThemeContext } from "../../context/themeContext/themeContext";

interface SearchInputProps {
    placeholder: string,
    filter: (v: string) => void,
}

function SearchInput(props: Readonly<SearchInputProps>) {
    const theme = useThemeContext();
    const styles = searchInputStyle(theme.pallate); 

    return ( 
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder={props.placeholder}
                onChangeText={(text: string) => props.filter(text)}
                style={styles.searchInput}
            />
            <Image source={require("../../../assets/search.png")}
                    style={{ width: 15, height: 15 }} />
        </View>
     );
}

export default SearchInput;