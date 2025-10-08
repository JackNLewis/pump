import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

interface UseRegisterImageProps {
    firstName: string;
    lastName: string;
    userName: string;
}

export const useRegisterImage = ({ firstName, lastName, userName }: UseRegisterImageProps) => {
    const route = useRoute<any>();

    const navigation = useNavigation<any>();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Handle photo returned from Camera screen
    useFocusEffect(
        useCallback(() => {
            if (route?.params?.photoUri) {
                setSelectedImage(route.params.photoUri);
                // Clear the parameter to avoid setting it again
                navigation.setParams({ photoUri: undefined });
            }
        }, [route?.params?.photoUri, navigation])
    );

    const requestPermissions = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission needed', 'We need camera roll permissions to select a photo.');
            return false;
        }
        return true;
    };

    const handlePhotoTaken = (photoData: { uri: string }) => {
        setSelectedImage(photoData.uri);
        navigation.goBack();
    };

    const uploadPhoto = async () => {
        const hasPermission = await requestPermissions();
        if (!hasPermission) return;

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled && result.assets[0]) {
            setSelectedImage(result.assets[0].uri);
        }
    };

    const takePhoto = () => {
        navigation.navigate('Camera', {
            onSubmitWorkout: handlePhotoTaken
        });
    };

    const retakePhoto = () => {
        setSelectedImage(null);
    };

    const handleCreate = async () => {
       console.log('create profile here')
    };

    const handleGoBack = () => {
       navigation.popTo('RegisterDetails');
    };

    return {
        selectedImage,
        error,
        isLoading,
        uploadPhoto,
        takePhoto,
        retakePhoto,
        handleCreate,
        handleGoBack
    };
};
