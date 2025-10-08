import { StyleSheet } from 'react-native';
import { colors } from 'common/styles/colors';
import { typography } from 'common/styles/typography';

export const styles = StyleSheet.create({
    goBackText: {
        color: colors.primary[500],
        fontSize: typography.fontSize.md,
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
})