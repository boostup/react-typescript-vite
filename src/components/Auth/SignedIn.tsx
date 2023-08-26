import { IsSignedInProvider } from "./IsSignedInProvider";

export const SignedIn = ({ children }: React.PropsWithChildren) => (
    <IsSignedInProvider>
        {(props) => (
            <>
                {props.isSignedIn
                    ? <>{children}</>
                    : <>
                        {/* <p>User NOT signed in: will redirect</p> */}
                    </>
                }
            </>
        )}
    </IsSignedInProvider>
)