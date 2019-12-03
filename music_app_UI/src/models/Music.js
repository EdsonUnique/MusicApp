import api from '@/services/api'
import {Toast} from "antd-mobile";
import {STATIC_SEVER_URL} from "@/utils/fetchUtil";

export default {

  namespace:"music",

  state:{

    musicList:[],

  },

  effects:{

    *fetchMusicList({payload},{call,put}){

      const response=yield call(api.fetchMusicList);

      if(response instanceof Error){

        Toast.fail("服务器错误！");

        return ;
      }

      yield put({
        type:'fetchMusicListSuccess',
        payload:response.data,
      })

    }

  },

  reducers:{

    fetchMusicListSuccess(state,{payload}){
      return {
        ...state,
        musicList: payload.map((item)=>{
         return({
           ...item,
           audioPath:STATIC_SEVER_URL+`/`+item.songPath,
         })
        }),
      }
    }
  },

  subscriptions:{



  }



}
