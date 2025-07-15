import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User as UserIcon, MoreHorizontal, Search as SearchIcon } from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';

const CardHeader = ({ name, workout, profileImage }: any) => {
    return (
        <View style={styles.cardHeader}>
            <View style={styles.profileSection}>
                <View style={styles.profilePicture}>
                    <UserIcon height={20} width={20} color="#666" />
                </View>
                <View style={styles.profileInfo}>
                    <Text style={styles.profileName}>{name}</Text>
                    <Text style={styles.workoutInfo}>{workout}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.settingsIcon}>
                <MoreHorizontal height={20} width={20} color="#666" />
            </TouchableOpacity>
        </View>
    );
};

const WorkoutCard = ({ image, name, workout, onPress }: any) => {
    return (
        <View style={styles.card}>
            <CardHeader name={name} workout={workout} />
            <TouchableOpacity onPress={onPress}>
                <Image source={image} style={styles.cardImage} resizeMode="cover" />
            </TouchableOpacity>
        </View>
    );
};

const Explore = () => {
    const navigation = useNavigation<any>();

    const workoutData = [
        {
            id: 1,
            name: "Jack Lewis",
            workout: "Trained Chest",
            image: require('../assets/workout1.jpg')
        },
        {
            id: 2,
            name: "Jack Lewis",
            workout: "Trained Chest",
            image: require('../assets/workout1.jpg')
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>EXPLORE</Text>
                <TouchableOpacity style={styles.headerIcon}>
                    <SearchIcon height={24} width={24} color="#333" onPress={() => navigation.navigate('SearchUser')}/>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                {workoutData.map((item) => (
                    <WorkoutCard
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        workout={item.workout}
                        onPress={() => navigation.navigate('ViewWorkout', { workoutId: item.id })}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    headerIcon: {
        padding: 4,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#FFFFFF',
        marginBottom: 24,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    profilePicture: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#F0F0F0',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    profileInfo: {
        flex: 1,
    },
    profileName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#00CCA7',
        marginBottom: 2,
    },
    workoutInfo: {
        fontSize: 14,
        color: '#666',
    },
    settingsIcon: {
        padding: 4,
    },
    cardImage: {
        width: '100%',
        height: 350,
        borderRadius: 16
    },
});

export default Explore;