import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../../services/firebase';
import { useSignedUser } from "./user.store";

export const SignInProvider = ({ children }) => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const { signedUser, setSignedUser } = useSignedUser();

    const handleLogin = async () => {
        const response = await signInWithPopup(firebaseAuth, provider);
        const { user } = response;
        setSignedUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            accessToken: user.accessToken,
        });
    }

    const handleLogout = async () => {
        await signOut(firebaseAuth);
        setSignedUser(null);
    }

    return children({ signedUser, handleLogin, handleLogout })
}