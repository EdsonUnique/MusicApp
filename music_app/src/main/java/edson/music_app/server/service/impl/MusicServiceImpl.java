package edson.music_app.server.service.impl;

import edson.music_app.entity.Music;
import edson.music_app.entityMapper.MusicMapper;
import edson.music_app.server.model.MusicModel;
import edson.music_app.server.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicServiceImpl implements MusicService {

    @Autowired
    private MusicMapper musicMapper;


    @Override
    public List<Music> fetchMusicList() {

        List<Music> musicList=musicMapper.selectList(null);

        return musicList;
    }
}
