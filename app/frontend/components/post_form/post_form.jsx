import React from 'react'
import { Redirect } from 'react-router'
import Dropzone from 'react-dropzone'

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
    this.cancelPost = this.cancelPost.bind(this)
    this.update = this.update.bind(this)
    this.postField = this.postField.bind(this)
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

    this.setState({ fireRedirect: true })
  }

  cancelPost(e) {
    e.preventDefault()
    this.setState({ fireRedirect: true})
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

  postField(formType) {
    switch (formType) {
      case 'txt':
      case 'url':
        return (
          <input type='text'
            placeholder='...'
            value={this.state.content}
            onChange={this.update('content')} />)
      case 'pic':
        return (
          <div className="dropzone">
            <Dropzone onDrop={this.updateAttachment}
                      accept="image/jpeg, image/gif, image/png">
              <p>drop file</p>
            </Dropzone>
            { this.preview() }
          </div>
        )
      case 'vid':
        return (
          <div className="dropzone">
            <Dropzone onDrop={this.updateAttachment}
                      accept='video/mp4'>
              <p>drop file</p>
            </Dropzone>
            { this.preview() }
          </div>
        )
      case 'aud':
        return (
          <div className="dropzone">
            <Dropzone onDrop={this.updateAttachment}
                      accept='audio/mp3'>
              <p>drop file</p>
            </Dropzone>
            { this.preview() }
          </div>
        )
      default:
        (<h1>wattchu talkin bout willis</h1>)
    }
  }

  preview() {
    const data = (this.state.attachment) ?
      (<p>{this.state.attachment.name}: {this.state.attachment.size} bytes</p>) :
      ""
    const image = () => {
      if (this.state.attachment) {
        switch(this.state.post_type) {
          case 'pic':
            return (<img src={this.state.attachmentUrl} />)
          case 'vid':
            return (<i className="fa fa-file-video-o fa-5x" aria-hidden="true"></i>)
          case 'aud':
            return (<i className="fa fa-file-audio-o fa-5x" aria-hidden="true"></i>)
          default:
            return ""
        }
      }
    }
    return (
      <div className="preview">
        { image() }
        { data }
      </div>
    )
  }

  render() {
    const { fireRedirect } = this.state

    return (
      <form className='post-form' onSubmit={this.handleSubmit}>
        <h1>new {this.state.post_type}</h1>
          { this.postField(this.state.post_type) }
          { fireRedirect && (<Redirect to='/dashboard' />)}
        <button>post</button>
        <button onClick={this.cancelPost}>close</button>
      </form>
    )
  }
}

export default PostForm
