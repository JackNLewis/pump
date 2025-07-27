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