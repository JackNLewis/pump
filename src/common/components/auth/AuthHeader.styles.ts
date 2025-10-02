import { StyleSheet } from 'react-native';
import { colors } from 'common/styles/colors';
import { spacing } from 'common/styles/spacing';
import { typography } from 'common/styles/typography';

export const styles = StyleSheet.create({
   title: {
        fontSize: 48,
        fontWeight: typography.fontWeight.bold,
        color: colors.primary[500],
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: typography.fontSize.md,
        color: colors.grey[600],
        textAlign: 'center',
        marginBottom: spacing.xxl,
    },
})