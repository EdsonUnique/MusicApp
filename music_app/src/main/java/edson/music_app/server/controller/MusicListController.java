package edson.music_app.server.controller;

import edson.music_app.core.RestVO;
import edson.music_app.core.RestWrapper;
import edson.music_app.entity.Musiclist;
import edson.music_app.server.service.MusicListService;
import org.apache.ibatis.annotations.MapKey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

}
