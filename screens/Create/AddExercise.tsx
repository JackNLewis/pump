import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { X, Check } from 'react-native-feather';
import NumberPicker from '../../components/NumberPicker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

function AddExercise() {
    const navigation = useNavigation<any>();

    const insets = useSafeAreaInsets();
    const [reps, setReps] = useState(10);
    const [weight, setWeight] = useState(85);
    const [currentSet, setCurrentSet] = useState(3);
    const [isKg, setIsKg] = useState(true);
    const [increment, setIncrement] = useState(5);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CHEST PRESS</Text>

            <View style={styles.setsContainer}>
                <Text style={styles.setsLabel}>Sets:</Text>
                <View style={styles.setsNumbers}>
                    {[1, 2, 3].map((setNum) => (
                        <TouchableOpacity
                            key={setNum}
                            style={[
                                styles.setNumber,
                                currentSet === setNum && styles.setNumberActive
                            ]}
                            onPress={() => setCurrentSet(setNum)}
                        >
                            <Text style={[
                                styles.setNumberText,
                                currentSet === setNum && styles.setNumberTextActive
                            ]}>
                                {setNum}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.unitToggle}>
                    <Text style={styles.unitLabel}>lb</Text>
                    <TouchableOpacity
                        style={styles.toggleButton}
                        onPress={() => setIsKg(!isKg)}
                    >
                        <View style={[styles.toggleIndicator, isKg && styles.toggleIndicatorActive]} />
                    </TouchableOpacity>
                    <Text style={styles.unitLabel}>kg</Text>
                </View>
            </View>

            <View style={styles.incrementContainer}>
                <Text style={styles.incrementLabel}>Increment:</Text>
                <TouchableOpacity style={styles.incrementDropdown}>
                    <Text style={styles.incrementText}>{increment}kg ▼</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.pickersContainer}>
                <NumberPicker
                    label="Weight"
                    value={weight}
                    onChange={setWeight}
                    currentValue={85}
                    increment={5}
                />
                <NumberPicker
                    label="Reps"
                    value={reps}
                    onChange={setReps}
                    currentValue={10}
                    increment={1}
                />
            </View>

            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.addSetButton}>
                    <Text style={styles.addSetButtonText}>ADD SET</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.removeText}>remove</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomActions}>
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.pop()}>
                    <X stroke="#FFFFFF" width={24} height={24} />
                </TouchableOpacity>

                <TouchableOpacity style={[styles.bottomButton, styles.bottomButtonActive]}>
                    <Check stroke="#FFFFFF" width={24} height={24} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    setsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    setsLabel: {
        fontSize: 16,
        color: '#4E4E4E',
        marginRight: 15,
    },
    setsNumbers: {
        flexDirection: 'row',
        marginRight: 'auto',
    },
    setNumber: {
        width: 32,
        height: 32,
        borderRadius: 16,
        // backgroundCoslor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    setNumberActive: {
        backgroundColor: '#00D4AA',
    },
    setNumberText: {
        fontSize: 16,
        color: '#4E4E4E',
        fontWeight: '500',
    },
    setNumberTextActive: {
        color: 'white',
    },
    unitToggle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    unitLabel: {
        fontSize: 14,
        color: '#4E4E4E',
        marginHorizontal: 8,
    },
    toggleButton: {
        width: 40,
        height: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 10,
        padding: 2,
    },
    toggleIndicator: {
        width: 24,
        height: 24,
        top: -6,
        borderRadius: 16,
        backgroundColor: '#00D4AA',
        transform: [{ translateX: 0 }],
    },
    toggleIndicatorActive: {
        transform: [{ translateX: 20 }],
    },
    incrementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },
    incrementLabel: {
        fontSize: 16,
        color: '#4E4E4E',
        marginRight: 15,
    },
    incrementDropdown: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        // backgroundColor: '#F0F0F0',
        borderRadius: 6,
    },
    incrementText: {
        fontSize: 14,
        color: '#4E4E4E',
    },
    pickersContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        marginBottom: 40,
    },
    actionContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    addSetButton: {
        backgroundColor: '#00D4AA',
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 25,
        marginBottom: 10,
    },
    addSetButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    removeText: {
        color: '#999',
        fontSize: 14,
    },
    bottomActions: {
        position: 'absolute',
        bottom: 40,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: '#999',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomButtonActive: {
        backgroundColor: '#00D4AA',
    },
});

export default AddExercise;