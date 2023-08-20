import { useSignedUser } from './user.store';

export const SignedIn = ({ children }) => {
    const { signedUser } = useSignedUser();

    return (
        <>
            {signedUser !== null
                ? <>{children}</>
                : <>
                    {/* <p>User NOT signed in: will redirect</p> */}
                </>
            }
        </>
    )

}