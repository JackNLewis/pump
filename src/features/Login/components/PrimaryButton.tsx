import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";
import { styles } from "./PrimaryButton.styles";

interface PrimaryButtonProps {
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
    title: string;
    loadingText?: string;
    style?: StyleProp<ViewStyle>;
}

function PrimaryButton({
    onPress,
    loading = false,
    disabled = false,
    title,
    loadingText = 'Loading...',
    style
}: PrimaryButtonProps) {

    const isDisabled = loading || disabled;

    return (
        <TouchableOpacity
            style={[styles.loginButton, isDisabled && styles.loginButtonDisabled, style]}
            onPress={onPress}
            disabled={isDisabled}
        >
            <Text style={styles.loginButtonText}>
                {loading ? loadingText : title}
            </Text>
        </TouchableOpacity>
    );
}

export default PrimaryButton
