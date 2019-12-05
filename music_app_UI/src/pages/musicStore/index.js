import React,{Component} from 'react'


class Index extends Component{

  componentDidMount(){

    window.addEventListener('resize',this.handleResize);

  };

  handleResize=()=>{
    const el=window.document.getElementById('myFrame');

    if(el && el!==undefined){
      el.setAttribute('height',window.document.body.clientHeight);
      el.setAttribute('width',window.document.body.clientWidth);
    }

  };

  render(){


    return(
      <div>
        <iframe id={"audioIframe"} src={'#/audioPlay'} hidden>

        </iframe>
        <iframe id={'myFrame'} src={"#/main"} height={window.document.body.clientHeight} width={window.document.body.clientWidth}  frameBorder={'0'}>
        </iframe>
      </div>
    )
  }


}

export default Index;
