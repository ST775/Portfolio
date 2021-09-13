var directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3
};

class Character {
    constructor(context, map, x, y, width, height, stepSize, img) {
        this.ctx = context;
        this.map = map;
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.stepSize = stepSize;
        this.img = img;
        this.direction = directions.down;
        this.talkWith = null;
    }
    draw(direction) {
        this._unregister();
        this.ctx.drawImage(this.img, CHIP_SIZE * this._rand(0, 2), CHIP_SIZE * direction, CHIP_SIZE, CHIP_SIZE, this.x, this.y, this.w, this.h);
        this._register();
    }
    move(key) {
        // 会話中:動けなくする
        if (this.talkWith != null) {
            return;
        }

        switch (key) {
            case "d":
            case "ArrowRight":
                this._clear();
                if (!this._isCollision(directions.right)) {
                    this._unregister();
                    this.x += this.stepSize;
                    this._register();
                }
                this.direction = directions.right;
                this.draw(directions.right);
                break;
            case "a":
            case "ArrowLeft":
                this._clear();
                if (!this._isCollision(directions.left)) {
                    this._unregister();
                    this.x -= this.stepSize;
                    this._register();
                }
                this.direction = directions.left;
                this.draw(directions.left);
                break;
            case "w":
            case "ArrowUp":
                this._clear();
                if (!this._isCollision(directions.up)) {
                    this._unregister();
                    this.y -= this.stepSize;
                    this._register();
                }
                this.direction = directions.up;
                this.draw(directions.up);
                break;
            case "s":
            case "ArrowDown":
                this._clear();
                if (!this._isCollision(directions.down)) {
                    this._unregister();
                    this.y += this.stepSize;
                    this._register();
                }
                this.direction = directions.down;
                this.draw(directions.down);
                break;
        }
    }
    talkToNPC() {
        // 誰とも話していない
        if (this.talkWith == null) {
            switch (this.direction) {
                case directions.right:
                    if (this._inFrame(this.x + this.stepSize, this.y) && characterMap[this.y / CHIP_SIZE][(this.x + this.stepSize) / CHIP_SIZE] != 0) {
                        var npc = characterMap[this.y / CHIP_SIZE][(this.x + this.stepSize) / CHIP_SIZE];
                        this.talkWith = npc;
                        npc.speak("ArrowLeft");
                    }
                    break;
                case directions.left:
                    if (this._inFrame(this.x - this.stepSize, this.y) && characterMap[this.y / CHIP_SIZE][(this.x - this.stepSize) / CHIP_SIZE] != 0) {
                        var npc = characterMap[this.y / CHIP_SIZE][(this.x - this.stepSize) / CHIP_SIZE];
                        this.talkWith = npc;
                        npc.speak("ArrowRight");
                    }
                    break;
                case directions.up:
                    if (this._inFrame(this.x, this.y - this.stepSize) && characterMap[(this.y - this.stepSize) / CHIP_SIZE][this.x / CHIP_SIZE] != 0) {
                        var npc = characterMap[(this.y - this.stepSize) / CHIP_SIZE][this.x / CHIP_SIZE];
                        this.talkWith = npc;
                        npc.speak("ArrowDown");
                    }
                    break;
                case directions.down:
                    if (this._inFrame(this.x, this.y + this.stepSize) && characterMap[(this.y + this.stepSize) / CHIP_SIZE][this.x / CHIP_SIZE] != 0) {
                        var npc = characterMap[(this.y + this.stepSize) / CHIP_SIZE][this.x / CHIP_SIZE];
                        this.talkWith = npc;
                        npc.speak("ArrowUp");
                    }
                    break;
            }
        }
        // 誰かと話している
        else {
            // まだ会話中
            if (this.talkWith.speaking) {
                this.talkWith.speak("");
            }
            // 会話終了
            else {
                var se = new Audio("sound/enter.mp3");
                se.play();
                this.talkWith.move();
                this.talkWith.clearMessageWindow();
                this.talkWith = null;
            }
        }
    }

    _register() {
        characterMap[this.y / CHIP_SIZE][this.x / CHIP_SIZE] = this;
    }
    _unregister() {
        characterMap[this.y / CHIP_SIZE][this.x / CHIP_SIZE] = 0;
    }
    _rand(min, max) {
        // min~maxの範囲の整数値をランダムで返す
        return Math.floor(Math.random() * (max + 1 - min)) + min;
    }
    _clear() {
        this.ctx.clearRect(this.x, this.y, this.w, this.h);
        drawChip(this.x, this.y, this.map[this.y / CHIP_SIZE][this.x / CHIP_SIZE]);
    }
    _inFrame(x, y) {
        // canvasの枠外
        if (x < 0 || y < 0 || x + this.w > canvas.width || y + this.h > canvas.height) {
            return false;
        }
        return true;
    }
    _isCollision(direction) {
        var nextX = this.x;
        var nextY = this.y;

        switch (direction) {
            // down
            case 0:
                nextY += this.stepSize;
                break;
            // left
            case 1:
                nextX -= this.stepSize;
                break;
            // right
            case 2:
                nextX += this.stepSize;
                break;
            // up
            case 3:
                nextY -= this.stepSize;
                break;
        }

        // canvas枠外か
        if (!this._inFrame(nextX, nextY)) {
            return true;
        }

        // 他のキャラクターがいないか
        if (characterMap[nextY / CHIP_SIZE][nextX / CHIP_SIZE] != 0) {
            return true;
        }

        // チップセットの判定
        switch (this.map[nextY / CHIP_SIZE][nextX / CHIP_SIZE]) {
            case 11:
            case 19:
                return true;
        }
        return false;
    }
}

class NPC extends Character {
    constructor(context, messageWindow, map, x, y, width, height, stepSize, img) {
        super(context, map, x, y, width, height, stepSize, img);
        this.messageWindow = messageWindow;
        this.topics = [];
        this.speaking = false;
        this.topicNum = null;
        this.topicStep = 0;
    }
    move() {
        this.timer = setInterval(() => {
            var r = this._rand(0, 3);
            var ds = ["w", "a", "s", "d"];
            super.move(ds[r]);
        }, 1000);
    }
    stop() {
        clearInterval(this.timer);
    }
    topicRegister(topic) {
        this.topics.push(topic);
    }
    speak(direction) {
        var se = new Audio("sound/enter.mp3");
        se.play();

        this.drawMessageWindow();

        // 会話中
        if (this.speaking) {
            var text = this.topics[this.topicNum][this.topicStep];
            this.printText(text);

            this.topicStep++;
            if (this.topics[this.topicNum].length == this.topicStep) {
                this.speaking = false;
                this.topicStep = 0;
                this.topicNum = null;
            }
        }
        // 会話開始
        else {
            this.speaking = true;
            super.move(direction);
            this.stop();
            this.topicNum = this._rand(0, this.topics.length - 1);

            var text = this.topics[this.topicNum][this.topicStep];
            this.printText(text);

            this.topicStep++;
            if (this.topics[this.topicNum].length == this.topicStep) {
                this.speaking = false;
                this.topicStep = 0;
                this.topicNum = null;
            }
        }
    }
    printText(text) {
        this.messageWindow.fillStyle = "#fff";
        this.messageWindow.font = "25px serif";
        this.messageWindow.fillText(text, 20, 60)
    }

    drawMessageWindow() {
        this.messageWindow.fillStyle = "#000";
        this.messageWindow.fillRect(0, 0, 640, 170);
    }
    clearMessageWindow() {
        this.messageWindow.clearRect(0, 0, 640, 170);
    }
}

class StaticNPC extends NPC {
    move() { }
}