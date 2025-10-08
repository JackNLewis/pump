import { StyleSheet } from "react-native";
import { spacing } from "common/styles/spacing";
import { colors } from "common/styles/colors";
import { typography } from "common/styles/typography";

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
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
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
    imageSection: {
        alignItems: 'center',
        marginBottom: spacing.xxl,
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        marginBottom: spacing.md,
        borderWidth: 2,
        borderColor: colors.grey[200],
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    retakeText: {
        color: colors.grey[600],
        fontSize: typography.fontSize.md,
        textDecorationLine: 'underline',
    },
    createButton: {
        backgroundColor: colors.primary[500],
        borderRadius: 8,
        padding: spacing.md,
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    createButtonText: {
        color: colors.white,
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.bold,
    },
    createButtonDisabled: {
        backgroundColor: colors.grey[400],
    },
    goBackText: {
        color: colors.primary[500],
        fontSize: typography.fontSize.md,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    error: {
        color: 'red',
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        textAlign: 'center',
    },
});
