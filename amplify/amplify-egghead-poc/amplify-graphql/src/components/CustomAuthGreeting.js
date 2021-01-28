import React from 'react'
import { NavBar, Nav, NavRight, Greetings } from 'aws-amplify-react'

class AuthGreeting extends Greetings {
    constructor(props){
      super(props);
    }

  render() {
    console.log(this.props)
    const theme = this.props.theme;
    return(
      <NavBar theme={theme}>
        <Nav theme={theme}>
          <NavRight theme={theme}>
          <button>Sign out</button>
        </NavRight>
        </Nav>
      </NavBar>
    )
  }
}

export default AuthGreeting