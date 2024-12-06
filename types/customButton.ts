import { ButtonProps, GestureResponderEvent } from "react-native";

export interface CustomButtonPropTypes extends ButtonProps{
    variant?: 'full' | 'full_disabled' | 'outline' | 'outline_disabled'
}