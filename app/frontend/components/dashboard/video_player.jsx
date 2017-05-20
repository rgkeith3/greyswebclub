import React from 'react'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      played: 0,
      volume: .7,
      oldVolume: 0
    }
    this.togglePlay = this.togglePlay.bind(this)
    this.toggleFullscreen = this.toggleFullscreen.bind(this)
    this.updateProgressBar = this.updateProgressBar.bind(this)
    this.toggleMute = this.toggleMute.bind(this)
    this.seek = this.seek.bind(this)
    this.updateVolume = this.updateVolume.bind(this)
    this.volume = this.volume.bind(this)
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
    if ( this.state.volume !== 0 ) {
      let oldVolume = this.state.volume
      let volume = 0
      this.setState({volume, oldVolume}, () => this.refs.video.volume = this.state.volume)
    } else {
      let oldVolume = 0
      let volume = this.state.oldVolume
      this.setState({volume, oldVolume}, () => this.refs.video.volume = this.state.volume)
    }
  }

  seek(e) {
    let time = this.refs.video.duration * (e.target.value / 100)
    this.refs.video.currentTime = time
  }

  updateVolume(e) {
    let volume = e.target.value
    this.setState({volume}, () => this.refs.video.volume = this.state.volume)
  }

  playPause(iconSize) {
    let icon
    if (this.refs.video) {
      icon = this.refs.video.paused ?
        "fa fa-play" + iconSize :
        "fa fa-pause" + iconSize
    } else {
      icon = "fa fa-play" + iconSize
    }
    return (<i className={icon}></i>)
  }

  volume() {
    let icon
    switch (true) {
      case (this.state.volume === 0): icon = "fa fa-volume-off"
      case (this.state.volume < .5 && this.state.volume > 0): icon = "fa fa-volume-down"
      default: icon = "fa fa-volume-up"
    }
    return (<i className={icon}></i>)
  }

  render() {

    return (
      <div className="video-player" >
        <div className='play-pause-overlay' onClick={this.togglePlay}>
          { this.playPause(" fa-4x") }
        </div>
        <div className='controls'>
          <div className='button' onClick={this.togglePlay}>
            { this.playPause("") }
          </div>
          <input type='range' id='seek' onChange={this.seek}
                 value={this.state.played}/>
               <div className="button" onClick={this.toggleMute}>
                 { this.volume() }
               </div>
          <input type='range' id='volume' min='0' max='1' step='0.1'
                 value={this.state.volume}
                 onChange={this.updateVolume}/>
          <div className='button' onClick={this.toggleFullscreen}>
            <i className='fa fa-arrows-alt'></i>
          </div>
        </div>
        <video ref='video' loop>
          <source src={this.props.url} type="video/mp4"/>
        </video>
      </div>
    )}
}

export default VideoPlayer
