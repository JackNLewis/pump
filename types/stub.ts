import { Workout } from './types';

export const stubWorkoutData: Workout = {
    user: {
        name: 'Jack Lewis',
        lastOnline: 'Trained 1 hour ago',
        profileImage: '',
        gym: 'Harveys Gym',
    },
    workoutImage: require('../assets/workout2.jpg'),
    exercises: [
        {
            name: 'Bench Press',
            sets: [
                { position: 1, weight: 135, reps: 10 },
                { position: 2, weight: 155, reps: 8 },
                { position: 3, weight: 175, reps: 6 },
            ]
        },
        {
            name: 'Squats',
            sets: [
                { position: 1, weight: 185, reps: 12 },
                { position: 2, weight: 205, reps: 10 },
                { position: 3, weight: 225, reps: 8 },
            ]
        },
        {
            name: 'Deadlifts',
            sets: [
                { position: 1, weight: 225, reps: 8 },
                { position: 2, weight: 245, reps: 6 },
                { position: 3, weight: 265, reps: 4 },
            ]
        }
    ]
};

export const stubExploreWorkoutData = [
    {
        id: 1,
        name: "Jack Lewis",
        workout: "Trained Chest",
        image: require('../assets/workout1.jpg')
    },
    {
        id: 2,
        name: "Jack Lewis",
        workout: "Trained Chest",
        image: require('../assets/workout1.jpg')
    }
];

export const stubWorkoutImages = [
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
];

export const stubExercisesData = [
  { id: 1, name: 'Barbell Bench Press', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 2, name: 'Incline Dumbbell Bench Press', difficulty: 3, hasInfoPage: false, type: 'custom' },
  { id: 3, name: 'Pec Deck', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 4, name: 'Cable Crossover', difficulty: 2, hasInfoPage: true, type: 'custom' },
  { id: 5, name: 'Incline Barbell Bench Press', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 6, name: 'Dumbbell Bench Press', difficulty: 2, hasInfoPage: true, type: 'custom' },
  { id: 7, name: 'Dumbbell Fly', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 8, name: 'Incline Dumbbell Fly', difficulty: 3, hasInfoPage: true, type: 'custom' },
  { id: 9, name: 'Chest Press Machine', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 10, name: 'Barbell Declined Bench Press', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 11, name: 'Dumbbell Declined Bench Press', difficulty: 1, hasInfoPage: true, type: 'official' },
  { id: 12, name: 'Push Ups', difficulty: 3, hasInfoPage: true, type: 'custom' },
  { id: 13, name: 'Dumbbell Bent-Over Row (Single Arm)', difficulty: 3, hasInfoPage: false, type: 'official' },
  { id: 14, name: 'Wide-Grip Pulldown', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 15, name: 'Seated Cable Row', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 16, name: 'Close-Grip Pulldown', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 17, name: 'Barbell Row', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 18, name: 'Behind-Neck Pulldown', difficulty: 3, hasInfoPage: true, type: 'official' },
  { id: 19, name: 'Reverse-Grip Pulldown', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 20, name: 'Rope Pulldown', difficulty: 1, hasInfoPage: true, type: 'official' },
  { id: 21, name: 'T-Bar Rows', difficulty: 3, hasInfoPage: false, type: 'custom' },
  { id: 22, name: 'Barbell Bent Over Rows Supinated Grip', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 23, name: 'Pull Up', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 24, name: 'Behind the Neck Pull Up', difficulty: 1, hasInfoPage: false, type: 'official' },
  { id: 25, name: 'Pull Up with a Supinated Grip', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 26, name: 'Straight Arm Lat Pulldown', difficulty: 2, hasInfoPage: true, type: 'custom' },
  { id: 27, name: 'Dumbbell Bent Over Rows', difficulty: 3, hasInfoPage: false, type: 'custom' },
  { id: 28, name: 'Dumbbell Pullover', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 29, name: 'Barbell Pullover', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 30, name: 'Barbell Deadlift', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 31, name: 'Barbell Sumo Deadlift', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 32, name: 'Trap Bar Deadlift', difficulty: 2, hasInfoPage: true, type: 'custom' },
  { id: 33, name: 'Dumbbell Deadlift', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 34, name: 'Barbell Shrug', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 35, name: 'Dumbbell Shrugs', difficulty: 3, hasInfoPage: false, type: 'official' },
  { id: 36, name: 'Dumbbell Shoulder Press', difficulty: 3, hasInfoPage: false, type: 'custom' },
  { id: 37, name: 'Dumbbell Lateral Raise', difficulty: 3, hasInfoPage: false, type: 'official' },
  { id: 38, name: 'Dumbbell Front Raise', difficulty: 2, hasInfoPage: true, type: 'official' },
  { id: 39, name: 'High Cable Rear Delt Fly', difficulty: 3, hasInfoPage: true, type: 'custom' },
  { id: 40, name: 'Smith Machine Shoulder Press', difficulty: 3, hasInfoPage: true, type: 'official' },
  { id: 41, name: 'Barbell Upright Row', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 42, name: 'Bent-Over Lateral Raise', difficulty: 2, hasInfoPage: false, type: 'custom' },
  { id: 43, name: 'Cable One-Arm Lateral Raise', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 44, name: 'Dumbbell Push Press', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 45, name: 'Barbell Push Press', difficulty: 2, hasInfoPage: false, type: 'custom' },
  { id: 46, name: 'Single-Arm Cable Front Raise', difficulty: 2, hasInfoPage: false, type: 'official' },
  { id: 47, name: 'Barbell Front Raise', difficulty: 1, hasInfoPage: true, type: 'custom' },
  { id: 48, name: 'Seated Barbell Shoulder Press', difficulty: 3, hasInfoPage: false, type: 'official' },
  { id: 49, name: 'Seated Behind the Neck Barbell Shoulder Press', difficulty: 1, hasInfoPage: false, type: 'custom' },
  { id: 50, name: 'Standing Barbell Shoulder Press', difficulty: 3, hasInfoPage: false, type: 'official' }
];