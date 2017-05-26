import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { debounce } from 'lodash'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
    this.handleSearchInput = this.handleSearchInput.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.search = debounce(this.search, 500)
    this.results = this.results.bind(this)
    this.exitSearch = this.exitSearch.bind(this)
    this.state = {
      query: ""
    }
  }

  handleSearchInput(e) {
    this.setState({query: e.target.value}, () => {
      this.search()
    })
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.search()
    }
  }

  search() {
    if (this.state.query.length > 0) {
      this.props.requestSearch(this.state.query)
    } else {
      this.props.clearSearch()
    }
  }

  logout(e) {
    e.preventDefault()
    this.props.logout()
      .then(this.props.history.push('/'))
  }

  exitSearch() {
    $('.search-results').addClass('exit-search')
    setTimeout(() => this.props.clearSearch(), 500)
    setTimeout(() => this.setState({query: ""}), 500)
    document.removeEventListener('click', this.exitSearch)
  }

  results() {
    if (this.props.results.posts || this.props.results.users) {
      document.addEventListener('click', this.exitSearch)
      let users
      if (this.props.results.users.length > 0) {
        users = (
          <div className="user-results">
            <h1>users</h1>
            <ul>
              {this.props.results.users.map(user => (
                <li key={user.id}>
                  <Link to={`/user/${user.id}`}>
                    {user.username}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      }
      let posts
      if (this.props.results.posts.length > 0) {
        posts = (
          <div className="post-results">
            <h1>posts</h1>
            <ul>
              {this.props.results.posts.map(post => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>
                    {post.content}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )
      }
      return (
        <div className="search-results">
          {users}
          {posts}
        </div>
      )
    }
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
            { this.results() }
          </div>
          <div className="right-side">
            <Link to='/explore'>
              <i className='fa fa-globe fa-lg'></i>
            </Link>
            <Link to='/dashboard'>
              <i className='fa fa-home fa-lg'></i>
            </Link>
            <Link to={`/user/${this.props.currentUser.id}`}>
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
            { this.results() }
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
