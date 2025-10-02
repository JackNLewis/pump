import { StyleSheet } from 'react-native';
import { colors } from 'common/styles/colors';
import { spacing } from 'common/styles/spacing';
import { typography } from 'common/styles/typography';
import { sizing } from 'common/styles/sizes';

export const styles = StyleSheet.create({
    loginButton: {
        height: sizing.height.buttonLg,
        backgroundColor: colors.primary[500],
        borderRadius: sizing.borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonText: {
        color: colors.white,
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.bold,
    },
    loginButtonDisabled: {
        backgroundColor: colors.primary[200],
    },
})