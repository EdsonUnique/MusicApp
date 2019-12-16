import React, { PureComponent } from 'react'
import { SearchBar} from 'antd-mobile';
import { connect } from 'dva'

@connect(({ music })=>({
  music,
}))
class SearchButton extends PureComponent{

  handleSearch=val=>{

    const {dispatch}=this.props;

    dispatch({
      type:'music/fetchMusicList',
      payload:{
        searchStr:val,
      }
    })
  };


  render() {

    const {hint="输入歌名或歌手"}=this.props;

    return (
      <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
        {/*<div style={{fontSize:"20px",color:"red",paddingLeft:"8px",paddingRight:"8px"}}>搜 索</div>*/}
        <SearchBar placeholder={hint} maxLength={20}
          style={{marginTop:"10px",width:"100%"}} onSubmit={(val)=>this.handleSearch(val)}
        />
      </div>
    );
  }

}

export default SearchButton;
