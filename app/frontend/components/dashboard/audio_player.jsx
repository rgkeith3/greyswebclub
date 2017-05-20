import React from 'react'

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      played: 0,
      volume: .7,
      oldVolue: 0
    }
    this.togglePlay = this.togglePlay.bind(this)
    this.updateProgressBar = this.updateProgressBar.bind(this)
    this.toggleMute = this.toggleMute.bind(this)
    this.seek = this.seek.bind(this)
    this.updateVolume = this.updateVolume.bind(this)
    this.volume = this.volume.bind(this)
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
    if ( this.state.volume !== 0 ) {
      let oldVolume = this.state.volume
      let volume = 0
      this.setState({volume, oldVolume}, () => this.refs.audio.volume = this.state.volume)
    } else {
      let oldVolume = 0
      let volume = this.state.oldVolume
      this.setState({volume, oldVolume}, () => this.refs.audio.volume = this.state.volume)
    }
  }

  seek(e) {
    let time = this.refs.audio.duration * (e.target.value / 100)
    this.refs.audio.currentTime = time
  }

  updateVolume(e) {
    let volume = e.target.value
    this.setState({volume}, () => this.refs.video.volume = this.state.volume)
  }

  play_pause(iconSize) {
    let icon
    if (this.refs.audio) {
      icon = this.refs.audio.paused ?
        "fa fa-play" + iconSize :
        "fa fa-pause" + iconSize
    } else {
      icon = "fa fa-play" + iconSize
    }
    return (<i className={icon}></i>)
  }

  volume() {
    let icon
    const vol = this.state.volume
    if (vol > .5) {
      icon = 'fa fa-volume-up'
    } else if (vol < .5 && vol > 0) {
      icon = 'fa fa-volume-down'
    } else {
      icon = 'fa fa-volume-off'
    }
    return (<i className={icon}></i>)
  }

  render() {
    return(
      <div className='audio-player'>
        <div className='controls'>
          <div className='play-pause-button' onClick={this.togglePlay}>
            { this.play_pause("") }
          </div>
          <input type='range' id='seek' onChange={this.seek}
                 value={this.state.played}/>
          <div className="button" onClick={this.toggleMute}>
            { this.volume() }
          </div>
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
