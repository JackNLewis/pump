import { StyleSheet } from 'react-native';
import { colors } from 'common/styles/colors';
import { spacing } from 'common/styles/spacing';
import { typography } from 'common/styles/typography';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
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
    input: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: spacing.md,
        marginBottom: spacing.md,
        fontSize: typography.fontSize.md,
        borderWidth: 1,
        borderColor: colors.grey[300],
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupText: {
        color: colors.grey[600],
        fontSize: typography.fontSize.sm,
    },
    signupLink: {
        color: colors.primary[500],
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
    }
});