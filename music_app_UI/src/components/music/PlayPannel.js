import React,{Component} from 'react'
import styles from '@/components/music/PlayPannel.less'
import {WingBlank,Slider,Icon,Modal} from "antd-mobile";
import PauseIcon from '@/assets/icon/pause.svg';
import PlayIcon from '@/assets/icon/play.svg';
import PreIcon from '@/assets/icon/pre.svg';
import NextIcon from '@/assets/icon/next.svg';
import changeMusicIcon from '@/assets/icon/顺序播放.svg'
import RandomIcon from '@/assets/icon/randomPlay.svg';
import RepeatIcon from '@/assets/icon/单曲循环.svg';


import StoreIcon from '@/assets/icon/收藏.svg'


const operation = Modal.operation;

class PlayPannel extends Component{


  constructor(props){
    super(props);
    this.state={
      is_on:false,
      changeId:1,
    }
  };

  handlePlay=()=>{
    if(this.state.is_on===false){
      window.document.getElementById("pause").setAttribute("src",PlayIcon);
      this.setState({
        is_on:true,
      })
    }else{
      window.document.getElementById("pause").setAttribute("src",PauseIcon);
      this.setState({
        is_on:false,
      })
    }

  };

  handleStore=()=>{
    //收藏歌单

  };

  handleChangeMusic=id=>{
    //播放顺序
    switch (id) {
      case 0:{
        //顺序播放
        this.setState({

          changeId:1,
        });
        window.document.getElementById("changeMusic").setAttribute("src",changeMusicIcon);
        break;
      };
      case 1:{
        //随机播放
        this.setState({

          changeId:2,
        });
        window.document.getElementById("changeMusic").setAttribute("src",RandomIcon);
        break;
      };
      case 2:{
        //重复播放
        this.setState({

          changeId:0,
        });
        window.document.getElementById("changeMusic").setAttribute("src",RepeatIcon);
        break;
      }
    }
  };

  render(){

    return (
      <div className={styles.container}>
        <WingBlank>
          <div className={styles.songDiv}>
            <span className={styles.songs}>玫瑰少年</span><br/><br/>
            <span className={styles.songs2}>玫瑰少年</span>
          </div>
          <div className={styles.musicIcon}>

          </div>
          <div className={styles.controls}>
            <div >
              {/*<audio controls>*/}
              {/*  <source src="" type={""}/>*/}
              {/*</audio>*/}
              <Slider
                style={{ marginLeft: 30, marginRight: 30 }}
                defaultValue={10}
                min={0}
                max={30}
                // marks={{30:"dd"}}
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
            </div>
            <div className={styles.controls2}>
              <img id={"changeMusic"} src={changeMusicIcon} style={{width:"30px",height:"30px"}} onClick={()=>this.handleChangeMusic(this.state.changeId)}></img>
              <img id={"pre"} src={PreIcon} style={{width:"40px",height:"30px"}}></img>
              <img id={"pause"} src={PauseIcon} style={{width:"40px",height:"30px"}} onClick={()=>this.handlePlay()}></img>
              <img id={"next"} src={NextIcon} style={{width:"40px",height:"30px"}}></img>

              <Icon type={"ellipsis"} size={{width:"40px",height:"30px"}} color={"grey"} onClick={()=>operation([
                { text: '创建歌单', onPress: () => console.log('标为未读被点击了') },
                { text: '添加到歌单',  onPress: () => console.log('置顶聊天被点击了') },
              ])}/>
            </div>
          </div>


        </WingBlank>
      </div>
    )
  }


}

export default PlayPannel;
