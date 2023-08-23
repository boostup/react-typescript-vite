import { SignedIn, SignedOut } from "./Auth"

export const FirebaseSignInExample = ({ signedUser, handleLogin, handleLogout, authError }) => {

    return (
        <>
            <SignedIn>
                <p>Welcome {signedUser?.displayName}</p>
                <button onClick={handleLogout}>
                    Sign out
                </button>
            </SignedIn>
            <SignedOut>
                <button className="login__button" onClick={handleLogin}><i className="fab fa-google"></i>
                    Sign with Google
                </button>
                {authError && <p><i>{authError}</i></p>}
            </SignedOut>
        </>
    )
}