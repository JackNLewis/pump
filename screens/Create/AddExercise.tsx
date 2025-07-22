import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { X, Check, Menu, Sliders } from 'react-native-feather';
import NumberPicker from '../../components/NumberPicker';
import AddButton from '../../components/AddButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Set, Exercise as ExerciseType } from '../../data/types';


function AddExercise() {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();

    const [completedSets, setCompletedSets] = useState<Set[]>([]);

    const [nextSet, setNextSet] = useState<Set>({
        position: 0,
        weight: 0,
        reps: 0,
    });

    const [currentPosition, setCurrentPosition] = useState(0);
    const [isAddMode, setIsAddMode] = useState(true)

    const [isKg, setIsKg] = useState(true);
    const [increment, setIncrement] = useState(5);
    const [showOptions, setShowOptions] = useState(false);
    const [showIncrementDropdown, setShowIncrementDropdown] = useState(false);

    const incrementOptions = [1.25, 2.5, 5, 10, 20, 50];

    const handleWeightChangeOnCompleted = (newWeight: number) => {

        // Update the current set in the sets array
        setCompletedSets(prevSets => {
            const updatedSets = [...prevSets];
            updatedSets[currentPosition] = {
                ...updatedSets[currentPosition],
                weight: newWeight
            };
            return updatedSets;
        });
    };

    const handleWeightChangeOnNextSet = (newWeight: number) => {

        // Update next set state
        setNextSet(prev => {
            const updatedNextSet = {
                ...prev,
                weight: newWeight,
            }
            return updatedNextSet
        })
    };

    const handleRepsChangeOnCompleted = (newReps: number) => {

        // Update the current set in the sets array
        setCompletedSets(prevSets => {
            const updatedSets = [...prevSets];
            updatedSets[currentPosition] = {
                ...updatedSets[currentPosition],
                reps: newReps
            };
            return updatedSets;
        });
    };

    const handleRepsChangeOnNextSet = (newReps: number) => {

        // Update next set state
        setNextSet(prev => {
            const updatedNextSet = {
                ...prev,
                reps: newReps,
            }
            return updatedNextSet
        })
    };

    const addNewSet = () => {
        // Add next set to completed sets
        setCompletedSets(prevSets => [...prevSets, nextSet]);
        setNextSet(prev => {
            const updatedNextSet = {
                ...prev,
                position: prev.position + 1,
            }
            return updatedNextSet
        })
        setCurrentPosition(nextSet.position + 1);
    };

    const completeExercise = () => {
        const exercise: ExerciseType = {
            name: "Bench Press",
            sets: completedSets
        };
        
        // Call the callback if provided
        if (route.params?.onAddExercise) {
            route.params.onAddExercise(exercise);
        }
        
        navigation.goBack();
    };


    return (
        <View style={styles.container}>

            {/* ====================== Header and Options ====================== */}
            <View style={styles.header}>
                <Text style={styles.title}>CHEST PRESS</Text>
                <TouchableOpacity 
                    style={styles.optionsButton}
                    onPress={() => {
                        setShowOptions(!showOptions);
                        setShowIncrementDropdown(false);
                    }}
                >
                    <Sliders stroke="#4E4E4E" width={24} height={24} style={{ transform: [{ rotate: '90deg' }] }} />
                </TouchableOpacity>
            </View>

            {showOptions && (
                <TouchableWithoutFeedback onPress={() => {}}>
                    <View style={styles.optionsDropdown}>
                    <View style={styles.optionRow}>
                        <Text style={styles.optionLabel}>Increment:</Text>
                        <TouchableOpacity 
                            style={styles.incrementDropdown}
                            onPress={() => setShowIncrementDropdown(!showIncrementDropdown)}
                        >
                            <Text style={styles.incrementText}>{increment}{isKg? 'kg' : 'lb'}</Text>
                            <Text style={styles.incrementText}>▼</Text>
                        </TouchableOpacity>
                        
                        {showIncrementDropdown && (
                            <View style={styles.incrementDropdownList}>
                                <ScrollView showsVerticalScrollIndicator={true} bounces={false}>
                                    {incrementOptions.map((value) => (
                                            <Text 
                                            key={value}
                                            style={[
                                                styles.incrementOptionText,
                                                value === increment && styles.incrementOptionTextActive
                                            ]}
                                            selectable={false}
                                             onPress={() => {
                                                setIncrement(value);
                                                setShowIncrementDropdown(false);
                                            }}>
                                                {value}{isKg ? 'kg' : 'lb'}
                                            </Text>
                                    ))}
                                </ScrollView>
                            </View>
                        )}
                    </View>
                    
                    <View style={styles.optionRow}>
                        <Text style={styles.optionLabel}>Metric:</Text>
                        <View style={styles.metricToggle}>
                            <TouchableOpacity 
                                style={[styles.metricOption, !isKg && styles.metricOptionActive]}
                                onPress={() => setIsKg(false)}
                            >
                                <Text style={[styles.metricText, !isKg && styles.metricTextActive]}>lb</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.metricOption, isKg && styles.metricOptionActive]}
                                onPress={() => setIsKg(true)}
                            >
                                <Text style={[styles.metricText, isKg && styles.metricTextActive]}>kg</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                </TouchableWithoutFeedback>
            )}

            {showOptions && (
                <TouchableWithoutFeedback onPress={() => {
                    setShowOptions(false);
                    setShowIncrementDropdown(false);
                }}>
                    <View style={styles.overlay} />
                </TouchableWithoutFeedback>
            )}

            {/* ====================== Sets Container ====================== */}
            <View style={styles.setsContainer}>
                <View style={styles.leftSection}>
                    <Text style={styles.setsSubLabel}>Completed</Text>
                    <View style={styles.setsNumbers}>
                        {completedSets.map((set) => (
                            <TouchableOpacity
                                key={set.position}
                                style={[
                                    styles.setNumber,
                                    currentPosition === set.position && styles.setNumberActive
                                ]}
                                onPress={() => {
                                    setCurrentPosition(set.position);
                                    setIsAddMode(false);
                                }}
                            >
                                <Text
                                 style={[
                                    styles.setNumberText,
                                    currentPosition === set.position && styles.setNumberTextActive
                                ]}>
                                    {set.position + 1}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.rightSection}>
                    {isAddMode ?
                        <>
                            <Text style={styles.setsSubLabel}>Next Set</Text>
                            <TouchableOpacity
                                key={nextSet.position}
                                style={[styles.setNumber, styles.setNumberActive]}
                                
                            >
                                <Text style={[styles.setNumberText, styles.setNumberTextActive]}>
                                    {nextSet.position + 1}
                                </Text>
                            </TouchableOpacity>
                        </>
                        :
                        <AddButton 
                            onPress={() => {
                                    setCurrentPosition(nextSet.position);
                                    setIsAddMode(true);
                                }}
                            title="Add"
                        />
                    }
                </View>
            </View>

            {/* ====================== Number Pickers ====================== */}
            <View style={styles.pickersContainer}>
                <NumberPicker
                    label={isKg? 'Weight (kg)': 'Weight (lb)'}
                    onChange={isAddMode ? handleWeightChangeOnNextSet : handleWeightChangeOnCompleted}
                    value={isAddMode ? nextSet.weight : completedSets[currentPosition].weight}
                    increment={increment}
                />
                <NumberPicker
                    label="Reps"
                    onChange={isAddMode ? handleRepsChangeOnNextSet : handleRepsChangeOnCompleted}
                    value={isAddMode ? nextSet.reps : completedSets[currentPosition].reps}
                    increment={1}
                />
            </View>

            {/* ====================== Buttons ====================== */}
            {
                isAddMode &&
                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.addSetButton} onPress={() => addNewSet()}>
                        <Text style={styles.addSetButtonText} >ADD SET</Text>
                    </TouchableOpacity>

                    {!isAddMode &&
                        <TouchableOpacity>
                            <Text style={styles.removeText}>remove</Text>
                        </TouchableOpacity>

                    }
                </View>
            }
            <View style={styles.bottomActions}>
                <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.pop()}>
                    <X stroke="#FFFFFF" width={24} height={24} />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.bottomButton, styles.bottomButtonActive]}
                    onPress={completeExercise}
                >
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    optionsButton: {
        padding: 5,
    },
    optionsDropdown: {
        position: 'absolute',
        top: 50,
        right: 20,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
        zIndex: 1001,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
    },
    optionRow: {
        marginBottom: 12,
    },
    optionLabel: {
        fontSize: 14,
        color: '#4E4E4E',
        marginBottom: 8,
    },
    incrementDropdown: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#F5F5F5',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
    },
    incrementText: {
        fontSize: 14,
        color: '#4E4E4E',
    },
    incrementDropdownList: {
        position: 'absolute',
        top: 45,
        right: 0,
        left: 0,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        zIndex: 1002,
        maxHeight: 150,
    },
    incrementOption: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    incrementOptionText: {
        fontSize: 14,
        color: '#4E4E4E',
        textAlign: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    incrementOptionTextActive: {
        color: '#00CCA7',
        fontWeight: '600',
    },
    metricToggle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5F5F5',
        borderRadius: 20,
        padding: 2,
    },
    metricOption: {
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 18,
        minWidth: 40,
        alignItems: 'center',
    },
    metricOptionActive: {
        backgroundColor: '#00CCA7',
    },
    metricText: {
        fontSize: 14,
        color: '#4E4E4E',
    },
    metricTextActive: {
        color: 'white',
    },
    setsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    setsLabel: {
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#4E4E4E',
        marginBottom: 15,
    },
    leftSection: {
        flex: 1,
        alignItems: 'flex-start',
    },
    rightSection: {
        flex: 1,
        alignItems: 'flex-end',
    },
    setsSubLabel: {
        fontSize: 12,
        color: '#4E4E4E',
        marginBottom: 10,
    },
    setsNumbers: {
        flexDirection: 'row',
        marginRight: 'auto',
    },
    setNumber: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#F0F0F0',
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
