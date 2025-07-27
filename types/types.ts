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
    name: string,
    lastOnline: string,
    profileImage: string,
    gym: string,
}
