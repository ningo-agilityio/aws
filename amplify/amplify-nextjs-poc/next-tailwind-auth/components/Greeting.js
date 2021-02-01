import React from 'react'
import { Auth } from 'aws-amplify'

const Greeting = ({ user, onSignOut }) => (
  <div className="bg-white py-14 shadow-lg rounded p-10">
    <label>Welcome, { user.username }</label>
    <button className="btn btn-danger block py-2 px-10 rounded bg-red-500 mb-10 text-white focus:outline-none" onClick={() => {
      Auth.signOut();
      onSignOut();
    }}>Sign out</button>
  </div>
)

export default Greeting