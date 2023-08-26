import './App.css'
import { SignedIn } from './components/Auth'
import { SignInProvider } from './components/Auth/SignInProvider'
import { FirebaseReadExample } from './components/FirebaseReadExample'
import { FirebaseSignInExample } from './components/FirebaseSignInExample'
import { FirebaseWriteExample } from './components/FirebaseWriteExample'

function App() {

  return (
    <>
      <SignInProvider>
        {(props) =>
          (<FirebaseSignInExample {...props} />)}
      </SignInProvider>
      <SignedIn>
        <FirebaseWriteExample />
        <FirebaseReadExample />
      </SignedIn>
    </>
  )
}

export default App
