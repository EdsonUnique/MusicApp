import React, { PureComponent } from 'react'
import { NavBar} from 'antd-mobile';
import router from 'umi/router'
import  ReturnIcon  from '../../assets/icon/返回.svg'


class Nav extends PureComponent{

  handleBack=()=>{

   window.g_history.goBack();
  };


  render(){

    const {
      title="飞 云 音 乐",
      isIndex=true,
    }=this.props;

    return (
      <NavBar
        mode={isIndex?"light":'none'}
        style={isIndex?{backgroundColor:"#1296db"}:{backgroundColor:"transparent"}}
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
