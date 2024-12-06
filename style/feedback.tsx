import { StyleSheet, ViewStyle } from "react-native";

const base: ViewStyle = {
    padding: 16,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    maxWidth: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

export const feedbackStyles = StyleSheet.create({
    main: {
        flex: 1,
        position: 'absolute',
        left: 16,
        right: 16,
        bottom: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
    },
    container_informational: {
        ...base,
        borderColor: '#000',
    },
    container_error: {
        ...base,
        borderColor: '#F73032',
        backgroundColor: '#F7303225'
    },
    container_success: {
        ...base,
        borderColor: '#188351',
        backgroundColor: '#18835125'
    },
    informational: {
        color: '#000',
        fontFamily: 'Inter_400Regular'
    },
    error: {
        color: '#F73032',
        fontFamily: 'Inter_400Regular'
    },
    success: {
        color: '#188351',
        fontFamily: 'Inter_400Regular'
    }
});