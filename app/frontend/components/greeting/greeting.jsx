import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout(e) {
    e.preventDefault()
    this.props.logout()
  }

  render() {
    if (this.props.currentUser) {
      return (
        <section className="greeting">
          <h1>{this.props.currentUser.username}</h1>
          <button onClick={this.logout}>Logout</button>
        </section>
      )
    } else {
      return (
        <section className="greeting">
          <Link to='/signup'>
            Sign Up
          </Link>
          <Link to='/login'>
            Login
          </Link>
        </section>
      )
    }
  }
}

export default Greeting
