import React, { PureComponent } from 'react'
import Nav from '@/components/music/Nav'
import {List,WingBlank} from 'antd-mobile'
import MusicListIcon from '@/assets/icon/歌单.svg'
import { connect } from 'dva'
import router from 'umi/router'

const Item = List.Item


class MainUserCenter extends PureComponent{

  handleMusicList=()=>{

    router.push("/userMusicList");

  };

  render() {

    return (
      <div>
        <Nav/>
        <WingBlank>
          <List style={{marginTop:'50px'}}>
            <Item thumb={MusicListIcon} arrow={"horizontal"} onClick={()=>this.handleMusicList()}>我的歌单</Item>
          </List>
        </WingBlank>
      </div>
    );
  }

}

export default MainUserCenter
