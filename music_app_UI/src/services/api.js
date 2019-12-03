import { stringify } from 'qs'
import request from '@/utils/request'
import { makeApiUrl } from '@/utils/fetchUtil'

export default {
  async fetchMusicList() {
    return request(makeApiUrl(`/music/fetchMusicList`))
  },


}
