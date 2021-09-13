var canvas = document.getElementById("my-canvas");
var context = canvas.getContext("2d");

var isCollsion = function (x, y, w, h) {
    //camvas枠外
    if (x < 0 || y < 0 || x + w > canvas.width || y + h > canvas.height) {
        return true;
    }

    // チップセットの判定
    switch (map[y / 32][x / 32]) {
        case 11:
        case 19:
            return true;
    }

    return false;
};

var rand = function (min, max) {

    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var mapChipsPaths = [
    "img/map_sabaku.png",
    "img/map_yama2.png",
    "img/map_umi.png",
    "img/map_mori.png",
];

var mapChips = new Array();
for (var i = 0; i < mapChipsPaths.length; i++) {
    var image = new Image();
    image.src = mapChipsPaths[i];
    mapChips.push(image);
};

var directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3
};

// クラス:設計図
// インスタンス:具体的な生産物(オブジェクト)

var drawChip = function (x, y, n) {
    var chiplength = 5; //一枚の画像に含まれているチップセットの枚数
    var chipNum = Math.floor(n / 5);
    context.drawImage(mapChips[chipNum], 0, 32 * (n % 5), 32, 32, x, y, 32, 32,);
}

class Character {
    left = 0;
    constructor(context, x, y, width, height, stepSize, img) {
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.stepSize = stepSize;
        this.img = img;
    }
    draw(direction) {
        this.ctx.drawImage(this.img, 32 * rand(0, 2), 32 * direction, 32, 32, this.x, this.y, this.w, this.h);
    }
    clear() {
        this.ctx.clearRect(this.x, this.y, this.w, this.h);
        drawChip(this.x, this.y, map[this.y / 32][this.x / 32]);
    }

    move(key) {
        switch (key) {
            case "d":
            case "ArrowRight":
                this.clear();
                if (!isCollsion(this.x + this.stepSize, this.y, this.w, this.h)) {
                    this.x += this.stepSize;
                }
                this.draw(directions.right);
                break;
            case "a":
            case "ArrowLeft":
                this.clear();
                if (!isCollsion(this.x - this.stepSize, this.y, this.w, this.h)) {
                    this.x -= this.stepSize;
                }
                this.draw(directions.left);
                break;
            case "w":
            case "ArrowUp":
                this.clear();
                if (!isCollsion(this.x, this.y - this.stepSize, this.w, this.h)) {
                    this.y -= this.stepSize;
                }
                this.draw(directions.up);
                break;
            case "s":
            case "ArrowDown":
                this.clear();
                if (!isCollsion(this.x, this.y + this.stepSize, this.w, this.h)) {
                    this.y += this.stepSize;
                }
                this.draw(directions.down);
                break;
        }
    }
};

// キャラクターの読み込み
var img = new Image();
img.src = "img/pipo-charachip001.png";
var player = new Character(context, 32, 0, 32, 32, 32, img);

// player.draw();
var x = 32;
var y = 0;
var w = 32;
var h = 32;
var p = 32; //歩幅

var CHIP_RIVER = 11;

window.onload = () => {
    for (var w = 0; w < canvas.width; w += 32) {
        for (var h = 0; h < canvas.height; h += 32) {
            drawChip(w, h, map[h / 32][w / 32]);
        }
    }
    // context.drawImage(img, 0, 0, 32, 32, x, y, 32, 32);
    player.draw(directions.down);
};

document.addEventListener("keydown", (event) => {
    player.move(event.key);
    // switch (event.key) {
    //     case "d":
    //     case "ArrowRight":
    //         context.clearRect(x, y, w, h);
    //         drawChip(x, y, map[y / 32][x / 32]);
    //         if (!isCollsion(x + p, y, w, h)) {
    //             x += p;
    //         }
    //         context.drawImage(img, 32 * rand(0, 2), 64, 32, 32, x, y, w, h);
    //         break;
    //     case "a":
    //     case "ArrowLeft":
    //         context.clearRect(x, y, w, h);
    //         drawChip(x, y, map[y / 32][x / 32]);
    //         if (!isCollsion(x - p, y, w, h)) {
    //             x -= p;
    //         }
    //         context.drawImage(img, 32 * rand(0, 2), 32, 32, 32, x, y, w, h);
    //         break;
    //     case "w":
    //     case "ArrowUp":
    //         context.clearRect(x, y, w, h);
    //         drawChip(x, y, map[y / 32][x / 32]);
    //         if (!isCollsion(x, y - p, w, h)) {
    //             y -= p;
    //         }
    //         context.drawImage(img, 32 * rand(0, 2), 96, 32, 32, x, y, w, h);
    //         break;
    //     case "s":
    //     case "ArrowDown":
    //         context.clearRect(x, y, w, h);
    //         drawChip(x, y, map[y / 32][x / 32]);
    //         if (!isCollsion(x, y + p, w, h)) {
    //             y += p;
    //         }
    //         context.drawImage(img, 32 * rand(0, 2), 0, 32, 32, x, y, w, h);
    //         break;
    // }
});

var suzuki = {
    height: 160,
    weight: 60,
};
console.log(suzuki.weight);