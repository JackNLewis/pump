import { StyleSheet } from 'react-native';
import { colors } from 'common/styles/colors';
import { typography } from 'common/styles/typography';

export const styles = StyleSheet.create({
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
})