import { Image, ImageSourcePropType, ImageStyle, StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from "react-native";

interface ImageButtonProps {
  imagePath: ImageSourcePropType;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>
}

function ImageButton(props: Readonly<ImageButtonProps>) {
    return (
    <TouchableOpacity style={[styles.customButton, props.style]} onPress={props.onPress}>
      <Image style={props.imageStyle} resizeMode="contain" source={props.imagePath}/>
    </TouchableOpacity> 
  );
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "transparent",
  },
});




export default ImageButton;