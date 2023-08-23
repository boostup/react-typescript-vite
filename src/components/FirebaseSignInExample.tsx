import { SignedIn, SignedOut } from "./Auth"
import { User } from "./Auth/user.store"

interface FirebaseSignInExampleProps {
    signedUser: User
    handleLogout: () => {}
    handleLogin: () => {}
    authError: string
}

export const FirebaseSignInExample = (props: FirebaseSignInExampleProps) => {

    return (
        <>
            <SignedIn>
                <p>Welcome {props.signedUser?.displayName}</p>
                <button onClick={props.handleLogout}>
                    Sign out
                </button>
            </SignedIn>
            <SignedOut>
                <button className="login__button" onClick={props.handleLogin}><i className="fab fa-google"></i>
                    Sign with Google
                </button>
                {props.authError && <p><i>{props.authError}</i></p>}
            </SignedOut>
        </>
    )
}