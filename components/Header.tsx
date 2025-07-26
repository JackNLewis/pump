import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from '../styles/colors';
import { spacing } from '../styles/spacing';
import { typography } from '../styles/typography';

interface HeaderProps {
    title: string;
    leftIcons?: React.ReactNode;
    rightIcons?: React.ReactNode;
    style?: ViewStyle;
    titleStyle?: TextStyle;
}

function Header({ title, leftIcons, rightIcons, style, titleStyle }: HeaderProps) {
    return (
        <View style={[styles.header, style]}>
            {leftIcons &&
                <View style={styles.leftSection}>
                    {leftIcons}
                </View>
            }

            <Text style={[styles.title, titleStyle, (leftIcons ? styles.alignRight: {})]}>{title}</Text>

            {rightIcons &&
                <View style={styles.rightSection}>
                    {rightIcons}
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.lg,
        paddingHorizontal: spacing.lg
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: typography.fontSize.xxl,
        fontWeight: typography.fontWeight.semibold,
        color: colors.grey[800],
        flex: 1,
    },
    alignRight: {
        textAlign: 'right',
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});

export default Header;