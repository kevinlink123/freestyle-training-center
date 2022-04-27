import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

class AuthService {
    async login(email: string, password: string) {
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.log(err);
        }
    }

    async logout() {
        const auth = getAuth();
        try {
            await signOut(auth);
        } catch (err) {
            console.log(err);
        }
    }
}

export default new AuthService();