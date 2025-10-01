import { TouchableOpacity, Text } from "react-native";
import { styles } from "./PrimaryButton.styles";

interface PrimaryButtonProps {
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
    title: string;
    loadingText?: string;
}

function PrimaryButton({
    onPress,
    loading = false,
    disabled = false,
    title,
    loadingText = 'Loading...'
}: PrimaryButtonProps) {

    const isDisabled = loading || disabled;

    return (
        <TouchableOpacity
            style={[styles.loginButton, isDisabled && styles.loginButtonDisabled]}
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
