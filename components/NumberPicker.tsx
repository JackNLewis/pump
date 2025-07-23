import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as Haptics from 'expo-haptics';

type NumberPickerProps = {
    label: string;
    value: number;
    increment: number;
    onChange: (value: number) => void;
};

const ItemHeight = 60;
const PickerBufferSize = 20;

function NumberPicker({ label, value, increment, onChange }: NumberPickerProps) {

    let startValue = Math.max(value - increment * PickerBufferSize, 0)
    let endValue = value + increment * PickerBufferSize

    // number of elements rendered in scroller, rerenders on scroll end
    let pickerLength = (endValue - startValue) / increment

    const numbers = Array.from({ length: pickerLength }, (_, i) => startValue + i * increment);

    const [centerIndex, setCenterIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useLayoutEffect(() => {
        // Find the index of the current value in the numbers array
        const valueIndex = numbers.findIndex(num => num === value);
        if (valueIndex !== -1) {
            setCenterIndex(valueIndex);
            // Scroll to the correct position
            const scrollPosition = valueIndex * ItemHeight;
            scrollViewRef.current?.scrollTo({ y: scrollPosition, animated: false });
            
        }
    }, [value]);

    // Trigger haptic feedback when centerIndex changes (but not on initial load)
    useEffect(() => {
        if (isInitialized) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        setIsInitialized(true);
    }, [centerIndex]);

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / ItemHeight);
        setCenterIndex(index);
    };

    return (
        <View style={styles.pickerContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.scrollContainer}>
                <ScrollView
                    ref={scrollViewRef}
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={ItemHeight}
                    decelerationRate="fast"
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    onMomentumScrollEnd={(event) => {
                        const index = Math.round(event.nativeEvent.contentOffset.y / ItemHeight);
                        const selectedValue = numbers[index] || 1;
                        onChange(selectedValue);
                    }}
                >
                    {numbers.map((num, index) => (
                        <View key={num} style={styles.numberItem}>
                            <Text style={[
                                styles.numberText,
                                centerIndex === index && styles.selectedNumber
                            ]}>
                                {num}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        color: '#4E4E4E',
        marginBottom: 20,
    },
    scrollContainer: {
        height: 180,
        width: 120,
        overflow: 'hidden',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingVertical: 60,
    },
    numberItem: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberText: {
        fontSize: 52,
        color: '#CCCCCC',
        fontWeight: '300',
    },
    selectedNumber: {
        color: '#4E4E4E',
    },
});

export default NumberPicker;