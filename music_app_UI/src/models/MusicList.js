import api from '@/services/api'
import {Toast} from "antd-mobile";
import {STATIC_SEVER_URL} from "@/utils/fetchUtil";


export default {

  namespace:'musicList',//歌单

  state:{

    musicLists:[],//歌单数组

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

    }



  },

  reducers:{

    fetchMusicListsSuccess(state,{payload}){
      return{
        ...state,
        musicLists:payload,
      }
    }

  }


};
