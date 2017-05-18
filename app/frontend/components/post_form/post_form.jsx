import React from 'react'
import { Redirect } from 'react-router'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.user_id,
      post_type: this.props.post_type,
      content: "",
      fireRedirect: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('mounting');
  }

  componentWillUnmount() {
    console.log('unmounting');
  }

  handleSubmit(e) {
    e.preventDefault()
    const post = Object.assign({}, this.state)
    this.props.requestCreatePost(post)
    this.setState({ fireRedirect: true })
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }

  render() {
    console.log(this.state);
    const { fireRedirect } = this.state

    return(
      <form className='post-form' onSubmit={this.handleSubmit}>
        <h1>new {this.state.post_type}</h1>
        <input type='text'
               placeholder='...'
               value={this.state.content}
               onChange={this.update('content')} />
             { fireRedirect && (<Redirect to='/dashboard' />)}
      </form>
    )
  }
}

export default PostForm
