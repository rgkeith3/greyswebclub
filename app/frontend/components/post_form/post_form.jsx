import React from 'react'
import { Redirect } from 'react-router'
import Dropzone from 'react-dropzone'

import FileDrop from './file_drop'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user_id: this.props.user_id,
      post_type: this.props.post_type,
      content: "",
      attachment: null,
      attachmentUrl: null,
      fireRedirect: false
    }
    this.updateAttachment = this.updateAttachment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const attachment = this.state.attachment

    const formData = new FormData()
    formData.append('post[user_id]', this.state.user_id)
    formData.append('post[post_type]', this.state.post_type)
    formData.append('post[content]', this.state.content)
    formData.append('post[attachment]', attachment)

    this.props.requestCreatePost(formData)

    // const post = Object.assign({}, this.state)
    // this.props.requestCreatePost(post)
    this.setState({ fireRedirect: true })
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value })
  }


  updateAttachment(files) {
    const attachment = files[0]
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      this.setState({ attachmentUrl: fileReader.result, attachment})
    }

    if (attachment) {
      fileReader.readAsDataURL(attachment)
    } else {
      this.setState({ attachmentUrl: "", attachment: null })
    }

  }

  render() {
    const { fireRedirect } = this.state

    const droppedFile = () => {
      if (this.state.attachment) {
        return (
          <p>{this.state.attachment.name}: {this.state.attachment.size} bytes</p>
        )
      }
    }

    const postField = (formType) => {
      switch (formType) {
        case 'txt':
        case 'url':
          return (
            <input type='text'
              placeholder='...'
              value={this.state.content}
              onChange={this.update('content')} />)
        case 'pic':
        case 'vid':
        case 'aud':
          return (
            <div className="dropzone">
              <Dropzone onDrop={this.updateAttachment} >
                <p>drop file</p>
              </Dropzone>
              <img className='preview' src={this.state.attachmentUrl} />
              {droppedFile()}
            </div>
          )
          // <div className='file-upload'>
          //   <input type='file' onChange={this.updateAttachment} />
          //   <img className='preview' src={this.state.attachmentUrl} />
          // </div>
        default:
          (<h1>wattchu talkin bout willis</h1>)
      }
    }

    return (
      <form className='post-form' onSubmit={this.handleSubmit}>
        <h1>new {this.state.post_type}</h1>
          { postField(this.state.post_type) }
          { fireRedirect && (<Redirect to='/dashboard' />)}
        <button>post</button>
      </form>
    )
  }
}

export default PostForm
