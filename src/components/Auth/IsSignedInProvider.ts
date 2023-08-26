import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

interface IsSignedInProviderProps {
    children: React.FunctionComponent;
}


export const IsSignedInProvider = ({ children }: IsSignedInProviderProps) => {
    const auth = getAuth();
    const [isSignedIn, setIsSignedIn] = useState(false);
    onAuthStateChanged(auth, (user) => user ? setIsSignedIn(true) : setIsSignedIn(false));

    return children({ isSignedIn })

}