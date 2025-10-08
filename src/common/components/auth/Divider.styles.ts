import { StyleSheet } from 'react-native';
import { colors } from 'common/styles/colors';
import { spacing } from 'common/styles/spacing';
import { typography } from 'common/styles/typography';

export const styles = StyleSheet.create({
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.grey[300],
    },
    dividerText: {
        marginHorizontal: spacing.md,
        color: colors.grey[600],
        fontSize: typography.fontSize.sm,
    },
});