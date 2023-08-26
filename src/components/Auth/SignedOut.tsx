import { IsSignedInProvider } from "./IsSignedInProvider";

export const SignedOut = ({ children }: React.PropsWithChildren) => (
    <IsSignedInProvider>
        {(props) => (
            <>
                {!props.isSignedIn
                    ? <>{children}</>
                    : <>
                        {/* <p>User IS signed in: will redirect</p> */}

                    </>
                }
            </>
        )}
    </IsSignedInProvider>
)