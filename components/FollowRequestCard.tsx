import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors } from '../styles/colors';

interface FollowRequestCardProps {
    name: string;
    profilePic?: string;
    onAccept?: () => void;
    onDecline?: () => void;
}

const FollowRequestCard = ({ name, profilePic, onAccept, onDecline }: FollowRequestCardProps) => {

    const [status, setStatus] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Image
                    source={profilePic ? { uri: profilePic } : require('../assets/workout1.jpg')}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.rightSection}>
                <View style={styles.textContainer}>
                    <Text style={styles.boldText}>{name} </Text>
                    <Text style={styles.normalText}>requested to </Text>
                    <Text style={styles.boldText}>follow you</Text>
                </View>

                {status == "" ?
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.declineButton} onPress={() => {
                            onDecline?.();
                            setStatus('Declined')
                        }}>
                            <Text style={styles.declineText}>Decline</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.acceptButton} onPress={() => {
                            onAccept?.();
                            setStatus('Accepted')
                        }}>
                            <Text style={styles.acceptText}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                    :
                            <Text style={styles.statusText}>{status}</Text>
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10
    },
    rightSection: {
        flex: 1,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    textContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        flexWrap: 'wrap',
    },
    boldText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    normalText: {
        fontSize: 14,
        color: '#666',
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    declineButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    declineText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    acceptButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 10,
        backgroundColor: '#00CCA7',
    },
    acceptText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '500',
    },
     statusText: {
        fontSize: 14,
        color: colors.primary[500],
        fontWeight: '400',
    },
});

export default FollowRequestCard;