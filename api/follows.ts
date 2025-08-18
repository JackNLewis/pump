import { db } from '../FireBase';
import { collection, addDoc } from '@firebase/firestore';
import { Follow } from '../types/types';

export const insertFollow = async (followerId: string, followeeId: string): Promise<void> => {
  try {
    const followData: Omit<Follow, 'id'> = {
      followerId: followerId,
      followeeId: followeeId,
      createdAt: new Date(),
      status: 'pending'
    };

    await addDoc(collection(db, 'follows'), followData);
  } catch (error) {
    console.error('Error inserting follow:', error);
    throw error;
  }
};