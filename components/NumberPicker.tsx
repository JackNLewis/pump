import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

type NumberPickerProps = {
    label: string;
    value: number;
    onChange: (value: number) => void;
    currentValue: number;
    increment: number;
};

const PickerBufferSize = 20;

function NumberPicker({ label, onChange, currentValue, increment }: NumberPickerProps) {

    let startValue = Math.max(currentValue - increment * PickerBufferSize, 0)
    let endValue = currentValue + increment * PickerBufferSize
    let pickerLength = (endValue - startValue) / increment

    const numbers = Array.from({ length: pickerLength }, (_, i) => startValue + i * increment);

    const itemHeight = 60;
    const [centerIndex, setCenterIndex] = useState(0);

    const handleScroll = (event: any) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const index = Math.round(offsetY / itemHeight);
        setCenterIndex(index);
    };

    return (
        <View style={styles.pickerContainer}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.scrollContainer}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={itemHeight}
                    decelerationRate="fast"
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    onMomentumScrollEnd={(event) => {
                        const index = Math.round(event.nativeEvent.contentOffset.y / itemHeight);
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
        width: 80,
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