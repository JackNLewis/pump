import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';
import {Camera as CameraIcon, ArrowUpRight}  from 'react-native-feather';
import { storage, auth } from '../../FireBase';
import { createUser } from '../../api/users';
import { User } from '../../types/types';

interface RegisterImageProps {
    setProfile: (user: User) => void;
}

function RegisterImage({ setProfile }: RegisterImageProps) {
    const route = useRoute<any>();
    const { profile }: { profile: User } = route.params || {};

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

    const choosePhoto = async () => {
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
        if (!selectedImage) {
            setError('Please select a profile image');
            return;
        }

        if (!profile) {
            setError('Profile data is missing');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            // Convert image URI to blob
            const response = await fetch(selectedImage);
            const blob = await response.blob();

            // Create a unique filename
            const filename = `profiles/${profile.username}_profile.jpg`;
            const storageRef = ref(storage, filename);

            // Upload image to Firebase Storage
            await uploadBytes(storageRef, blob);
            const downloadURL = await getDownloadURL(storageRef);

            // Create profile with image URL and auth ID
            const currentUser = auth.currentUser;
            if (!currentUser) {
                throw new Error('No authenticated user found');
            }
            
            const updatedProfile: User = {
                ...profile,
                id: currentUser.uid,
                imageURI: downloadURL
            };

            console.log('creating user', updatedProfile)

            const createdUser = await createUser(updatedProfile);
            
            // Update the profile state in App.tsx
            if (setProfile && createdUser) {
                setProfile(createdUser);
            }
            
        } catch (uploadError) {
            console.error('Error during profile creation:', uploadError);
            setError('Failed to create profile. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoBack = () => {
       navigation.navigate('HomeTabs');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upload a picture</Text>
            <Text style={styles.subtitle}>Put a face to the name.</Text>
            
            {!selectedImage ? (
                <View style={styles.uploadSection}>
                    <TouchableOpacity style={styles.uploadButton} onPress={choosePhoto}>
                        <ArrowUpRight color={colors.grey[800]} height={20} width={20} style={{marginRight:10}}/>
                        <Text style={styles.uploadButtonText}>Choose a photo</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.dividerContainer}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>or</Text>
                        <View style={styles.dividerLine} />
                    </View>
                    
                    <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
                         <CameraIcon color={colors.grey[800]} height={20} width={20} style={{marginRight:10}} />
                        <Text style={styles.cameraButtonText}>Take a photo</Text>
                    </TouchableOpacity>
                </View>
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
            
             {error ? <Text style={styles.error}>{error}</Text> : null}
            <TouchableOpacity 
                style={[styles.createButton, isLoading && styles.createButtonDisabled]} 
                onPress={handleCreate}
                disabled={isLoading}
            >
                <Text style={styles.createButtonText}>
                    {isLoading ? 'Creating Profile...' : 'Create'}
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={handleGoBack}>
                <Text style={styles.goBackText}>Go back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.lg,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: typography.fontWeight.bold,
        color: colors.primary[500],
        textAlign: 'center',
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: typography.fontSize.md,
        color: colors.grey[600],
        textAlign: 'center',
        marginBottom: spacing.xxl,
    },
    uploadSection: {
        alignItems: 'center',
        marginBottom: spacing.xxl,
    },
    uploadButton: {
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey[300],
        padding: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        marginBottom: spacing.lg,
    },
    uploadIcon: {
        fontSize: typography.fontSize.lg,
        marginRight: spacing.sm,
    },
    uploadButtonText: {
        fontSize: typography.fontSize.md,
        color: colors.grey[800],
        fontWeight: typography.fontWeight.medium,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: spacing.lg,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.grey[300],
    },
    dividerText: {
        marginHorizontal: spacing.md,
        color: colors.grey[600],
        fontSize: typography.fontSize.sm,
    },
    cameraButton: {
        backgroundColor: colors.white,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.grey[300],
        padding: spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    cameraIcon: {
        fontSize: typography.fontSize.lg,
        marginRight: spacing.sm,
    },
    cameraButtonText: {
        fontSize: typography.fontSize.md,
        color: colors.grey[800],
        fontWeight: typography.fontWeight.medium,
    },
    imageSection: {
        alignItems: 'center',
        marginBottom: spacing.xxl,
    },
    imageContainer: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        marginBottom: spacing.md,
        borderWidth: 2,
        borderColor: colors.grey[200],
    },
    profileImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    retakeText: {
        color: colors.grey[600],
        fontSize: typography.fontSize.md,
        textDecorationLine: 'underline',
    },
    createButton: {
        backgroundColor: colors.primary[500],
        borderRadius: 8,
        padding: spacing.md,
        alignItems: 'center',
        marginBottom: spacing.lg,
    },
    createButtonText: {
        color: colors.white,
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.bold,
    },
    createButtonDisabled: {
        backgroundColor: colors.grey[400],
    },
    goBackText: {
        color: colors.primary[500],
        fontSize: typography.fontSize.md,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    error: {
        color: 'red',
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        textAlign: 'center',
    },
});

export default RegisterImage;