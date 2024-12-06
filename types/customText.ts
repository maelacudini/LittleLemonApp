import { ReactNode } from "react";
import { TextProps } from "react-native";

export interface CustomTextPropTypes extends TextProps {
    size?: 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs'
    children: ReactNode,
};