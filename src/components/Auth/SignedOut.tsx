import { useSignedUser } from "./user.store";

export const SignedOut = ({ children }) => {
    const { signedUser } = useSignedUser();

    return (
        <>
            {signedUser === null
                ? <>{children}</>
                : <>
                    {/* <p>User IS signed in: will redirect</p> */}
                </>
            }
        </>
    )
}