import React,{Component} from 'react';
import Nav from '@/components/music/Nav'
import SongList from '@/components/music/songList'
import { WhiteSpace,WingBlank } from 'antd-mobile'


class ListSongs extends Component{

  render() {

    const {
      title:title,
    }=this.props.location.query

    const songs=JSON.parse(this.props.location.query.songs)

    return (
      <div>
        <Nav isIndex={false} color={"#1296db"} title={''}/>
        <WhiteSpace size={"lg"} style={{marginTop:"30px"}}/>
        <WingBlank>
          <SongList songs={songs} songSum={songs && songs.length} title={title}/>
        </WingBlank>
      </div>
    )
  }


}

export default ListSongs;
