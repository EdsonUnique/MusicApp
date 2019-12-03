import React,{Component} from 'react'
import Nav from "@/components/music/Nav";
import PlayPannel from "@/components/music/PlayPannel";

class PlayMusic extends Component {

  render(){

    const {
      location:{
        query:{
          payload:payload,
        }
      }
    }=this.props;

    return(
      <div>

        <Nav isIndex={false} musicId={payload}/>
        {/*<PlayPannel/>*/}

      </div>
    )

  }

}

export default PlayMusic;
