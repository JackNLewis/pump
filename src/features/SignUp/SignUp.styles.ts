import { StyleSheet } from "react-native";
import { colors } from 'common/styles/colors';
import { spacing } from 'common/styles/spacing';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
});