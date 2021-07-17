import { User } from "discord.js";
import * as admin from 'firebase-admin';
import * as qdb from 'quick.db'
const db = admin.firestore();

export const fetchMember = async (user: User): Promise<string | null> => {
    const usersCollRef = db.collection('upscalebot').doc('data').collection('users');

    const userRef = usersCollRef.doc(user.id);

    const userDoc = await userRef.get();

    if (userDoc.exists) {
        qdb.set(`user.${user.id}`, userDoc.data() || null);
        return null;
    } else {
        await usersCollRef.doc(user.id).set({
            tag: user.tag,
            avatar: user.displayAvatarURL({dynamic: true, size: 512}),
            username: user.username,
            discriminator: user.discriminator,
            bot: user.bot,
        }).catch(err => {
            console.error(err);
            return err;
        });

        return null;
    }
}