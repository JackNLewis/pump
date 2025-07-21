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
    exercises: Exercise[];
}