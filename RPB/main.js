var mapArray, ctx, currentImgMainX, currentImgMainY;
var imgMountaion, imgMain, imgEnemy;
//mapArray : 決定地圖中每個格子的元素
//ctx: HTML5 Canvas用
//currentImgMainX currentImgMainY : 決定主角的所在座標
//imgMountaion  imgMain  imgEnemy : 障礙物  主決  敵人的圖片物件

//當網頁載入完成才開始做事
$(document).ready(function(){
    //0: 可走 1:障礙 2:終點 3:敵人
    mapArray = [0,1,1,0,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");
    
    //擺上主角
    imgMain = new Image();
    imgMain.src = "RPB/images/spriteSheet.png";
    currentImgMainX=0;
    currentImgMainY=0;
    imgMain.onload=function()
    {
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY, 200,200);
    }
    //擺上障礙物與敵人
    imgMountaion = new Image();
    imgMountaion.src = "RPB/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "RPB/images/Enemy.png";
    imgMountaion.onload = function(){
        imgEnemy.onload = function() {
            for(var x in mapArray)
            {
                if(mapArray[x] == 1)//擺上障礙物
                {
                    ctx.drawImage(imgMountaion,32,65,32,32, x%3*200,Math.floor(x/3)*200, 200, 200);
                }
                else if (mapArray[x] == 3)//擺上敵人
                {
                    ctx.drawImage(imgEnemy,7,40,104,135, x%3*200,Math.floor(x/3)*200,200,200);
                }
            }
        };
    };
});
//當有人按下按鍵時需要做的事情
$(document).keydown(function(event){
    var targetImgMainX, targetImgMainY, targetBlock, cutImagePositionX;
    //targetImgMainX targetImgMainY: 主角要去的目標位置
    // targetBlock : 主角即將要移動過去的那一格編號
    // cutImagePositionX: 根據主角方向決定走路方向的圖片
    event.preventDefault();
    //避免點及鍵盤出現瀏覽器的其他行為
    
    //依據使用者點急按鈕,做出該動作
    switch(event.which){
        case 37://向左邊走
            targetImgMainX = currentImgMainX - 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 175;
            break;
        case 38://向上面走
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY - 200;
            cutImagePositionX = 355;
            break;
        case 39://向右邊走
            targetImgMainX = currentImgMainX + 200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX = 540;
            break;
        case 40://向下面走
            targetImgMainX = currentImgMainX;
            targetImgMainY = (currentImgMainY + 200);
            cutImagePositionX = 0;
            break;
        default:
            return;
    }
    
    if (targetImgMainX<=400 && targetImgMainX>=0 &&
            targetImgMainY<=400 && targetImgMainY>=0)
    {
        targetBlock=targetImgMainX/200+targetImgMainY/200 * 3;
    }
    else
    {
        targetBlock=-1;
    }
    
    ctx.clearRect(currentImgMainX,currentImgMainY, 200, 200);
    
    if(targetBlock == -1 || mapArray[targetBlock] == 1 || mapArray[targetBlock] == 3)
    {
        switch(mapArray[targetBlock])
            {
                case undefined://牆壁
                    $("#talkBox").text("邊界");
                    break;
                case 1://障礙
                    $("#talkBox").text("有山");
                    break;
                case 2://終點
                    $("#talkBox").text("抵達終點!");
                    break;
                case 3://有人
                    $("#talkBox").text("嗨~");
                    break;
            }
    }
    else
    {
        $("#talkBox").text("" + currentImgMainY);
        currentImgMainX= targetImgMainX;
        currentImgMainY=targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,
                 currentImgMainX,currentImgMainY,200,200);
});