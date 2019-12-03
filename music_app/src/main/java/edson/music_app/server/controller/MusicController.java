package edson.music_app.server.controller;

import edson.music_app.core.RestVO;
import edson.music_app.core.RestWrapper;
import edson.music_app.entity.Music;
import edson.music_app.server.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/music")
public class MusicController {

    @Autowired
    private MusicService musicService;

    @GetMapping("/fetchMusicList")
    public RestVO fetchMusicList(){

        List<Music> musicList=musicService.fetchMusicList();

        return RestWrapper.success(musicList);
    }




}
