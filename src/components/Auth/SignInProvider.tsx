import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../services/firebase';
import { useSignedUser } from "./user.store";

export const SignInProvider = ({ children }) => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const { signedUser, setSignedUser, authError, setAuthError } = useSignedUser();

    const handleLogin = async () => {
        setAuthError("");
        try {
            const response = await signInWithPopup(firebaseAuth, provider);
            const { user } = response;
            // throw new Error("An error has occcured");
            setSignedUser({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                accessToken: user.accessToken,
            });
        } catch (error: any) {
            setAuthError(error.toString());
        }
    }

    const handleLogout = async () => {
        await signOut(firebaseAuth);
        setSignedUser(null);
    }

    return children({ signedUser, handleLogin, handleLogout, authError, setAuthError })
}