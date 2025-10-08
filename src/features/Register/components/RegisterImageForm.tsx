import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./RegisterImageForm.styles";
import { ArrowUpRight, Camera as CameraIcon } from "react-native-feather"; 
import Divider from "common/components/auth/Divider";
import { colors } from "common/styles/colors";

interface RegisterImageFormProps{
    onUpload: () => void
    onTakePhoto: () => void
}

function RegisterImageForm({onUpload, onTakePhoto} : RegisterImageFormProps) {
    return (
        <View style={styles.uploadSection}>
            <TouchableOpacity style={styles.uploadButton} onPress={onUpload}>
                <ArrowUpRight color={colors.grey[800]} height={20} width={20} style={{ marginRight: 10 }} />
                <Text style={styles.uploadButtonText}>Choose a photo</Text>
            </TouchableOpacity>


            <Divider />

            <TouchableOpacity style={styles.cameraButton} onPress={onTakePhoto}>
                <CameraIcon color={colors.grey[800]} height={20} width={20} style={{ marginRight: 10 }} />
                <Text style={styles.cameraButtonText}>Take a photo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegisterImageForm