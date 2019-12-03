import React, { PureComponent } from 'react'
import { NavBar} from 'antd-mobile';
import router from 'umi/router'
import  ReturnIcon  from '../../assets/icon/返回.svg'


class Nav extends PureComponent{

  handleBack=()=>{

   if(window.g_history.location.pathname === '/musicStore/playMusic'){
     router.push({
       pathname:'/musicStore',
       // query:{
       //   payload:this.props.musicId,
       // }
       musicId:1,
       is_on:true,//是否播放
     })
   }
  };


  render(){

    const {
      title="飞 云 音 乐",
      isIndex=true,
    }=this.props;

    return (
      <NavBar
        mode="light"
        style={{backgroundColor:"#1296db"}}
        icon={isIndex?'':<img src={ReturnIcon}/>}
        leftContent={[
          isIndex?'':"返回"
        ]}
        onLeftClick={isIndex?null:() => this.handleBack()}
      >

        <span style={{color:"white"}}>{title}</span>

      </NavBar>
    )
  }

}

export default Nav;
