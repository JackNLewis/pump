import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { User as UserIcon } from 'react-native-feather';

type ButtonType = 'none' | 'follow' | 'following';

interface UserOverviewCardProps {
    name: string;
    secondaryText: string;
    buttonType?: ButtonType;
    onPress?: () => void;
    onFollowPress?: () => void;
}

const UserOverviewCard: React.FC<UserOverviewCardProps> = ({
    name,
    secondaryText,
    buttonType = 'none',
    onPress,
    onFollowPress
}) => {
    const renderButton = () => {
        if (buttonType === 'none') return null;

        const isFollowing = buttonType === 'following';
        
        return (
            <TouchableOpacity
                style={[
                    styles.followButton,
                    isFollowing ? styles.followingButton : styles.followButtonDefault
                ]}
                onPress={onFollowPress}
            >
                <Text style={[
                    styles.followButtonText,
                    isFollowing ? styles.followingButtonText : styles.followButtonTextDefault
                ]}>
                    {isFollowing ? 'Following' : 'Follow'}
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
});

export default UserOverviewCard;