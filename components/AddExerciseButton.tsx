import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type AddExerciseButtonProps = {
    title: string,
    onPress?: () => void;
};

function AddExerciseButton({ title, onPress }: AddExerciseButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00CCA7',
        paddingHorizontal: 24,
        paddingVertical: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});

export default AddExerciseButton;