import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Workout } from '@/types/types';

export interface WorkoutContextType {
    workout: Workout | null;
    setWorkout: (workout : Workout | null) => void;
}

export const WorkoutContext = createContext<WorkoutContextType|null>(null);

interface WorkoutProviderProps {
    children: ReactNode;
}

export function WorkoutContextProvider({ children }: WorkoutProviderProps){
    const [workout, setWorkout] = useState<Workout | null>(null);

    return (
        <WorkoutContext.Provider value={{workout,setWorkout}}>
            {children}
        </WorkoutContext.Provider>
    );
};

export function useWorkoutContext() {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error('useWorkoutContext must be used within a WorkoutContextProvider');
    }
    return context;
}


