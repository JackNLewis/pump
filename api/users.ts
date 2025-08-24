import { db } from '../FireBase';
import { collection, query, where, getDocs, doc, getDoc, setDoc, limit } from '@firebase/firestore';
import { Follow, User, UserSearchResult } from '../types/types';

export const getUserByUsername = async (username: string): Promise<User | null> => {
    try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('username', '==', username));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        return {
            id: userDoc.id,
            firstName: userData?.firstName || '',
            lastName: userData?.lastName || '',
            username: userData?.username || '',
            imageURI: userData?.imageURI || '',
            gym: userData?.gym,
            lastOnline: userData?.lastOnline
        } as User;
    } catch (error) {
        console.error('Error fetching user by username:', error);
        throw error;
    }
};

export const getUserById = async (userId: string): Promise<User | null> => {
    try {
        const userDoc = await getDoc(doc(db, 'users', userId));

        if (!userDoc.exists()) {
            return null;
        }

        const userData = userDoc.data();
        return {
            id: userDoc.id,
            firstName: userData?.firstName || '',
            lastName: userData?.lastName || '',
            username: userData?.username || '',
            imageURI: userData?.imageURI || '',
            gym: userData?.gym,
            lastOnline: userData?.lastOnline
        } as User;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error;
    }
};

export const createUser = async (profile: User): Promise<User> => {
    try {
        if (!profile.id) {
            throw new Error('Profile must have an id (authId) to create user document');
        }

        const userDocRef = doc(db, 'users', profile.id);
        await setDoc(userDocRef, profile);

        return profile;

    } catch (error) {
        console.error('Error creating profile:', error);
        throw error;
    }
};

export const searchUsersByUsername = async (searchText: string, currentUser: User|undefined): Promise<UserSearchResult[]> => {
    try {
        if (!searchText || searchText.trim().length === 0 || !currentUser) {
            return [];
        }

        const usersRef = collection(db, 'users');
        const searchLower = searchText.toLowerCase();

        // Query for usernames that start with the search text
        const userQuery = query(
            usersRef,
            where('username', '>=', searchLower),
            where('username', '<=', searchLower + '\uf8ff'),
            where('username', '!=', currentUser.username),
            limit(10)
        );

        const filteredUsers = await getDocs(userQuery);

        const users: User[] = [];
        filteredUsers.forEach((doc) => {
            const userData = doc.data();
            users.push({
                id: doc.id,
                firstName: userData?.firstName || '',
                lastName: userData?.lastName || '',
                username: userData?.username || '',
                imageURI: userData?.imageURI || '',
                gym: userData?.gym,
                lastOnline: userData?.lastOnline
            } as User);
        });

        const userIds = users.map(user => user.id!);

        if (userIds.length === 0) {
            return [];
        }

        const followsRef = collection(db, 'follows');
        const followQuery = query(
            followsRef,
            where('followeeId', 'in', userIds),
            where('followerId', '==', currentUser.id)
        );

        const followsSnapshot = await getDocs(followQuery);
        const follows: Follow[] = [];

        followsSnapshot.forEach((doc) => {
            const followData = doc.data();
            follows.push({
                id: doc.id,
                followerId: followData?.followerId || '',
                followeeId: followData?.followeeId || '',
                createdAt: followData?.createdAt || new Date(),
                status: followData?.status || 'follow'
            } as Follow);
        });


        // Combine users with their follow status
        const results: UserSearchResult[] = users.map(user => {
            const followRelation = follows.find(follow => follow.followeeId === user.id);
            return {
                user,
                status: followRelation ? followRelation.status : 'follow'
            };
        });


        // Add ranking here so followed users come first

        return results;
    } catch (error) {
        console.error('Error searching users:', error);
        throw error;
    }
};

export const getFollowers = async (userId: string): Promise<Follow[]> => {
    try {
        if (!userId) {
            return [];
        }
        console.log('fetching followeeId of ' + userId);
        const followsRef = collection(db, 'follows');
        const followQuery = query(
            followsRef,
            where('followeeId', '==', userId),
            where('status', '==', 'accepted')
        );

        const followsSnapshot = await getDocs(followQuery);
        
        if (followsSnapshot.empty) {
            return [];
        }

        const followers: Follow[] = [];
        followsSnapshot.forEach((doc) => {
            const followData = doc.data();
            followers.push({
                followerId: followData?.followerId || '',
                followeeId: followData?.followeeId || '',
                createdAt: followData?.createdAt || new Date(),
                status: followData?.status || 'following',
                follower_name: followData?.follower_name || '',
                follower_image_url: followData?.follower_image_url || '',
                followee_name: followData?.followee_name || '',
                followee_image_url: followData?.followee_image_url || ''
            } as Follow);
        });

        return followers;
    } catch (error) {
        console.error('Error fetching followers:', error);
        throw error;
    }
};