package edson.music_app.core;


public enum RestMsg {

    SUCCESS(1,"成功"),
    FAILURE(0,"错误");

    private int code;

    private String msg;

    RestMsg(int code, String msg){
        this.code=code;
        this.msg=msg;
    }

    public int getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }
}
