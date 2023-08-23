import { useSignedUser } from "./user.store";

export const SignedOut = ({ children }: React.PropsWithChildren) => {
    const { signedUser } = useSignedUser();

    return (
        <>
            {!signedUser
                ? <>{children}</>
                : <>
                    {/* <p>User IS signed in: will redirect</p> */}
                </>
            }
        </>
    )
}