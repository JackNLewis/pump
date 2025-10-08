import { StyleSheet } from 'react-native';
import { spacing } from 'common/styles/spacing';
import { colors } from 'common/styles/colors';
import { typography } from 'common/styles/typography';

export const styles = StyleSheet.create({
    uploadSection: {
        alignItems: 'center',
        marginBottom: spacing.xxl,
    },
    uploadButton: {
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey[300],
        padding: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        marginBottom: spacing.lg,
    },
    uploadButtonText: {
        fontSize: typography.fontSize.md,
        color: colors.grey[800],
        fontWeight: typography.fontWeight.medium,
    },
    cameraButton: {
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey[300],
        padding: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    cameraButtonText: {
        fontSize: typography.fontSize.md,
        color: colors.grey[800],
        fontWeight: typography.fontWeight.medium,
    },
})