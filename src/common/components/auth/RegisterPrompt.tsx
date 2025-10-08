import { TouchableOpacity, Text } from "react-native";
import { styles } from "./RegisterPrompt.styles";

interface RegisterPromptProps {
    text: string
    onPress: () => void
}

function RegisterPrompt({text, onPress} : RegisterPromptProps) {

    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.goBackText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default RegisterPrompt