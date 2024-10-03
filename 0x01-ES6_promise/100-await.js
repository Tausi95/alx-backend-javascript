// 100-await.js
import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
    try {
        const photo = await uploadPhoto(); // Assuming uploadPhoto returns a promise
        const user = await createUser();   // Assuming createUser returns a promise
        
        return {
            photo,
            user,
        };
    } catch {
        // If either of the async functions fails, return an empty object
        return {
            photo: null,
            user: null,
        };
    }
}

