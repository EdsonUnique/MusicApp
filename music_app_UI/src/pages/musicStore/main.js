import React,{PureComponent} from 'react'
import MainMusicStore from "@/pages/musicStore/mainMusicStore";
import PlayMusic from "@/pages/musicStore/playMusic";

class Main extends PureComponent{

  constructor(props){
    super(props);
    this.state={

      isHidden1:false,
      isHidden2:true,
    }

  };

  componentDidMount(){
    const musicStore=window.document.getElementById('musicStore');
    const playMusic=window.document.getElementById('playMusic');
    if(window.location.hash.includes('#/main')){
      musicStore?
        musicStore.removeAttribute("hidden") :'';
      playMusic?playMusic.setAttribute("hidden","hidden"):'';

      // this.setState({
      //   isHidden1: false,
      //   isHidden2: true,
      // })
    }

    if(window.location.hash.includes('#/playMusic')){
      musicStore?musicStore.setAttribute("hidden","hidden"):'';
      playMusic?playMusic.removeAttribute("hidden"):'';

      // this.setState({
      //   isHidden1: true,
      //   isHidden2: false,
      // })
    }
  }

  render(){

    const song=this.props.location?this.props.location.query.song : undefined;
    const songList=this.props.location?this.props.location.query.songList : undefined;


    return (
      <div>

        {/*<div>*/}
        {/*  <iframe src={'#/audioPlay'} height={"30px"} width={"300px"} hidden>*/}

        {/*  </iframe>*/}
        {/*  <iframe src={"#/musicStore"} height={"500px"} width={"300px"}>*/}
        {/*  </iframe>*/}
        {/*</div>*/}

        <div id={'musicStore'}>
          <MainMusicStore />
        </div>
        <div id={'playMusic'}>
          <PlayMusic song={song} songList={songList}/>
        </div>


      </div>
    )
  }

}

export default Main;
