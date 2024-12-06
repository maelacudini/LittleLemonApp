import { customButton } from "@/style/customButton";
import { CustomButtonPropTypes } from "@/types/customButton";
import { Pressable, Text } from "react-native";

export default function CustomButton(props: CustomButtonPropTypes) {
  const {title, onPress, disabled, variant = 'full', ...rest} = props;

  const customStyle = disabled ? (variant === 'full' ? 'full_disabled' : 'outline_disabled') : variant

  return (
    <Pressable {...rest} style={customButton[customStyle]} onPress={onPress} disabled={disabled}>
      <Text style={customButton[variant === 'full' ? 'labelFull' : 'labelOutline']}>{title}</Text>
    </Pressable>
  )
}
