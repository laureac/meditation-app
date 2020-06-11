import React from 'react';
import './player.scss';
import { Howl} from 'howler';

class PlayerContenaire extends React.Component { 
  constructor(props){
    super(props)
    this.state = {
      playing: false,
      currentTime: ''
    }
    this.audio= new Howl({
      src: ['/6minutes.mp3'],
      format: ['mp3'],
      autoplay: false,
      loop: false,
      volume: 0.5,
    })
    this.handlePlay = this.handlePlay.bind(this)
  }


  componentDidMount() {
    setInterval(() => {
      this.setState({currentTime: this.audio.seek()})
    }, 1000)
  }
  

 time_convert(secs)
 { 
  let minutes = Math.floor(secs / 60) || 0;
  let seconds = Math.floor(secs - minutes * 60) || 0;
  if(secs){
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }        
}

handlePlay () {
  if(this.state.playing===false){
    this.audio.play()
  this.setState({
    playing: true
  })}else{
    this.audio.pause()
    this.setState({
      playing: false
    })}
}
stop = () =>{
  this.audio.stop();
  this.setState({
    playing: false
  })
}
  
  render(){
    return (
      <>
      <div className="TrackList">
        <div className='toggle'>
        {this.state.playing === false && 
        (<button className='play' onClick={this.handlePlay}><span><i className="fas fa-play" /></span></button>  )}
        {this.state.playing === true && 
        (<button className='play' onClick={this.handlePlay}><span><i className="fas fa-pause" /></span></button>)}
        <button className='stop' onClick={this.stop}><span><i className="fas fa-stop"></i></span></button>
        </div>
        <div className='time'>{this.time_convert(this.state.currentTime)}</div>
        </div>
        </>
    )
  }
  
}

export default PlayerContenaire;

