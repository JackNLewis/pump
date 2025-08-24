import { db } from '@/FireBase';
import { collection, query, where, getDocs, doc, updateDoc, setDoc } from '@firebase/firestore';
import { Follow } from '@/types/types';
import { User } from '@/types/types';

export const insertFollow = async (currentUser: User, targetUser: User): Promise<void> => {
    try {
        const docId = `${currentUser.id}_${targetUser.id}`;
        const followData: Follow = {
            followerId: currentUser.id || '',
            followeeId: targetUser.id || '',
            createdAt: new Date(),
            status: "requested",
            follower_name: `${currentUser.firstName} ${currentUser.lastName}`,
            follower_image_url: currentUser.imageURI || '',
            followee_name: `${targetUser.firstName} ${targetUser.lastName}`,
            followee_image_url: targetUser.imageURI || ''
        };

        await setDoc(doc(db, 'follows', docId), followData);
    } catch (error) {
        console.error('Error inserting follow:', error);
        throw error;
    }
};

export const getFollowsByFolloweeId = async (currentUser: User): Promise<Follow[]> => {
    try {
        const followsQuery = query(
            collection(db, 'follows'),
            where('followeeId', '==', currentUser.id || ''),
            where('status', '==', 'requested')
        );

        const querySnapshot = await getDocs(followsQuery);
        const follows: Follow[] = [];

        querySnapshot.forEach((doc) => {
            follows.push(doc.data() as Follow);
        });

        return follows;
    } catch (error) {
        console.error('Error getting follows by followee ID:', error);
        throw error;
    }
};

export const updateFollowStatus = async (followId: string, status: string): Promise<void> => {
    try {
        const followDocRef = doc(db, 'follows', followId);
        await updateDoc(followDocRef, {
            status: status
        });


    } catch (error) {
        console.error('Error updating follow status:', error);
        throw error;
    }
};