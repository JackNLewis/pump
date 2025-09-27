import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface FilterButtonProps {
  title: string;
  isActive?: boolean;
  onPress?: () => void;
}

function FilterButton({ title, isActive = false, onPress }: FilterButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.activeButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'transparent',
    marginRight: 8,
  },
  activeButton: {
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeText: {
    color: '#666',
  },
});

export default FilterButton;