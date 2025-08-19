import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { X, Settings, LogOut } from 'react-native-feather'
import { colors } from '../../styles/colors';
import { typography } from '../../styles/typography'

interface NotificationsDrawerProps {
    onClose: () => void;
}

function NotificationsDrawer({ onClose }: NotificationsDrawerProps) {
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
                <Text style={styles.contentText}>No new notifications</Text>
                {/* This area can be expanded with notification content later */}
            </View>

            {/* Bottom Section */}
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.settingsButton}>
                    <Settings stroke={colors.grey[800]} width={24} height={24} />
                    <Text style={styles.settingsLabel}>SETTINGS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.logoutButton}>
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
        paddingHorizontal: 20,
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