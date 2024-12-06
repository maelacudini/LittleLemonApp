import { PressableProps } from "react-native";

export interface CustomCheckboxPropsType extends PressableProps {
    label: string,
    checked: boolean
}