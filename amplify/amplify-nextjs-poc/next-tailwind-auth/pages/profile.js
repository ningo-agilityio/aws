import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import '../configureAmplify'
import SignIn from '../components/SignIn'
import Greeting from '../components/Greeting'

const initialState = { email: '', password: '', authCode: '' }
const Profile = () => {
  const [formState, setFormState] = useState(initialState)
  const [user, setUser] = useState(null)

  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    (async () => {
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
    })()
  }, [])

  return (
    <div className="flex justify-center items-center mt-20">
      {
        !user ? 
        <SignIn onChange={onChange} onSignIn={() => {
          Auth.signIn(formState.email, formState.password)
        }} />
        :
        <Greeting user={user} onSignOut={() => setUser(null)}/>
      }
    </div>
  )
}

export default Profile
