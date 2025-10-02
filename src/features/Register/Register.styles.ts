import { StyleSheet } from 'react-native'
import { colors } from 'common/styles/colors' 
import { spacing } from 'common/styles/spacing' 
import { typography } from 'common/styles/typography' 

const styles = StyleSheet.create({
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
    input: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: spacing.md,
        marginBottom: spacing.md,
        fontSize: typography.fontSize.md,
        borderWidth: 1,
        borderColor: colors.grey[300],
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
    error: {
        color: 'red',
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        textAlign: 'center',
    },
    goBackText: {
        color: colors.primary[500],
        fontSize: typography.fontSize.md,
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
});