import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'react-native-feather';

const ActivitySection = () => {
  const months = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  
  const generateActivityData = (monthIndex: number) => {
    const days = [];
    const daysInMonth = 30;
    
    for (let i = 0; i < daysInMonth; i++) {
      const hasWorkout = false;
      days.push(hasWorkout);
    }
    return days;
  };

  const renderActivityDots = (monthIndex: number) => {
    const activityData = generateActivityData(monthIndex);
    const rows = [];
    let datsInMonth = 30;
    
    for (let row = 0; row < 7; row++) {
      const dots = [];
      for (let col = 0; col < 5; col++) {
        const dayIndex = col * 7 + row;
        if (dayIndex > datsInMonth){
            break;
        }
        const hasWorkout = activityData[dayIndex] || false;
        
        dots.push(
          <View
            key={`${row}-${col}`}
            style={[
              styles.activityDot,
              hasWorkout ? styles.activeDot : styles.inactiveDot
            ]}
          />
        );
      }
      
      rows.push(
        <View key={row} style={styles.dotRow}>
          {dots}
        </View>
      );
    }
    
    return rows;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Activity</Text>
        <TouchableOpacity style={styles.chevronContainer}>
          <ChevronRight stroke="#666" width={20} height={20} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.activityGrid}>
        {months.map((month, index) => (
          <View key={month} style={styles.monthColumn}>
            <Text style={styles.monthLabel}>{month}</Text>
            <View style={styles.monthActivity}>
              {renderActivityDots(index)}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  chevronContainer: {
    padding: 4,
  },
  activityGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  monthLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
    fontWeight: '500',
  },
  monthActivity: {
    alignItems: 'flex-start',
  },
  dotRow: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  activityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 1,
  },
  activeDot: {
    backgroundColor: '#00D4AA',
  },
  inactiveDot: {
    backgroundColor: '#E0E0E0',
  },
});

export default ActivitySection;