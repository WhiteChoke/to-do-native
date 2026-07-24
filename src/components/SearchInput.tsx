import { Image, StyleSheet, TextInput, View } from "react-native";

interface SearchInputProps {
    placeholder: string,
    filter: (v: string) => void,
}

function SearchInput(props: Readonly<SearchInputProps>) {
    return ( 
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder={props.placeholder}
                onChangeText={(text: string) => props.filter(text)}
                style={styles.searchInput}
            />
            <Image source={require("../../assets/search.png")}
                    style={{ width: 15, height: 15 }} />
        </View>
     );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#D9D9D9",
        borderStyle: "solid",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    searchInput: {
        flex: 1
    }
})


export default SearchInput;