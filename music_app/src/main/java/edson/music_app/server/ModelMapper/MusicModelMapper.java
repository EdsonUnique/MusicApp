package edson.music_app.server.ModelMapper;

import edson.music_app.entity.Music;
import edson.music_app.server.model.MusicModel;

import java.util.List;

public interface MusicModelMapper {

    List<MusicModel> fetchSongs(String songListId);

}
