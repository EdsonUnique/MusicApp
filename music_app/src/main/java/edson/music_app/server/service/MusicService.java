package edson.music_app.server.service;

import edson.music_app.entity.Music;
import edson.music_app.server.model.MusicModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MusicService {

    List<Music> fetchMusicList();

}
