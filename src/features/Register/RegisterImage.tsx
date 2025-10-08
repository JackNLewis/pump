import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Camera as CameraIcon, ArrowUpRight } from 'react-native-feather';
import Divider from 'common/components/auth/Divider';
import AuthHeader from 'common/components/auth/AuthHeader';
import { useRegisterImage } from './hooks/useRegisterImage';
import { styles } from './RegisterImage.styles'
import { colors } from 'common/styles/colors'
import RegisterPrompt from 'common/components/auth/RegisterPrompt';
import FormError from 'common/components/auth/FormError';
import PrimaryButton from 'common/components/auth/ui/buttons/PrimaryButton';
import {spacing} from 'common/styles/spacing'
import RegisterImageForm from './components/RegisterImageForm';

function RegisterImage() {
    const route = useRoute<any>();
    const { firstName, lastName, userName } = route.params || {};

    const {
        selectedImage,
        error,
        isLoading,
        uploadPhoto,
        takePhoto,
        retakePhoto,
        handleCreate,
        handleGoBack
    } = useRegisterImage({ firstName, lastName, userName });

    return (
        <View style={styles.container}>

            <AuthHeader
                title='Upload a picture'
                subtitle='Put a face to the name.'
                titleStyle={{ fontSize: 40 }} />


            {!selectedImage ? (
                <RegisterImageForm onUpload={uploadPhoto} onTakePhoto={takePhoto}/>
            ) : (
                <View style={styles.imageSection}>
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: selectedImage }} style={styles.profileImage} />
                    </View>
                    <TouchableOpacity onPress={retakePhoto}>
                        <Text style={styles.retakeText}>Retake photo</Text>
                    </TouchableOpacity>
                </View>
            )}

            <FormError error={error}/>

            <PrimaryButton title='Create' loadingText='Creating Profile...' onPress={handleCreate} style={{ marginBottom: spacing.md }}/>

            <RegisterPrompt text='Go back' onPress={handleGoBack}/>
            
        </View>
    );
}

export default RegisterImage;