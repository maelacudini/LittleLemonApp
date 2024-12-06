import { StyleSheet, TextStyle } from "react-native";

const base: TextStyle = {
    paddingHorizontal: 32,
    paddingVertical: 16, 
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 0,
    width: '100%',
    fontFamily: 'Inter_400Regular',
}

export const customTextInput = StyleSheet.create({
    container: {
        display: 'flex', 
        justifyContent: 'center', 
        position: 'relative', 
        width: '100%',
    },
    dark: {
        ...base,
        borderColor: '#495e57',
        outlineColor: '#495e57',
    },
    light: {
        ...base,
        borderColor: '#fff',
        outlineColor: '#fff',
        backgroundColor: '#fff',
    },
});