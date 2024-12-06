import { StyleSheet } from "react-native";

export const heroStyle = StyleSheet.create({
    main: {
        backgroundColor: '#495e57',
        padding: 16,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 24,
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
    },
    description: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        overflow: 'hidden',
        flexBasis: '35%'
    }
});