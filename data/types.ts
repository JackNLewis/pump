export interface Set {
  weight: number;
  reps: number;
  completed: boolean;
}

export interface Exercise {
  name: string;
  sets: Set[];
}

export interface Workout {
  exercises: Exercise[];
}