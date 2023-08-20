import './App.css'
import { SignInProvider } from './components/Auth/SignInProvider'
import { FirebaseSignInExample } from './components/FirebaseSignInExample'

function App() {

  return (
    <>
      <SignInProvider>
        {(props) =>
          (<FirebaseSignInExample {...props} />)}
      </SignInProvider>
    </>
  )
}

export default App
