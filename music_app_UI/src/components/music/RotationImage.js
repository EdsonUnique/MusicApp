import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import router from 'umi/router'
import { Carousel, WingBlank } from 'antd-mobile';
import RotationIcon from '@/assets/icon/rotation.png'

class RotationImage extends PureComponent {

  state = {
    data: ['1', '2', '3'],
    imgHeight: 120,
  };

  render(){

    return(
      <WingBlank style={{marginTop:"50px"}}>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href=""
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={RotationIcon}
                alt="广告位招租"
                style={{ width: '100%', verticalAlign: 'top',height:this.state.imgHeight }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    )


  }


}

export default RotationImage;
