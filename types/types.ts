import { ImageSourcePropType } from "react-native";

export interface Set {
    position: number,
    weight: number;
    reps: number;
}

export interface Exercise {
    name: string;
    sets: Set[];
}

export interface Workout {
    user: User,
    workoutImage?: ImageSourcePropType,
    exercises: Exercise[];
}

export interface User {
    id? : string,
    firstName: string,
    lastName: string,
    username: string,
    imageURI?: string,
    gym?: string,
    lastOnline?: string,
    follower_count?: number,
    following_count?: number,
    workout_count? : number,
}

