import { useSignedUser } from './user.store';

export const SignedIn = ({ children }: React.PropsWithChildren) => {
    const { signedUser } = useSignedUser();

    return (
        <>
            {signedUser
                ? <>{children}</>
                : <>
                    {/* <p>User NOT signed in: will redirect</p> */}
                </>
            }
        </>
    )

}