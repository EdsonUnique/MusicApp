import React,{Component} from 'react';
import Nav from '@/components/music/Nav'
import {List,Modal,SwipeAction,NoticeBar,WingBlank,WhiteSpace,Icon} from 'antd-mobile'
import Icon1 from '@/assets/icon/歌单收录.svg';
import NoResult from '@/components/music/NoResult'
import { connect } from 'dva'
import router from 'umi/router'
import styles from './UserMusicList.less'
import MusicListIcon from '@/assets/icon/新建歌单.svg'

const Item = List.Item;
const alert = Modal.alert;
const prompt = Modal.prompt;

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

  handleDeleteMusicList=(songListId)=>{

    const{dispatch}=this.props;

    dispatch({
      type:'musicList/deleteMusicList',
      payload:{
        songListId,
      }
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

  handleCreateMusicList=()=>prompt('新建歌单', '',
    [
      {
        text: '取消',
        onPress: value => new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 500);
        }),
      },
      {
        text: '确定',
        onPress: value => new Promise((resolve, reject) => {

          this.props.dispatch({
            type:'musicList/create',
            payload:{
              songListName:value,
            }
          }).then(()=>{
            //更新歌单
            this.props.dispatch({
              type:'musicList/fetchMusicLists',
            });
          })

          resolve();

          setTimeout(() => {
            reject();
          }, 1000);
        }),
      },
    ], '请输入歌单名', null, ['请输入歌单名'])

  handleHeader=()=>{
    return (
      <div className={styles.header}>
        <span className={styles.headerLeft}>我的歌单</span>
        <span className={styles.headerRight}>

          <img src={MusicListIcon} style={{width:'15px',height:'15px'}} onClick={()=>this.handleCreateMusicList()}></img>
        </span>
      </div>

    )
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
        <WingBlank>
          <List renderHeader={()=>this.handleHeader()}>
              {
                musicLists && musicLists.length<=0?<NoResult/>:
                  musicLists && musicLists.map((value,key)=>{
                    return(
                      <SwipeAction
                        style={{ backgroundColor: 'gray' }}
                        autoClose
                        right={[
                          {
                            text: '删除',
                            onPress: () => alert('删除歌单', '确定删除？', [
                              { text: '否', onPress: () => {} },
                              { text: '是', onPress: () => this.handleDeleteMusicList(value.songListId) },
                            ]),
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
        </WingBlank>
      </div>
    )
  }


}

export default UserMusicList;
