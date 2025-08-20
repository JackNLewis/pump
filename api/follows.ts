import { db } from '../FireBase';
import { collection, addDoc } from '@firebase/firestore';
import { Follow } from '../types/types';
import { User } from '../types/types';

export const insertFollow = async (currentUser: User, targetUser: User): Promise<void> => {
    console.log(targetUser)
  try {
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

    await addDoc(collection(db, 'follows'), followData);
  } catch (error) {
    console.error('Error inserting follow:', error);
    throw error;
  }
};