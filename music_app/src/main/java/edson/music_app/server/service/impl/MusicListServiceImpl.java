package edson.music_app.server.service.impl;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import edson.music_app.entity.Musiclist;
import edson.music_app.entity.Songforlist;
import edson.music_app.entityMapper.MusiclistMapper;
import edson.music_app.entityMapper.SongforlistMapper;
import edson.music_app.exceptions.MyException;
import edson.music_app.server.ModelMapper.MusicModelMapper;
import edson.music_app.server.model.MusicModel;
import edson.music_app.server.service.MusicListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    @Autowired
    private SongforlistMapper songforlistMapper;
    @Autowired
    private MusicModelMapper musicModelMapper;

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

        QueryWrapper<Musiclist> wrapper=new QueryWrapper<>();
        wrapper.lambda().orderByDesc(Musiclist::getCreateTime);

        return musiclistMapper.selectList(wrapper);
    }

    @Override
    public void storeInMusicList(String songId, String songListId) throws Exception {

        QueryWrapper<Songforlist> queryWrapper=new QueryWrapper();

        queryWrapper.lambda().eq(!isBlank(songId),Songforlist::getSongId,songId)
                .and(i->i.eq(!isBlank(songListId),Songforlist::getSongListId,songListId));


        List<Songforlist> res=songforlistMapper.selectList(queryWrapper);

        if(res.size()>0){
            //已收藏
            throw new MyException("歌单中已存在该歌曲！");
        }

        Songforlist songforlist=new Songforlist();
        songforlist.setId(UUID.randomUUID().toString());
        songforlist.setCreateTime(LocalDateTime.now());
        songforlist.setUpdateTime(LocalDateTime.now());
        songforlist.setSongId(songId);
        songforlist.setSongListId(songListId);

        int effects=songforlistMapper.insert(songforlist);

        if(effects<=0){
            throw new MyException("服务器错误！");
        }

        //更新该歌单中的歌曲数目
        Musiclist musiclist=musiclistMapper.selectById(songListId);
        musiclist.setSongSum(musiclist.getSongSum()+1);

        effects=musiclistMapper.updateById(musiclist);

        if(effects<=0){
            throw new MyException("服务器错误！");
        }


    }

    @Override
    public List<MusicModel> fetchSongs(String songListId) {
        return musicModelMapper.fetchSongs(songListId);
    }

    @Override
    @Transactional
    public void deleteMusicList(String songListId) throws Exception {

        //判断歌单是否存在
        Musiclist musiclist=musiclistMapper.selectById(songListId);

        if(musiclist==null){
            throw new MyException("歌单不存在！");
        }

        //删除歌单下的所有歌曲
        QueryWrapper<Songforlist> queryWrapper=new QueryWrapper();

        queryWrapper.lambda().eq(!isBlank(songListId),Songforlist::getSongListId,songListId);
        int effects=songforlistMapper.delete(queryWrapper);
        if(effects<0){//可能等于0
            throw new MyException("服务器错误！");
        }

        //删除歌单
        effects=musiclistMapper.deleteById(songListId);
        if(effects<=0){
            throw new MyException("服务器错误！");
        }


    }


}
