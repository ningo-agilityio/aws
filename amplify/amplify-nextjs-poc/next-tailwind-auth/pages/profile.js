import { useEffect } from 'react'
import { Auth } from 'aws-amplify'
import '../configureAmplify'

export default function Profile() {
  useEffect(() => {
    checkUser()

    const checkUser = async () => {
      const user = await Auth.currentAuthenticatedUser()
      console.log(user)
    }
  }, [])

  return (
    <div>
      <button className="btn" onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Sign in with Google</button>
      <button className="btn" onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>Sign in with Facebook</button>
      <button className="btn">Sign out</button>
    </div>
  )
}
