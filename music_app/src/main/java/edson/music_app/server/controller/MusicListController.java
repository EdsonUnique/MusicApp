package edson.music_app.server.controller;

import edson.music_app.core.RestVO;
import edson.music_app.core.RestWrapper;
import edson.music_app.entity.Music;
import edson.music_app.entity.Musiclist;
import edson.music_app.server.model.MusicModel;
import edson.music_app.server.service.MusicListService;
import org.apache.ibatis.annotations.MapKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * 歌单创建
 */
@RestController
@RequestMapping("/musicList")
public class MusicListController {

    @Autowired
    private MusicListService musicListService;

    @PostMapping("/create")
    public RestVO createMusicList(@RequestBody Musiclist musiclist){

        try{

            musicListService.createMusicList(musiclist.getSongListName());

            return RestWrapper.success("创建成功！");

        }catch (Exception e){

            System.err.println("MyException:"+e.getMessage());
            return RestWrapper.error(e.getMessage());
        }

    }

    @GetMapping("/fetchMusicLists")
    public RestVO fetchMusicLists(){
        List<Musiclist> musiclistList=musicListService.fetchMusicLists();
        return RestWrapper.success(musiclistList);
    }

    @PostMapping("/storeInMusicList")
    public RestVO storeInMusicList(@RequestBody Map params){

        try{

            musicListService.storeInMusicList(params.get("songId").toString(),params.get("songListId").toString());
            return RestWrapper.success("收藏成功！");
        }catch (Exception e){
            System.err.println(e.getMessage());
            return RestWrapper.error(e.getMessage());
        }


    }

    @RequestMapping("/fetchSongs/{songListId}")
    public RestVO fetchSongs(@PathVariable("songListId") String songListId){

        List<MusicModel> musicModels=musicListService.fetchSongs(songListId);

        return RestWrapper.success(musicModels);
    }

    @RequestMapping("/deleteMusicList/{songListId}")
    public RestVO deleteMusicList(@PathVariable("songListId") String songListId){

        try{

            musicListService.deleteMusicList(songListId);
            return RestWrapper.success();

        }catch (Exception e){

            System.err.println(e.getMessage());
            return RestWrapper.error(e.getMessage());
        }

    }

}
