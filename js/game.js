var currentMap = map1;

// キャラクターの読み込み
var img = new Image();
img.src = "img/pipo-charachip001.png";
var player = new Character(context, currentMap, 32, 0, 32, 32, 32, img);

var npcImage1 = new Image();
npcImage1.src = "img/pipo-charachip002a.png";

var npcImage2 = new Image();
npcImage2.src = "img/pipo-charachip003b.png";

var npc = new NPC(context, messageWindowContext, currentMap, 32, 320, 32, 32, 32, npcImage1);
npc.topicRegister(["実はこの世界、神が3週間弱で創造したらしいですよ"]);

var npc2 = new StaticNPC(context, messageWindowContext, currentMap, 32, 160, 32, 32, 32, npcImage2);
npc2.topicRegister(["はじめまして", "web系のプログラミングに興味があります"]);
npc2.topicRegister(["こちらのサイトはポートフォリオです"]);

var startTime = Date.now();
window.onload = () => {
    //   マップの表示
    drawMap(currentMap);
    player.draw(directions.right);

    npc.draw(directions.up);
    npc.move();

    npc2.draw(directions.up);
    npc2.move();

};

document.addEventListener("keydown", (event) => {
    player.move(event.key);
    if (event.key == "Enter") {
        player.talkToNPC();
    }
});