import { Text, StyleProp, TextStyle } from "react-native"
import {styles} from "./FormError.styles"

interface FormErrorProps {
    error : string
    style?: StyleProp<TextStyle>
}

function FormError({ error, style}: FormErrorProps) {

    return (
        error ?
            <Text style={[styles.error, style ]} >{error}</Text> :
            <></>
    )

}

export default FormError