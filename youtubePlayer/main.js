var player; // youtube 播放器
var currentPlay = 0; // 紀錄目前撥到第幾首歌

// 當youtube API準備好時
function onYouTubeIframeAPIReady(){
    player = new YT.Player("player", //index.html裡面的id 為 player的地方
        {
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autuplay":0, // 是否自動撥放
            "controls":0, // 是否顯示控制選項
            "start":playTime[currentPlay][0], // 開始秒數
            "end":playTime[currentPlay][1], // 節數秒數
            "showinfo":0, // 上方是否顯示影片標題
            "rel":0, // 結束時是否顯示相關影片
            "iv_load_policy":3 // 是否顯示置入的行銷聯結
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }    
    });
}
// 當youtube播放器準備好時
function onPlayerReady(event){
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);
        $("#playButton").attr("value", "play");
        player.playVideo();
    });
}
// 當播放器播放狀態改變時
function onPlayerStateChange(event){
    if(event.data == 0 && (Math.floor(player.getCurrentTime())==playTime[currentPlay][1]))
    {
        if (currentPlay < playList.length - 1)
        {
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
            $("#playButton").attr("value", "play");
        }
        else
        {
            currentPlay = 0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
            $("#playButton").attr("value", "replay");
        }
    }
    if (player.getVideoLoadedFraction() > 0)//避免影片還沒開始播時抓不到標題
    {
        $("h2").text(player.getVideoData().title);
    }    
}