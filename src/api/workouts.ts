import { db } from "@/FireBase";
import { addDoc, collection } from "@firebase/firestore";
import { Workout } from "@/types/types";

export const postWorkout = async (workout: Workout| null): Promise<void> => {
    if (workout) {
        let currentDate = Date.now()
        const date = new Date(currentDate);
        const monthYear = date.toLocaleString("default", { month: "long", year: "numeric" });

        workout = {
            ...workout,
            createdAt: currentDate,
            date: monthYear,
        }
        await addDoc(collection(db, "workouts"), workout);
        console.log('workout posted')
    }else{
        console.log('error posting workout')
    }
}