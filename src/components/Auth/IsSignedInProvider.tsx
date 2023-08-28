import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

interface IsSignedInProps {
    isSignedIn: boolean
}
interface IsSignedInProviderProps {
    children: React.FunctionComponent<IsSignedInProps>;
}

export const IsSignedInProvider = ({ children }: IsSignedInProviderProps) => {
    const auth = getAuth();
    const [isSignedIn, setIsSignedIn] = useState(false);
    onAuthStateChanged(auth, (user) => user ? setIsSignedIn(true) : setIsSignedIn(false));

    return children({ isSignedIn })

}