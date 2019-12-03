import React, { PureComponent } from 'react'
import { SearchBar} from 'antd-mobile';

class SearchButton extends PureComponent{

  render() {

    const {hint="输入歌名或歌手"}=this.props;

    return (
      <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
        {/*<div style={{fontSize:"20px",color:"red",paddingLeft:"8px",paddingRight:"8px"}}>搜 索</div>*/}
        <SearchBar placeholder={hint} maxLength={20}
          style={{marginTop:"10px",width:"100%"}}
        />
      </div>
    );
  }

}

export default SearchButton;
