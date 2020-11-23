Stream =  require("node-rtsp-stream")
stream = new Stream({
    name: "socket",
    streamUrl: "rtsp://admin:123456aa@172.16.1.80/Streaming/Channels/101",
    wsPort : 9990,
    ffmpegOptions : {
        "-stats" : "",
        "-r" : 20,
        "-s" : "1920 1080"
    }
})