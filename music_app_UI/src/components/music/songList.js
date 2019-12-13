import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import router from 'umi/router'
import styles from './songList.less'
import {List, Modal, Button, WhiteSpace, WingBlank, Toast} from 'antd-mobile';
import PlayIcon  from '../../assets/icon/播放.svg'
import PauseIcon from '../../assets/icon/暂停.svg'
import MusicIcon from '../../assets/icon/音符.svg'
import NoResult from '@/components/music/NoResult'

const Item = List.Item;
const operation = Modal.operation;


class SongList extends PureComponent{

  constructor(props){
    super(props)

    this.state={
      thumb_img:PauseIcon,
      record_id:-1,//记录正在播放的歌曲id

    }

  }

  componentDidMount(){

    const audioEl=window.parent.document.getElementById("audioIframe").contentWindow.document.getElementById("audioId");

    let songId=audioEl.getAttribute("songId");

    if(audioEl.paused === true){
      this.setState({
        thumb_img:PauseIcon,
        record_id:-1,//记录正在播放的歌曲id

      });
    }else{
      this.setState({
        thumb_img:PauseIcon,
        record_id:songId,//记录正在播放的歌曲id

      });

      let el=window.document.getElementById(songId);
      if(el){
        el.setAttribute("src",PlayIcon);
      }
    }
  };

  handlePlayMusic=(path)=>{

    router.push({
      pathname:path,
      query:{
        song:this.props.song,
        songList:this.props.songs,
      }
    })
  };

    handleHeader=(songSum,title)=>{
      return (
        <div className={styles.header}>
          <span className={styles.headerLeft}>{title}</span>
          <span className={styles.headerRight}>共 {songSum} 首</span>
        </div>

      )
    };

    handleFooter=()=>{
      return (

        <div className={styles.footer}>
          *_* 我也是有底线的 *_*
        </div>

      )
    };

  handlePlayImage=(value,songArrayId)=>{


    const el= window.parent.document.getElementById('audioIframe').contentWindow.document.getElementById("audioId");

    if(el){
      if(this.state.record_id === -1 && value.songId>-1){//无歌曲播放

        window.document.getElementById(value.songId).setAttribute("src",PlayIcon);

        el.setAttribute('src',value.audioPath);
        el.setAttribute('songId',value.songId);
        el.play();

        this.setState({
          record_id:value.songId,
        });
        router.push({
          pathname:'/playMusic',
          query:{
            song:value,
            songList:this.props.songs,
            songArrayId:songArrayId,
          }
        })
      }else if(this.state.record_id !== -1 && value.songId>-1){//有歌曲播放

        if(this.state.record_id === value.songId){
          //点击的是正在播放的歌曲则暂停播放
          //直接跳转
          router.push({
            pathname:'/playMusic',
            query:{
              song:value,
              songList:this.props.songs,
              songArrayId:songArrayId,
            }
          })
          // window.document.getElementById(value.songId).setAttribute("src",PauseIcon);
          // el.setAttribute('songId','-1');
          // el.pause()
          //
          // this.setState({
          //   record_id:-1, //表示现在没有歌曲播放
          // })
        }else{
          //点击的是另外未播放的歌曲
          //将正在播放的歌曲停止
          el.pause();
          window.document.getElementById(this.state.record_id).setAttribute("src",PauseIcon);
          //更换歌曲
          el.setAttribute("src",value.audioPath);
          el.setAttribute('songId',value.songId);
          el.play()
          window.document.getElementById(value.songId).setAttribute("src",PauseIcon);
          //更新正在播放的歌曲
          this.setState({
            record_id:value.songId,
          })
          router.push({
            pathname:'/playMusic',
            query:{
              song:value,
              songList:this.props.songs,
              songArrayId:songArrayId,
            }
          })
        }

      }
    }
    else{
      Toast.fail("服务器错误！")
    }

  };

    render() {

      const {
        songSum=0,
        songs,
        PlayMusicPath='/playMusic',
        title='歌曲库',

      }=this.props;


      return(

        <div>



          <List
            renderHeader={() => this.handleHeader(songSum,title)}
            renderFooter={() => this.handleFooter()}
            className={styles.myList}
          >
            {
              songs && songs.length<=0?<NoResult content={''}/>:
              songs && songs!==undefined && songs.map((value,key)=>{

                return(

                  <div className={styles.myItem}>
                    <Item
                      thumb={MusicIcon}
                      extra={ <img style={{zIndex:2}} src={this.state.thumb_img} id={value.songId} ></img>}
                      style={{width:"100%"}}
                      onClick={()=>this.handlePlayImage(value,key)}
                      className={styles.songItem}
                    >
                      <span className={styles.songName}>{value.songName}</span>
                      <span className={styles.songAuthor}>{value.songAuthor}</span>

                    </Item>
                    {/*<img id={key} style={{width:"22px",height:"22px",marginRight:"10px"}} src={this.state.thumb_img} onClick={()=>this.handlePlayImage(value)}></img>*/}
                  </div>
                )

              })
            }

          </List>

        </div>

      )

    }

}

export default SongList;
