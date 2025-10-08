import { View, Text, StyleProp, TextStyle} from "react-native";
import { styles } from "./AuthHeader.styles";

interface PrimaryButtonProps {
    title: string,
    subtitle: string
    titleStyle? : StyleProp<TextStyle>
    subtitleProp? : StyleProp<TextStyle>
}

function AuthHeader({title, subtitle, titleStyle,subtitleProp } : PrimaryButtonProps) {
    return (
        <View>
            <Text style={[styles.title, titleStyle]}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default AuthHeader