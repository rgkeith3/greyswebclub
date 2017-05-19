import React from 'react'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      played: 0,
      volume: .7,
    }
    this.togglePlay = this.togglePlay.bind(this)
    this.updateProgressBar = this.updateProgressBar.bind(this)
    this.toggleMute = this.toggleMute.bind(this)
    this.seek = this.seek.bind(this)
    this.updateVolume = this.updateVolume.bind(this)
  }

  componentDidMount() {
    this.refs.audio.addEventListener('timeupdate', this.updateProgressBar )
  }

  updateProgressBar() {
    let percentage = Math.floor((100 / this.refs.audio.duration) *
      this.refs.audio.currentTime)

    this.setState({played: percentage})
  }

  togglePlay(e) {
    this.refs.audio.paused ?
      this.refs.audio.play() : this.refs.audio.pause()
  }

  toggleMute(e) {
    this.refs.audio.muted ?
      this.refs.audio.muted = false : this.refs.audio.muted = true
  }

  seek(e) {
    let time = this.refs.audio.duration * (e.target.value / 100)
    this.refs.audio.currentTime = time
  }

  updateVolume(e) {
    let volume = e.target.value
    this.setState({volume}, () => this.refs.video.volume = this.state.volume)
  }

  render() {
    return(
      <div className='audio-player'>
        <div className='controls'>
          <button onClick={this.togglePlay}>play/pause</button>
          <input type='range' id='seek' onChange={this.seek}
                 value={this.state.played}/>
          <button onClick={this.toggleMute}>mute</button>
          <input type='range' id='volume' min='0' max='1' step='0.1'
                 value={this.state.volume}
                 onChange={this.updateVolume}/>
        </div>
        <audio ref='audio' preload="auto">
          <source src={this.props.url} type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}

export default AudioPlayer
