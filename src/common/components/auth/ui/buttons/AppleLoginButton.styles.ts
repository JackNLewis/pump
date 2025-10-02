import { StyleSheet } from 'react-native';
import { colors } from 'common/styles/colors';
import { spacing } from 'common/styles/spacing';
import { typography } from 'common/styles/typography';
import { sizing } from 'common/styles/sizes';

export const styles =  StyleSheet.create({
    appleButton: {
        height: sizing.height.buttonLg,
        backgroundColor: colors.black,
        borderRadius: sizing.borderRadius.md,
        padding: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    appleButtonText: {
        color: colors.white,
        fontSize: typography.fontSize.md,
        fontWeight: typography.fontWeight.medium,
    },
})