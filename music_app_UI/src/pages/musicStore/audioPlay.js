import React,{Component} from 'react'


class AudioPlay extends Component{

  render(){


    return(
      <audio id={'audioId'} >
        <source src={"http://123.56.124.121:80/audio/玫瑰少年.mp3"}/>
      </audio>
    )
  }


}

export default AudioPlay;
