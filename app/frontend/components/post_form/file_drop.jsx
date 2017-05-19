import React from 'react'
import Dropzone from 'react-dropzone'

class FileDrop extends React.Component {
  constructor() {
    super()
    this.state = { file: null }
  }

  onDrop(file) {
    this.setState({file: file[0]}, this.props.updateAttachment(file))

  }

  render() {
    const droppedFile = () => {
      if (this.state.file) {
        return (
          <p>{this.state.file.name}: {this.state.file.size} bytes</p>
        )
      }
    }

    return (
      <section>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop.bind(this)}>
            <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
        <aside>
          {droppedFile()}
        </aside>
      </section>
    );
  }
}

export default FileDrop


    // if (file) {
    //   fileReader.readAsDataURL(file)
    // } else {
    //   this.setState({ attachmentUrl: "", attachment: null })
    // }
