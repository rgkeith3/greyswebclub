import React from 'react'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      played: 0,
      volume: .7,
    }
    this.togglePlay = this.togglePlay.bind(this)
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
    this.updateProgressBar = this.updateProgressBar.bind(this)
    this.toggleMute = this.toggleMute.bind(this)
    this.seek = this.seek.bind(this)
    this.updateVolume = this.updateVolume.bind(this)
  }

  componentDidMount() {
    this.refs.video.addEventListener('timeupdate', this.updateProgressBar )
  }

  updateProgressBar() {
    let percentage = Math.floor((100 / this.refs.video.duration) *
      this.refs.video.currentTime)

    this.setState({played: percentage})
  }

  togglePlay(e) {
    this.refs.video.paused ?
      this.refs.video.play() : this.refs.video.pause()
  }

  toggleFullscreen(e) {
    if (this.refs.video.requestFullscreen) {
      this.refs.video.requestFullscreen();
    } else if (this.refs.video.mozRequestFullScreen) {
      this.refs.video.mozRequestFullScreen(); // Firefox
    } else if (this.refs.video.webkitRequestFullscreen) {
      this.refs.video.webkitRequestFullscreen(); // Chrome and Safari
    }
  }

  toggleMute(e) {
    this.refs.video.muted ?
      this.refs.video.muted = false : this.refs.video.muted = true
  }

  seek(e) {
    let time = this.refs.video.duration * (e.target.value / 100)
    this.refs.video.currentTime = time
  }

  updateVolume(e) {
    let volume = e.target.value
    this.setState({volume}, () => this.refs.video.volume = this.state.volume)
  }

  render() {

    return (
      <div className="video-player" >
        <div className='play-pause' onClick={this.togglePlay}>
          <i className='fa fa-play-circle fa-3x' aria-hidden='true'></i>
        </div>
        <div className='controls'>
          <button onClick={this.togglePlay}>play/pause</button>
          <input type='range' id='seek' onChange={this.seek}
                 value={this.state.played}/>
          <button onClick={this.toggleMute}>mute</button>
          <input type='range' id='volume' min='0' max='1' step='0.1'
                 value={this.state.volume}
                 onChange={this.updateVolume}/>
               <button onClick={this.toggleFullscreen}>full</button>
        </div>
        <video ref='video' loop>
          <source src={this.props.url} type="video/mp4"/>
        </video>
      </div>
    )}
}

export default VideoPlayer
