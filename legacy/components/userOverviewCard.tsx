import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { User as UserIcon } from 'react-native-feather';
import { Follow } from '@/types/types';
import { UserContext } from '@/context/userContext';

interface UserOverviewCardProps {
    follow: Follow;
}

function UserOverviewCard({ follow }: UserOverviewCardProps) {
    const [currentButtonType, setCurrentButtonType] = useState<string>(follow?.status);

    const userContext = useContext(UserContext);
    const currentUser = userContext?.user;

    // const handleFollowPress = async () => {

    //     if (currentButtonType === 'follow' && follow && currentUser) {
    //         setCurrentButtonType('requested');
            
    //         try {
    //             // Create a user object from the follow data for the insertFollow function
    //             const targetUser = {
    //                 id: follow.followerId,
    //                 firstName: '',
    //                 lastName: '',
    //                 username: '',
    //                 imageURI: follow.follower_image_url
    //             };
    //             await insertFollow(currentUser, targetUser);

    //         } catch (error) {
    //             setCurrentButtonType('follow');
    //             console.error('Failed to follow user:', error);
    //         }
    //     }
    // };

    const renderButton = () => {
        console.log(currentButtonType)
        if (currentButtonType == 'follow') {
            return (
                <TouchableOpacity
                    style={[
                        styles.followButton, styles.followButtonDefault
                    ]}
                    onPress={() => {}}>
                    <Text style={[
                        styles.followButtonText, styles.followButtonTextDefault
                    ]}>
                        Follow
                    </Text>
                </TouchableOpacity>);
        } else if (currentButtonType == 'requested') {
            return (
                <TouchableOpacity
                    style={[
                        styles.followButton, styles.pendingButton
                    ]}
                    onPress={() => {}}
                >
                    <Text style={[
                        styles.followButtonText, styles.pendingButtonText
                    ]}>
                        Requested
                    </Text>
                </TouchableOpacity>);
        } else {
            return (
                <TouchableOpacity
                    style={[
                        styles.followButton, styles.followingButton,
                    ]}
                    onPress={() => {}}
                    disabled={true}
                >
                    <Text style={[
                        styles.followButtonText, styles.followingButtonText
                    ]}>
                        Following
                    </Text>
                </TouchableOpacity>);
        }
    };


    const CardContent = () => (
        <View style={styles.userCard}>
            <View style={styles.profileSection}>
                <View style={styles.profilePicture}>
                    {follow.follower_image_url ? (
                        <Image
                            source={{ uri: follow.follower_image_url  }}
                            style={styles.profileImage}
                        />
                    ) : (
                        <UserIcon height={24} width={24} color="#666" />
                    )}
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>{follow.follower_name}</Text>
                    <Text style={styles.secondaryText}>hardcodedusername</Text>
                </View>
            </View>
            {renderButton()}
        </View>
    );

    // if (onPress && buttonType === 'none') {
    //     return (
    //         <TouchableOpacity onPress={onPress}>
    //             <CardContent />
    //         </TouchableOpacity>
    //     );
    // }

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
        overflow: 'hidden',
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 24,
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