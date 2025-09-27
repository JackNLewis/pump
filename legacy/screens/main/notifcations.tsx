import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { X, Settings, LogOut } from 'react-native-feather'
import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography'
import { auth } from "@/FireBase";
import FollowRequestCard from '@/components/followRequestCard';
import { UserContext } from '@/context/userContext';
import { getFollowsByFolloweeId, updateFollowStatus } from '@/api/follows';
import { Follow } from '@/types/types';

interface NotificationsDrawerProps {
    onClose: () => void;
}

function NotificationsDrawer({ onClose }: NotificationsDrawerProps) {
    const userContext = useContext(UserContext);
    const [followRequests, setFollowRequests] = useState<Follow[]>([]);
    const [loading, setLoading] = useState(true);

    const loadFollowRequests = async () => {
        if (userContext?.user) {
            try {
                setLoading(true);
                const requests = await getFollowsByFolloweeId(userContext.user);
                setFollowRequests(requests);
            } catch (error) {
                console.error('Error loading follow requests:', error);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleAcceptRequest = async (request: Follow) => {
        try {
            if (!request && userContext && userContext.user){
                return
            }
            
            let followId = `${request.followerId}_${request.followeeId}`
            await updateFollowStatus(followId, 'accepted');
            // Reload the follow requests to reflect the change
            await loadFollowRequests();
        } catch (error) {
            console.error('Error accepting follow request:', error);
        }
    };

    const handleDeclineRequest = async (request: Follow) => {
        try {
           if (!request && userContext && userContext.user){
                return
            }
            
            let followId = `${request.followerId}_${request.followeeId}`
            await updateFollowStatus(followId, 'rejected');
            // Reload the follow requests to reflect the change
            await loadFollowRequests();
        } catch (error) {
            console.error('Error declining follow request:', error);
        }
    };

    useEffect(() => {
        loadFollowRequests();
    }, [userContext?.user]);

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.tabsContainer}>
                    {/* <Text style={styles.tab}>your</Text> */}
                    <Text style={[styles.tab]}>NOTIFICATIONS</Text>
                </View>
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <X stroke={colors.grey[800]} width={24} height={24} />
                </TouchableOpacity>

            </View>

            {/* Content Area */}
            <View style={styles.content}>
                {loading ? (
                    <Text style={styles.contentText}>Loading follow requests...</Text>
                ) : followRequests.length === 0 ? (
                    <Text style={styles.contentText}>No follow requests</Text>
                ) : (
                    followRequests.map((request, index) => (
                        <FollowRequestCard 
                            key={index}
                            name={request.follower_name}
                            profilePic={request.follower_image_url}
                            onAccept={() => handleAcceptRequest(request)}
                            onDecline={() => handleDeclineRequest(request)}
                        />
                    ))
                )}
            </View>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.settingsButton}>
                    <Settings stroke={colors.grey[800]} width={24} height={24} />
                    <Text style={styles.settingsLabel}>SETTINGS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton} onPress={() => auth.signOut()}>
                    <LogOut stroke={colors.grey[800]} width={24} height={24} />
                    <Text style={styles.logoutText}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
    },
    tabsContainer: {
        flexDirection: 'row',
        paddingTop: 10,
        alignItems: 'center',
        gap: 10,
    },
    tab: {

        fontSize: typography.fontSize.xl,
        fontWeight: typography.fontWeight.semibold,
        color: colors.grey[800],
    },
    boldText: {
        fontWeight: '600',
    },
    closeButton: {
        padding: 5,
    },
    closeText: {
        fontSize: 24,
        color: colors.grey[600],
        fontWeight: '300',
    },
    content: {
        flex: 1,
        paddingLeft: 20,
    },
    contentText: {
        paddingVertical: 20,
        color: colors.grey[500],
        textAlign: 'center'
    },
    bottomSection: {
        paddingHorizontal: 20,
        paddingBottom: 40,
        gap: 20,
    },
    settingsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        gap: 15,
    },
    settingsLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.grey[600],
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        justifyContent: 'space-between',
        gap: 15,
    },
    logoutText: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.grey[600],
    },
});

export default NotificationsDrawer;