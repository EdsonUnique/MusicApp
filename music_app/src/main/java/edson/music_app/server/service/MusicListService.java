package edson.music_app.server.service;

import edson.music_app.entity.Musiclist;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MusicListService {

    void createMusicList(String songListName) throws Exception;

    List<Musiclist> fetchMusicLists();

}
