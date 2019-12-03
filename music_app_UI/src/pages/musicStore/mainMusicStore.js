import React, { PureComponent } from 'react'
import withRouter from 'umi/withRouter'
import { connect } from 'dva'
import SongList from "../../components/music/songList";
import Nav from "@/components/music/Nav";
import RotationImage from "@/components/music/RotationImage"
import SearchButton from '@/components/music/SearchButton'
import styles from "./mainMusicStore.less"

@connect(({ music })=>({
  music,
}))
class MainMusicStore extends PureComponent{

  componentDidMount(){

    const {dispatch}=this.props;

    dispatch({
      type:'music/fetchMusicList',
    })

  }

  render() {

    const {

      music:{
        musicList:musicList,
      },
      musicId,

    }=this.props;

    return (
      <div>
        <div className={styles.mainBody}>
          <Nav/>

          <RotationImage/>

          <SearchButton/>

          <SongList songs={musicList} songSum={musicList.length} musicId={musicId}></SongList>
        </div>
      </div>
    )
  }

}

export default MainMusicStore;
