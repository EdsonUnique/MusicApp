import React,{Component} from 'react';

class NoResult extends Component{

  render() {

    const{
      content='^_*没有数据*_^呜呜呜',
    }=this.props;

    return (
      <div style={{alignContent:'center'}}>
        <span>{content}</span>
      </div>
    )
  }

}

export default NoResult;
