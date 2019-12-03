import React,{Component} from 'react'
import Nav from "@/components/music/Nav";
import PlayPannel from "@/components/music/PlayPannel";
import styles from './playMusic.less'

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
      <div className={styles.container}>

        <Nav isIndex={false} musicId={payload} title={''}/>
        <PlayPannel/>

      </div>
    )

  }

}

export default PlayMusic;
