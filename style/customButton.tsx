import { StyleSheet, ViewStyle } from "react-native";

const base: ViewStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    flex: 1, 
}

export const customButton = StyleSheet.create({
    full: {
        backgroundColor: '#495e57',
        cursor: 'pointer',
        ...base
    },
    full_disabled: {
        backgroundColor: '#495e57',
        opacity: 0.5,
        cursor: 'auto',
        ...base
    },
    outline: {
        borderWidth: 1,
        borderBlockColor: '#495e57',
        cursor: 'pointer',
        ...base
    },
    outline_disabled: {
        borderWidth: 1,
        borderBlockColor: '#495e57',
        cursor: 'auto',
        opacity: 0.5,
        ...base
    },
    labelFull: {
        color: '#fff',
        fontFamily: 'Inter_400Regular'
    },
    labelOutline: {
        color: '#495e57',
        fontFamily: 'Inter_400Regular'
    }
});