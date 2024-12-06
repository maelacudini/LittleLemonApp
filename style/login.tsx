import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 16,
        backgroundColor: '#cbd2d9'
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 300,
        width: '100%',
    },
    formButtons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        gap: 8,
        width: '100%',
        position: 'relative',
    }
});