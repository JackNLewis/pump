import { StyleSheet } from 'react-native';
import { colors } from 'common/styles/colors';
import { spacing } from 'common/styles/spacing';
import { typography } from 'common/styles/typography';
import { sizing } from 'common/styles/sizes';

export const styles = StyleSheet.create({
    input: {
        height: sizing.height.input,
        borderWidth: sizing.borderWidth.thin,
        borderColor: colors.grey[300],
        borderRadius: sizing.borderRadius.md,
        paddingHorizontal: spacing.md,
        marginBottom: spacing.md,
        fontSize: typography.fontSize.md,
        backgroundColor: colors.white,
    },
});
