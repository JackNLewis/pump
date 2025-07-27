import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { X, RotateCw } from 'react-native-feather';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Camera({ route }: { route: any }) {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const navigation = useNavigation<any>();
    const cameraRef = useRef<CameraView>(null);
    
    const { onSubmitWorkout } = route.params || {};

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    async function handleCapture() {
        if (cameraRef.current && onSubmitWorkout) {
            try {
                const photo = await cameraRef.current.takePictureAsync();
                if (photo) {
                    onSubmitWorkout({ uri: photo.uri });
                }
            } catch (error) {
                console.error('Error taking picture:', error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
            </CameraView>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => navigation.goBack()}
                >
                    <X stroke="#FFFFFF" width={24} height={24} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.flipButton}
                    onPress={toggleCameraFacing}
                >
                    <RotateCw stroke="#FFFFFF" width={24} height={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.cornerContainer}>
               <View style={styles.innerCornerContainer}>
                    <View style={[styles.corner, styles.topLeft]} />
                    <View style={[styles.corner, styles.topRight]} />
                    <View style={[styles.corner, styles.bottomLeft]} />
                    <View style={[styles.corner, styles.bottomRight]} />
               </View>
            </View>

            <View style={styles.captureContainer}>
                <TouchableOpacity
                    style={styles.captureButton}
                    onPress={handleCapture}
                >
                    <View style={styles.captureInner} />
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    closeButton: {
        padding: 8,
    },
    flipButton: {
        padding: 8,
    },
    captureContainer: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        height:10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    captureButton: {
        bottom: 50,
        position: 'relative',
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    captureInner: {
        position: 'relative',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFFFFF',
    },
    cornerContainer: {
         position: 'absolute',
         left: 0,
         right: 0,
         aspectRatio: 3/4,
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
    },
    innerCornerContainer : {
        position: 'relative',
        width: '80%',
        aspectRatio: 3/4,
    },
     corner: {
        position: 'absolute',
        width: 30,
        height: 30,
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
    topLeft: {
        top: 0,
        left: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    topRight: {
        top: 0,
        right: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
    },
    bottomLeft: {
        bottom: 0,
        left: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
    },
    bottomRight: {
        bottom: 0,
        right: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
});

