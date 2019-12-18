import React,{Component} from 'react'
import styles from '@/components/music/PlayPannel.less'
import { connect } from 'react-redux'
import {WingBlank,Slider,Icon,Modal,Toast,List} from "antd-mobile";
import PauseIcon from '@/assets/icon/pause.svg';
import PlayIcon from '@/assets/icon/play.svg';
import PreIcon from '@/assets/icon/pre.svg';
import NextIcon from '@/assets/icon/next.svg';
import changeMusicIcon from '@/assets/icon/顺序播放.svg'
import RandomIcon from '@/assets/icon/randomPlay.svg';
import RepeatIcon from '@/assets/icon/单曲循环.svg';
import StoreMusic from '@/assets/icon/添加.svg';


const prompt = Modal.prompt;
const operation = Modal.operation;
const alert = Modal.alert;
const Item =List.Item;


@connect(({musicList})=>({
  musicList,
}))
class PlayPannel extends Component{


  constructor(props){
    super(props);
    this.state={
      modal1: false,
      is_on:true,
      changeId:0,//播放方式：0 顺序播放  1 随机播放 2 重复播放
      duration:0, //歌曲时长
      audioCurrentTime:0, //正在播放的时刻
      pre:-1, //上一首
      next:-1, //下一首
      songArrayId:this.props.songArrayId,//正在播放的歌曲在数组中的位置
      song:this.props.song,//正在播放的歌曲
      songList:this.props.songList,
      musicLists:this.props.musicList.musicLists,
    }
  };

  componentDidMount(){


    const audioEl=window.parent.document.getElementById("audioIframe").contentWindow.document.getElementById("audioId");
    const progressEl=window.document.getElementById('progress');
    const durationEl=window.document.getElementById('duration');

    //已有歌曲在播放，则初始化
    if(audioEl.paused===false){
      this.setState({
        duration:audioEl.duration,
        is_on:true,
      })

      window.document.getElementById("pause").setAttribute("src",PlayIcon);

      durationEl.innerHTML=this.handleTimeStr(audioEl.duration);



    }


    audioEl.onloadstart=()=>{
      window.document.getElementById("pause").setAttribute("src",PauseIcon);
      this.setState({
        duration:0,
        is_on:false,
        audioCurrentTime:0,
      })
      durationEl.innerHTML=this.handleTimeStr(this.state.duration);

    };

    audioEl.onerror=()=>{
      if( isNaN(audioEl.duration)){
        Toast.info('无该歌曲资源！')
        return;
      }
    };



    audioEl.onplaying=()=>{
      window.document.getElementById("pause").setAttribute("src",PlayIcon);

      this.setState({
        duration:audioEl.duration,
        is_on:true,
      })

      durationEl.innerHTML=this.handleTimeStr(audioEl.duration);



    };

    audioEl.ontimeupdate=()=>{
      progressEl.innerHTML=this.handleTimeStr(audioEl.currentTime)
      this.setState({
        audioCurrentTime:audioEl.currentTime,
      })
    };

    audioEl.onended=()=>{
      if(this.state.changeId===2){
        audioEl.loop=true;
        audioEl.play();
        audioEl.loop=false;
      }else{
        this.handleNext(this.state.song.songId,this.state.songList);
      }
    };

    //获取所有歌单
    const {dispatch}=this.props;

    dispatch({
      type:'musicList/fetchMusicLists',
    })

  };


  handleChangeMusicTime=sliderTime=>{

    const audioEl=window.parent.document.getElementById("audioIframe").contentWindow.document.getElementById("audioId");
    const progressEl=window.document.getElementById('progress');

    progressEl.innerHTML=this.handleTimeStr(sliderTime);
    audioEl.pause();
    audioEl.currentTime=sliderTime;
    audioEl.play();
    this.setState({
      audioCurrentTime:sliderTime,
    })



  };
  
  handleTimeStr=time=>{
    
    let minutes=time/60;
    let seconds=time%60;
    let minutesStr=minutes.toString().substr(0,minutes.toString().indexOf('.'));
    let secondsStr=seconds.toString().substr(0,seconds.toString().indexOf('.'))

    minutesStr=minutesStr.length==0?'0':minutesStr;
    secondsStr=secondsStr.length==0?'0':secondsStr;

    return (minutesStr.length>=2?minutesStr:('0'+minutesStr))+":"
      +(secondsStr.length>=2?secondsStr:('0'+secondsStr));
  };

  handlePlay=()=>{

    const audioEl=window.parent.document.getElementById("audioIframe").contentWindow.document.getElementById("audioId");


    if(this.state.is_on===false){
      window.document.getElementById("pause").setAttribute("src",PlayIcon);
      audioEl.play();
      this.setState({
        is_on:true,
      })
    }else{
      window.document.getElementById("pause").setAttribute("src",PauseIcon);
      audioEl.pause();
      this.setState({
        is_on:false,
      })
    }

  };

  handlePre=(songId,songList)=>{

    let preId=0;
    let songSum=songList.length;

    switch (this.state.changeId) {
      case 0:{
        preId=songId-1<0?songSum-1:songId-1;
        break;
      }
      case 1:{
        preId=Math.floor(Math.random()*(songSum));
        break;
      }
      case 2:{
        preId=songId-1<0?songSum-1:songId-1;
        break;
      }
    }



    const audioEl=window.parent.document.getElementById("audioIframe").contentWindow.document.getElementById("audioId");

    audioEl.pause();
    audioEl.setAttribute('src',songList[preId].audioPath);
    audioEl.setAttribute('songId',songList[preId].songId);
    this.setState({
      pre:preId,
      song:songList[preId],
      songArrayId: preId,
    })
    audioEl.play();

  };

