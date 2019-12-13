package edson.music_app;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan({"edson.music_app.entityMapper",
            "edson.music_app.server.ModelMapper"
})
public class MusicAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(MusicAppApplication.class, args);
    }

}
