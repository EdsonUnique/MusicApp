import React,{Component} from 'react';
import Nav from '@/components/music/Nav'
import {List,WingBlank,SwipeAction,NoticeBar,Icon,WhiteSpace} from 'antd-mobile'
import Icon1 from '@/assets/icon/歌单收录.svg';
import NoResult from '@/components/music/NoResult'
import { connect } from 'dva'
import router from 'umi/router'

const Item = List.Item;

@connect(({musicList})=>({
  musicList,
}))
class UserMusicList extends Component{

  componentDidMount(){

    const{dispatch}=this.props;

    dispatch({
      type:"musicList/fetchMusicLists",
    })

  };

  handleFetchSongs=(songListId,title)=>{

    const{dispatch}=this.props;
    dispatch({
      type:'musicList/fetchSongs',
      payload:{
        songListId,
      }
    }).then(()=>{
      router.push({
        pathname:'/listSongs',
       query:{
         songs:JSON.stringify(this.props.musicList.songs),
         title,
       }
      })
    })



  };

  render() {

    const{
      musicList:{
        musicLists,
        songs,
      }
    }=this.props;

    return (
      <div>
        <Nav isIndex={false} title={''} color={"#1296db"}/>
        <NoticeBar style={{marginTop:'50px'}}  >
          点击查看歌单，左滑有更多操作哦！
        </NoticeBar>
        <WhiteSpace size={"xs"}/>
        {/*<WingBlank>*/}
          <List>

              {
                musicLists && musicLists.length<=0?<NoResult/>:
                  musicLists.map((value,key)=>{
                    return(
                      <SwipeAction
                        style={{ backgroundColor: 'gray' }}
                        autoClose
                        right={[
                          {
                            text: 'button1',
                            onPress: () => alert("cancel"),
                            style: { backgroundColor: '#ddd', color: 'white' },
                          },
                          {
                            text: 'button2',
                            onPress: () => alert("delete"),
                            style: { backgroundColor: '#F4333C', color: 'white' },
                          },
                        ]}
                      >
                        <Item thumb={Icon1} onClick={()=>this.handleFetchSongs(value.songListId,value.songListName)}>
                          {value.songListName}
                        </Item>
                      </SwipeAction>
                    )
                  })
              }


          </List>
        {/*</WingBlank>*/}
      </div>
    )
  }


}

export default UserMusicList;
