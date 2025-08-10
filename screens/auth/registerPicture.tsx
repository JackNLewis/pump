import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography';
import { spacing } from '../../styles/spacing';
import {Camera as CameraIcon, ArrowUpRight}  from 'react-native-feather';

function RegisterPicture({ route }: { route?: any }) {
    const navigation = useNavigation<any>();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
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

    const handleCreate = () => {
        navigation.navigate('HomeTabs');
    };

    const handleGoBack = () => {
        navigation.goBack();
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
            
            <TouchableOpacity 
                style={styles.createButton} 
                onPress={handleCreate}
            >
                <Text style={styles.createButtonText}>Create</Text>
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
    goBackText: {
        color: colors.primary[500],
        fontSize: typography.fontSize.md,
        textAlign: 'center',
        textDecorationLine: 'underline',
    }
});

export default RegisterPicture;