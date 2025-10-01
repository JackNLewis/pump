import { User } from "common/models/user";

export async function getUser(userid: string): Promise<User> {
    try {
        // const response = await fetch(`/api/users/${userid}`);

        // if (!response.ok) {
        //     throw new Error(`HTTP error! status: ${response.status}`);
        // }

        // return response.json();
        // setInterval(() => {
        //     console.log('waited 1 second', 1000)
        // })
        return {} as User
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
}
