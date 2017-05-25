import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.state = {
      query: ""
    }
  }

  handleSearchInput(e) {
    this.setState({query: e.target.value}, () => {
      console.log(this.state.query)
    })
  }

  handleKeyDown(e) {
    console.log(e.keyCode)
  }

  logout(e) {
    e.preventDefault()
    this.props.logout()
      .then(this.props.history.push('/welcome'))
  }

  render() {
    if (this.props.currentUser) {
      return (
        <section className="greeting">
          <div className="left-side">
            <input type="text"
                   value={this.state.query}
                   placeholder="Search"
                   onChange={this.handleSearchInput}
                   onKeyDown={this.handleKeyDown}/>
          </div>
          <div className="right-side">
            <Link to='/explore'>
              <i className='fa fa-globe fa-lg'></i>
            </Link>
            <Link to='/dashboard'>
              <h1>{this.props.currentUser.username}</h1>
            </Link>
            <button onClick={this.logout}>Logout</button>
          </div>
        </section>
      )
    } else {
      let link
      if (this.props.pathname === '/login') {
        link = (<Link to='/signup'>
                  Sign Up
                </Link>)
      } else if (this.props.pathname === '/signup') {
        link = (<Link to='/login'>
                  Login
                </Link>)
      } else {
        link = (<div>
                  <Link to='/signup'>
                    Sign Up
                  </Link>
                  <Link to='/login'>
                    Login
                  </Link>
                </div>)
      }
      return (
        <section className="greeting">
          <div className="left-side">
            <input type="text"
                   value={this.state.query}
                   placeholder="Search"
                   onChange={this.handleSearchInput}
                   onKeyDown={this.handleKeyDown}/>
          </div>
          <div className="right-side">
            {link}
          </div>
        </section>
      )
    }
  }
}

export default withRouter(Greeting)
