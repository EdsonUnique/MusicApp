import api from '@/services/api'
import {Toast} from "antd-mobile";
import {STATIC_SEVER_URL} from "@/utils/fetchUtil";


export default {

  namespace:'musicList',//歌单

  state:{

    musicLists:[],//歌单数组
    songs:[],//某一歌单中的所有歌曲

  },

  effects:{

    *create({payload},{call,put}){

      const response=yield call(api.createMusicList,payload.songListName);

      if(response.code<=0){
        Toast.fail(response.msg);

        return;

      }

      Toast.success(response.msg);

    },

    *fetchMusicLists({payload},{call,put}){
      const response=yield call(api.fetchMusicLists);

      if(response.code<=0){
        Toast.fail(response.msg);

        return;

      }

      yield put({
        type:'fetchMusicListsSuccess',
        payload: response.data,

      })

    },

    *storeInMusicList({payload},{call,put}){

      const response=yield call(api.storeInMusicList,payload);

      if(response.code<=0){
        Toast.info(response.msg);
        return;
      }

      Toast.success(response.msg);

    },

    *fetchSongs({payload},{call,put}){

      const response=yield call(api.fetchSongs,payload.songListId);

      if(response.code<=0){
        Toast.fail(response.msg);
        return ;
      }

      yield put({
        type:'fetchSongsSuccess',
        payload:response.data,

      })

    }



  },

  reducers:{

    fetchMusicListsSuccess(state,{payload}){
      return{
        ...state,
        musicLists:payload,
      }
    },

    fetchSongsSuccess(state,{payload}){
      return{
        ...state,
        songs: payload.map((item)=>{
          return({
            ...item,
            audioPath:STATIC_SEVER_URL+`/`+item.songPath,
          })
        }),
      }
    }


  }


};
