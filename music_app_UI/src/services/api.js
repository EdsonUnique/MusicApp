import { stringify } from 'qs'
import request from '@/utils/request'
import { makeApiUrl } from '@/utils/fetchUtil'

export default {
  //获取所有歌曲
  async fetchMusicList() {
    return request(makeApiUrl(`music/fetchMusicList`))
  },

  async createMusicList(songListName) {
    return request(makeApiUrl(`musicList/create`),{
      method:'POST',
      body:{
        'songListName':songListName,
      }
    })
  },

  //获取所有歌单
  async fetchMusicLists() {
    return request(makeApiUrl(`musicList/fetchMusicLists`))
  },

  async storeInMusicList(param){
    return request(makeApiUrl(`musicList/storeInMusicList`),{
      method:'POST',
      body:{
        ...param,
      }
    })
  },

  async fetchSongs(param){
    return request(makeApiUrl(`musicList/fetchSongs/`+param))
  }


}
