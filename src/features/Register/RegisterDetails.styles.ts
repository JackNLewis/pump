import { StyleSheet } from 'react-native'
import { colors } from 'common/styles/colors' 
import { spacing } from 'common/styles/spacing' 
import { typography } from 'common/styles/typography' 

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: typography.fontWeight.bold,
        color: colors.primary[500],
        textAlign: 'center',
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: typography.fontSize.md,
        color: colors.grey[600],
        textAlign: 'center',
        marginBottom: spacing.xxl,
    },
    continueButton: {
        backgroundColor: colors.primary[500],
        borderRadius: 8,
        padding: spacing.md,
        alignItems: 'center',
        marginTop: spacing.lg,
        marginBottom: spacing.lg,
    },
    continueButtonText: {
        color: colors.white,
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.bold,
    },
});
