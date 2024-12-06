import { ReactNode } from "react"
import { TextInputProps } from "react-native"

export interface CustomTextInputPropTypes extends TextInputProps {
    icon?: ReactNode
    variant?: 'dark' | 'light'
}