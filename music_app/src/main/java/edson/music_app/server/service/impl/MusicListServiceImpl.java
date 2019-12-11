package edson.music_app.server.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import edson.music_app.entity.Musiclist;
import edson.music_app.entityMapper.MusiclistMapper;
import edson.music_app.exceptions.MyException;
import edson.music_app.server.service.MusicListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import static com.baomidou.mybatisplus.core.toolkit.ObjectUtils.isNull;
import static org.apache.commons.lang3.StringUtils.isBlank;
import static org.apache.commons.lang3.StringUtils.isNumeric;

@Service
public class MusicListServiceImpl implements MusicListService {

    @Autowired
    private MusiclistMapper musiclistMapper;

    @Override
    public void createMusicList(String songListName) throws Exception{

        QueryWrapper<Musiclist> wrapper=new QueryWrapper<>();
        wrapper.lambda().eq(!isBlank(songListName),Musiclist::getSongListName,songListName.trim());

        Musiclist musiclist=musiclistMapper.selectOne(wrapper);

        if(!isNull(musiclist)){
           throw new MyException("歌单已存在！");
        }

        //不存在重名的歌单
        musiclist=new Musiclist();
        musiclist.setCreateTime(LocalDateTime.now());
        musiclist.setUpdateTime(LocalDateTime.now());
        musiclist.setSongListId(UUID.randomUUID().toString());
        musiclist.setSongListName(songListName.trim());
        musiclist.setSongSum(0);

        int res=musiclistMapper.insert(musiclist);
        if(res!=1){
            throw new MyException("服务器错误！");
        }
    }

    @Override
    public List<Musiclist> fetchMusicLists() {
        return musiclistMapper.selectList(null);
    }
}
