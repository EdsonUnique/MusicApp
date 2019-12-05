import React,{Component} from 'react'
import Nav from "@/components/music/Nav";
import PlayPannel from "@/components/music/PlayPannel";
import styles from './playMusic.less'

class PlayMusic extends Component {

  constructor(props){
    super(props);
    this.state={

    }
  };

  render(){

    const {
      song,songList,
    }=this.props;

    return(
      <div className={styles.container} >

        <Nav isIndex={false} musicId={1} title={''}/>
        <PlayPannel song={song} songList={songList}/>

      </div>
    )

  }

}

export default PlayMusic;
