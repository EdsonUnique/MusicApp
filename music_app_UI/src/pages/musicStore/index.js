import React,{Component} from 'react'


class Index extends Component{

  componentDidMount(){

    window.addEventListener('resize',this.handleResize);

  };

  handleResize=()=>{
    const el=window.document.getElementById('myFrame');

    if(el && el!==undefined){
      el.setAttribute('height',window.innerHeight);
      el.setAttribute('width',window.innerWidth);
    }

  };

  render(){


    return(
      <div>
        <iframe id={"audioIframe"} src={'#/audioPlay'} hidden>

        </iframe>
        <iframe id={'myFrame'} src={"#/main"} height={window.innerHeight} width={window.innerWidth}  frameBorder={'0'}>
        </iframe>
      </div>
    )
  }


}

export default Index;
