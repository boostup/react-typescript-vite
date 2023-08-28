import './App.css'
import { SignedIn } from './components/Auth'
import { SignInProvider } from './components/Auth/SignInProvider'
import { FirebaseReadFormsExample } from './components/FirebaseReadFormsExample'
import { FirebaseReadSampleUserExample } from './components/FirebaseReadSampleUserExample'
import { FirebaseSignInExample } from './components/FirebaseSignInExample'
import { FirebaseUpdateExample } from './components/FirebaseUpdateExample'
import { FirebaseWriteExample } from './components/FirebaseWriteExample'

function App() {

  return (
    <>
      <SignInProvider>
        {(props) =>
          (<FirebaseSignInExample {...props} />)}
      </SignInProvider>
      <SignedIn>
        <FirebaseReadSampleUserExample />
        <FirebaseWriteExample />
        <FirebaseUpdateExample />
        <FirebaseReadFormsExample />
      </SignedIn>
    </>
  )
}

export default App
