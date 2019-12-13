package edson.music_app.server.service;

import edson.music_app.entity.Musiclist;
import edson.music_app.server.model.MusicModel;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MusicListService {

    void createMusicList(String songListName) throws Exception;

    List<Musiclist> fetchMusicLists();

    void storeInMusicList(String songId,String songListId) throws Exception;

    List<MusicModel> fetchSongs(String songListId);

}
