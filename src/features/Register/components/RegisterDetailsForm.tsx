import { View, TextInput } from "react-native";
import { styles } from "./RegisterDetailsForm.styles";
import { colors } from 'common/styles/colors'

interface RegisterDetailsFormProps {
    userName: string;
    setUserName: (email: string) => void;
    firstName: string;
    setFirstName: (password: string) => void;
    lastName: string;
    setLastName: (password: string) => void;
    handleRegister: () => void;
}

function RegisterDetailsForm({
    userName,
    setUserName,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    handleRegister
}: RegisterDetailsFormProps) {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor={colors.grey[500]}
                autoCapitalize="none"
                value={userName}
                onChangeText={setUserName}
            />

            <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor={colors.grey[500]}
                value={firstName}
                onChangeText={setFirstName}
            />

            <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor={colors.grey[500]}
                value={lastName}
                onChangeText={setLastName}
            />
        </View>
    )
}

export default RegisterDetailsForm