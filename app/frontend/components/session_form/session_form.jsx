import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.guestLogin = this.guestLogin.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/')
    }
  }

  guestLogin(e) {
    e.preventDefault()
    this.props.loginAsGuest()
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  renderErrors() {
    return(
      <ul className='session-errors'>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    const button = (this.props.formType === 'login') ? "Login": "Sign Up"
    
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <header>
          <h1>{button}</h1>
        </header>
        {this.renderErrors()}
        <input type="text"
               placeholder="Username"
               value={this.state.username}
               onChange={this.update('username')} />
        <input type="password"
               placeholder="Password"
               value={this.state.password}
               onChange={this.update('password')} />
        <div>
          <button>{button}</button>
          <button onClick={this.guestLogin}>Login as guest</button>
        </div>
      </form>
    )
  }
}

export default withRouter(SessionForm)
