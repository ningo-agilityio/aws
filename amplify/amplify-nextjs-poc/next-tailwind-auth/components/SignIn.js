import React from 'react'
import { Auth } from 'aws-amplify'

const SignIn = ({ onChange, onSignIn }) => (
  <div className="bg-white py-14 shadow-lg rounded p-10">
    <p className="text-2xl font-black">Sign in to your account</p>
    <div className="mt-10">
      <label className="text-sm">Email</label>
      <input onChange={onChange} name="email" className="rounded border-gray-300 border-2 p-2 block w-full" />
    </div>
    <div className="mt-2 mb-4">
      <label className="text-sm">Password</label>
      <input onChange={onChange} name="password" type="password" className="rounded border-gray-300 border-2 p-2 block w-full" />
    </div>
    <button className="btn btn-primary block py-2 px-10 rounded bg-gray-300 mb-4 text-black focus:outline-none w-full" onClick={onSignIn}>Sign in</button>
    <div className="bg-gray-100 h-1 block w-full mb-4"></div>
    <button className="btn btn-primary block py-2 px-10 rounded bg-red-700 mb-2 text-white focus:outline-none w-full" onClick={() => Auth.federatedSignIn({ provider: "Google" })}>Sign in with Google</button>
    <button className="btn btn-facebook block py-2 px-10 rounded bg-blue-800 mb-2 text-white focus:outline-none w-full" onClick={() => Auth.federatedSignIn({ provider: "Facebook" })}>Sign in with Facebook</button>
  </div>
)

export default SignIn