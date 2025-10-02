import { View, Text } from "react-native";
import { styles } from "./AuthHeader.styles";

interface PrimaryButtonProps {
    title: string,
    subtitle: string
}


function AuthHeader({title, subtitle} : PrimaryButtonProps) {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default AuthHeader