  handleNext=(songId,songList)=>{

    let nextId=0;
    let songSum=songList.length;

    switch (this.state.changeId) {
      case 0:{
        nextId=songId+1>=songSum?0:songId+1;
        break;
      }
      case 1:{
        nextId=Math.floor(Math.random()*(songSum));
        break;
      }
      case 2:{
        nextId=songId+1>=songSum?0:songId+1;
        break;
      }
    }



    const audioEl=window.parent.document.getElementById("audioIframe").contentWindow.document.getElementById("audioId");

    audioEl.pause();
    audioEl.setAttribute('src',songList[nextId].audioPath);
    audioEl.setAttribute('songId',songList[nextId].songId);
    this.setState({
      next:nextId,
      song:songList[nextId],
      songArrayId:nextId,
    })
    audioEl.play();

  };

  handleStoreInMusicList=(songListId)=>{

    const {dispatch}=this.props;
    dispatch({
      type:"musicList/storeInMusicList",
      payload:{
        songId:this.state.song.songId,
        songListId:songListId,
      }
    });
    this.setState({
      modal1:false,
    })

  };




  handleChangeMusic=id=>{
    //播放顺序
    switch (id) {
      case 0:{
        //顺序播放
        this.setState({

          changeId:0,
        });
        window.document.getElementById("changeMusic").setAttribute("src",changeMusicIcon);
        break;
      };
      case 1:{
        //随机播放
        this.setState({

          changeId:1,
        });
        window.document.getElementById("changeMusic").setAttribute("src",RandomIcon);
        break;
      };
      case 2:{
        //重复播放
        this.setState({

          changeId:2,
        });
        window.document.getElementById("changeMusic").setAttribute("src",RepeatIcon);
        break;
      }
    }
  };
  showModal = key => (e) => {
    // e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  };
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
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

  render(){

    const{
      songList,
      musicList:{
        musicLists
      }
    }=this.props;

    return (
      <div className={styles.container}>
        <WingBlank>
          <div className={styles.songDiv}>
            <span id={"songName"} className={styles.songs}>{this.state.song && this.state.song.songName}</span><br/><br/>
            <span id={'songAuthor'} className={styles.songs2}>{this.state.song && this.state.song.songAuthor}</span>
          </div>
          <div className={styles.musicIcon}>

          </div>
          {/*<div className={styles.loading}>*/}
          {/*  */}
          {/*</div>*/}
          <div className={styles.controls}>

            <div>
                <Slider
                  id={'slider'}
                  style={{ marginLeft: 30, marginRight: 30 }}
                  value={this.state.audioCurrentTime}
                  min={0}
                  max={this.state.duration}
                  onChange={sliderTime=>this.handleChangeMusicTime(sliderTime)}
                  trackStyle={{
                    backgroundColor: '#bbb',
                    height: '5px',
                  }}
                  railStyle={{
                    backgroundColor: 'grey',
                    height: '5px',
                  }}
                  handleStyle={{
                    borderColor: 'dark',
                    height: '7px',
                    width: '7px',
                    marginLeft: '-7px',
                    marginTop: '-1px',
                    backgroundColor: 'blue',
                  }}

                />
              <div >
                <Icon type={'loading'} size={'xxs'} hidden={this.state.duration>0?'hidden':''}/>

                <div className={styles.marks} hidden={this.state.duration<0?'hidden':''}>
                  <span id={'progress'}>00:00</span>
                  <span id={'duration'}>00:00</span>
                </div>

              </div>
            </div>
            <div className={styles.controls2}>
              <img id={"changeMusic"} src={changeMusicIcon} style={{width:"30px",height:"30px"}} onClick={()=>this.handleChangeMusic((this.state.changeId+1)%3)}></img>
              <img id={"pre"} src={PreIcon} style={{width:"40px",height:"30px"}} onClick={()=>this.handlePre(this.state.songArrayId,songList)}></img>
              <img id={"pause"} src={PauseIcon} style={{width:"40px",height:"30px"}} onClick={()=>this.handlePlay()}></img>
              <img id={"next"} src={NextIcon} style={{width:"40px",height:"30px"}} onClick={()=>this.handleNext(this.state.songArrayId,songList)}></img>

              <Icon type={"ellipsis"} size={{width:"40px",height:"30px"}} color={"grey"} onClick={()=>operation([
                { text: '创建歌单', onPress: this.handleCreateMusicList },
                { text: '添加到歌单',  onPress:this.showModal('modal1') },
              ])}/>
            </div>
          </div>

          <Modal
            visible={this.state.modal1}
            transparent
            maskClosable={false}
            onClose={this.onClose('modal1')}
            title="已建歌单"
            footer={[{ text: '取消', onPress: () => { this.onClose('modal1')(); } }]}
          >
            <div style={{ height: 200, overflow: 'scroll' }}>
                <List multipleLine>
                  {
                    musicLists && musicLists.length<=0?(<Item><span style={{color:'red'}}>暂无已建歌单</span></Item>):
                  musicLists && musicLists.map((value,key)=>{
                    return  (

                        <Item thumb={StoreMusic} onClick={()=>this.handleStoreInMusicList(value.songListId)}>{value.songListName}</Item>

                    )

                  })
                }
                </List>
            </div>
          </Modal>


        </WingBlank>
      </div>
    )
  }


}

export default PlayPannel;
