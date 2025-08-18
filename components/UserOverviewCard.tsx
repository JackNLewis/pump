import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { User as UserIcon } from 'react-native-feather';
import { insertFollow } from '../api/follows';


interface UserOverviewCardProps {
    name: string;
    secondaryText: string;
    buttonType?: string;
    onPress?: () => void;
    onFollowPress?: () => void;
    currentUserId?: string;
    targetUserId?: string;
}

const UserOverviewCard: React.FC<UserOverviewCardProps> = ({
    name,
    secondaryText,
    buttonType = 'none',
    onPress,
    onFollowPress,
    currentUserId,
    targetUserId
}) => {
    const [currentButtonType, setCurrentButtonType] = useState<string>(buttonType);

    const handleFollowPress = async () => {
        if (currentButtonType === 'follow' && currentUserId && targetUserId) {
            setCurrentButtonType('pending');
            
            try {
                await insertFollow(currentUserId, targetUserId);
                if (onFollowPress) {
                    onFollowPress();
                }
            } catch (error) {
                setCurrentButtonType('follow');
                console.error('Failed to follow user:', error);
            }
        } else if (onFollowPress) {
            onFollowPress();
        }
    };

    const renderButton = () => {
        if (currentButtonType === 'none') return null;

        const isFollowing = currentButtonType === 'following';
        const isPending = currentButtonType === 'pending';
        
        return (
            <TouchableOpacity
                style={[
                    styles.followButton,
                    isFollowing ? styles.followingButton : 
                    isPending ? styles.pendingButton : styles.followButtonDefault
                ]}
                onPress={handleFollowPress}
                disabled={isPending}
            >
                <Text style={[
                    styles.followButtonText,
                    isFollowing ? styles.followingButtonText : 
                    isPending ? styles.pendingButtonText : styles.followButtonTextDefault
                ]}>
                    {isFollowing ? 'Following' : isPending ? 'Pending' : 'Follow'}
                </Text>
            </TouchableOpacity>
        );
    };

    const CardContent = () => (
        <View style={styles.userCard}>
            <View style={styles.profileSection}>
                <View style={styles.profilePicture}>
                    <UserIcon height={24} width={24} color="#666" />
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>{name}</Text>
                    <Text style={styles.secondaryText}>{secondaryText}</Text>
                </View>
            </View>
            {renderButton()}
        </View>
    );

    if (onPress && buttonType === 'none') {
        return (
            <TouchableOpacity onPress={onPress}>
                <CardContent />
            </TouchableOpacity>
        );
    }

    return <CardContent />;
};

const styles = StyleSheet.create({
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    profilePicture: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 2,
    },
    secondaryText: {
        fontSize: 14,
        color: '#666',
    },
    followButton: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
    },
    followButtonDefault: {
        backgroundColor: '#FFFFFF',
        borderColor: '#00CCA7',
    },
    followingButton: {
        backgroundColor: '#00CCA7',
        borderColor: '#00CCA7',
    },
    pendingButton: {
        backgroundColor: '#F5F5F5',
        borderColor: '#CCCCCC',
    },
    followButtonText: {
        fontSize: 14,
        fontWeight: '600',
    },
    followButtonTextDefault: {
        color: '#00CCA7',
    },
    followingButtonText: {
        color: '#FFFFFF',
    },
    pendingButtonText: {
        color: '#999999',
    },
});

export default UserOverviewCard;