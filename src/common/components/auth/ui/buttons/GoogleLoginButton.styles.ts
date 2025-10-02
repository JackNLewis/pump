import { StyleSheet } from 'react-native';
import { colors } from 'common/styles/colors';
import { spacing } from 'common/styles/spacing';
import { typography } from 'common/styles/typography';
import { sizing } from 'common/styles/sizes';

export const styles = StyleSheet.create({
    googleButton: {
        height: sizing.height.buttonLg,
        backgroundColor: colors.white,
        borderRadius: sizing.borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: sizing.borderWidth.thin,
        borderColor: colors.grey[300],
    },
    googleButtonText: {
        color: colors.grey[800],
        fontSize: typography.fontSize.md,
        fontWeight: typography.fontWeight.medium,
    },
})