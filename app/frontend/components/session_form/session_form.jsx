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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/')
    }
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
    const link = (this.props.formType === 'login') ?
                    () => (<Link to='/signup'>Sign Up</Link>) :
                    () => (<Link to='/login'>Login</Link>)
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
        <button>{button}</button>
      </form>
    )
  }
}

export default withRouter(SessionForm)
