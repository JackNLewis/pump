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
    workoutImage: string,
    exercises: Exercise[];
}

export interface User {
    name: string,
    lastOnline: string,
    profileImage: string,
    gym: string,
}
