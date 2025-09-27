import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

interface ChartDataItem {
  value: number;
  label: string;
}

interface ProgressChartProps {
  data: ChartDataItem[];
  maxValue?: number;
}

function ProgressChart({ data, maxValue = 120 }: ProgressChartProps) {
  return (
    <View style={styles.container}>
      <BarChart
        data={data}
        width={300}
        height={200}
        barWidth={30}
        spacing={16}
        roundedTop
        roundedBottom
        hideRules
        yAxisThickness={0}
        xAxisThickness={0}
        barBorderRadius={4}
        frontColor={'#00CCA7'}
        maxValue={maxValue}
        noOfSections={6}
        labelWidth={40}
        xAxisLabelTextStyle={styles.xAxisLabel}
        hideYAxisText
        disableScroll={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  xAxisLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default ProgressChart;