import { db } from '../FireBase';
import { collection, query, where, getDocs, doc, getDoc, addDoc, setDoc } from '@firebase/firestore';
import { User } from '../types/types';

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

export const searchUsersByUsername = async (searchText: string): Promise<User[]> => {
  try {
    if (!searchText || searchText.trim().length === 0) {
      return [];
    }

    const usersRef = collection(db, 'users');
    const searchLower = searchText.toLowerCase();
    
    // Query for usernames that start with the search text
    const q = query(
      usersRef, 
      where('username', '>=', searchLower),
      where('username', '<=', searchLower + '\uf8ff')
    );
    
    const querySnapshot = await getDocs(q);
    
    const users: User[] = [];
    querySnapshot.forEach((doc) => {
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
    
    return users;
  } catch (error) {
    console.error('Error searching users:', error);
    throw error;
  }
};