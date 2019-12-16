package edson.music_app.server.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import edson.music_app.entity.Music;
import edson.music_app.entityMapper.MusicMapper;
import edson.music_app.server.model.MusicModel;
import edson.music_app.server.service.MusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static org.apache.commons.lang3.StringUtils.isBlank;

@Service
public class MusicServiceImpl implements MusicService {

    @Autowired
    private MusicMapper musicMapper;


    @Override
    public List<Music> fetchMusicList(String searchStr) {

        QueryWrapper<Music> queryWrapper=new QueryWrapper<>();
        queryWrapper.lambda().like(!isBlank(searchStr),Music::getSongName,searchStr)
                .or().like(!isBlank(searchStr),Music::getSongAuthor,searchStr);

        List<Music> musicList=musicMapper.selectList(queryWrapper);

        return musicList;
    }
}
