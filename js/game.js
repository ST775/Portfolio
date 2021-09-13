var currentMap = map1;

// キャラクターの読み込み
var img = new Image();
img.src = "img/pipo-charachip001.png";
var player = new Character(context, currentMap, 32, 0, 32, 32, 32, img);

var npc = new NPC(context, messageWindowContext, currentMap, 32, 320, 32, 32, 32, img);
npc.topicRegister(["こんにちは", "私はタカハシです"]);
npc.topicRegister(["プログラミングに興味があります"]);

var npc2 = new StaticNPC(context, messageWindowContext, currentMap, 32, 160, 32, 32, 32, img);
npc2.topicRegister(["こんにちは"]);
npc2.topicRegister(["いい天気ですね"]);

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