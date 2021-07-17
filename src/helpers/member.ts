import { User } from "discord.js";
import * as admin from 'firebase-admin '

const db = admin.firestore();

export const fetchMember = async (user: User) => {
    const usersCollRef = db.collection('upscalebot').doc('data').collection('users');

    const userdoc = usersCollRef.doc(user.id);

}