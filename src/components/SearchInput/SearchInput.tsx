import { Image, TextInput, View } from "react-native";
import searchInputStyle from "./searchInputStyle";
import useTheme from "../../hooks/useTheme";

interface SearchInputProps {
    placeholder: string,
    filter: (v: string) => void,
}

function SearchInput(props: Readonly<SearchInputProps>) {
    const styles = useTheme(searchInputStyle); 

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