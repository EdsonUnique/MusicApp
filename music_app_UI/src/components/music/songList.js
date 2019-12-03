import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import router from 'umi/router'
import styles from './songList.less'
import { List,Modal, Button, WhiteSpace, WingBlank  } from 'antd-mobile';
import PlayIcon  from '../../assets/icon/播放.svg'
import PauseIcon from '../../assets/icon/暂停.svg'
import MusicIcon from '../../assets/icon/音符.svg'

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
   const keyId=window.g_history.location.musicId || -1;
   const is_on=window.g_history.location.is_on || false;
   if(is_on !==undefined && is_on==true){
     window.document.getElementById(keyId).setAttribute("src",PlayIcon);
   }else if(is_on !==undefined && is_on!==true){
     window.document.getElementById(keyId).setAttribute("src",PauseIcon);
   }

  };

    handleHeader=(songSum)=>{
      return (
        <div className={styles.header}>
          <span className={styles.headerLeft}>歌曲库</span>
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

  handlePlayImage=(keyId)=>{


    if(this.state.record_id === -1 && keyId>-1){//无歌曲播放

      window.document.getElementById(keyId).setAttribute("src",PlayIcon);

      window.document.getElementById(keyId+'song').play();

      this.setState({
        record_id:keyId,
      });
      router.push({
        pathname:'/musicStore/playMusic',
        query:{
          payload:keyId,
        }
      })
    }else if(this.state.record_id !== -1 && keyId>-1){//有歌曲播放

      if(this.state.record_id === keyId){
        //点击的是正在播放的歌曲则暂停播放
        window.document.getElementById(keyId).setAttribute("src",PauseIcon);
        window.document.getElementById(keyId+'song').pause()

        this.setState({
          record_id:-1, //表示现在没有歌曲播放
        })
      }else{
        //点击的是另外未播放的歌曲
        window.document.getElementById(keyId).setAttribute("src",PlayIcon);
        window.document.getElementById(keyId+'song').play()
        //并且将正在播放的歌曲停止
        window.document.getElementById(this.state.record_id).setAttribute("src",PauseIcon);
        window.document.getElementById(this.state.record_id+'song').pause()
        //更新正在播放的歌曲
        this.setState({
          record_id:keyId,
        })
        router.push({
          pathname:'/musicStore/playMusic',
          query:{
            payload:keyId,
          }
        })
      }

    }

  };

    render() {

      const {
        songSum=12,
        songs,

      }=this.props;


      return(

        <div>



          <List
            renderHeader={() => this.handleHeader(songSum)}
            renderFooter={() => this.handleFooter()}
            className={styles.myList}
          >
            {
              songs && songs.map((value,key)=>{

                return(

                  <div className={styles.myItem}>
                    <Item
                      thumb={MusicIcon}
                      // extra={ <img style={{zIndex:2}} src={PauseIcon} onClick={()=>this.handleTest()}></img>}
                      style={{width:"90%"}}
                      onClick={() => operation([
                        { text: '创建歌单', onPress: () => console.log('标为未读被点击了') },
                        { text: '收藏到歌单', onPress: () => console.log('置顶聊天被点击了') },
                      ])}
                      className={styles.songItem}
                    >
                      <span className={styles.songName}>{value.songName}</span>
                      <span className={styles.songAuthor}>{value.songAuthor}</span>

                    </Item>
                    <audio id={key+'song'}>
                      <source src={value.audioPath} type="audio/mpeg"/>
                    </audio>
                    <img id={key} style={{width:"22px",height:"22px",marginRight:"10px"}} src={this.state.thumb_img} onClick={()=>this.handlePlayImage(key)}></img>
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
