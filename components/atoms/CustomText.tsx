import { CustomTextPropTypes } from "@/types/customText";
import { Dimensions, StyleSheet, Text } from "react-native";

export default function CustomText(props: CustomTextPropTypes) {
  const { size = 'm', children, style, ...rest } = props;
  const { width } = Dimensions.get('window');
  let fontSize;
  let fontFamily;

  switch (size) {
    case 'xxl':
      fontSize = Math.min(Math.max(32, 8 * (width / 100)), 64);
      fontFamily= 'Inter_700Bold'
      break;
    case 'xl':
      fontSize = Math.min(Math.max(28, 6 * (width / 100)), 48);
      fontFamily= 'Inter_700Bold'
      break;
    case 'l':
      fontSize = Math.min(Math.max(24, 5 * (width / 100)), 40);
      fontFamily= 'Inter_700Bold'
      break;
    case 'm':
      fontSize = Math.min(Math.max(20, 4 * (width / 100)), 32);
      fontFamily= 'Inter_400Regular'
      break;
    case 's':
      fontSize = Math.min(Math.max(16, 3 * (width / 100)), 24);
      fontFamily= 'Inter_400Regular'
      break;
    case 'xs':
      fontSize = Math.min(Math.max(12, 2 * (width / 100)), 16);
      fontFamily= 'Inter_400Regular'
      break;
  }
  return (
    <Text {...rest} allowFontScaling={true} style={StyleSheet.flatten([ { fontSize, fontFamily }, style, ])}>
      {children}
    </Text>
  );
}
