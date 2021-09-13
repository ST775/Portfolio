// console.log("hello World");

document.getElementById("flaver-text").innerHTML = "ここはjsのテストなどを行うページです。";

var x = 6;
var y = 5;
var r = document.getElementById("result");
r.innerHTML = x + y;
// console.log("x="+x);
// console.log("y="+y);
// ↑連結　

var bigger = function (x, y) {
    if (x > y) {
        return (x);
    }
    else if (x < y) {
        return (y);
    }
    else {
        return (y);
    }
}

var big = bigger(x, y);
// console.log(big);

var a = 5;
var b = 10;
bigger(a, b);
// console.log(bigger(a,b));

//Char(文字)
var char_v = "a";
console.log(char_v);

//String文字列  char(文字)の配列
var str_v = "abcdefg";
str_v == ["a", "b",]
// console.log(str_v);
// console.log(str_v[3]);

var array_v = [0, 1, 2, 3, 4];  //数字の配列 
// console.log(array_v[1]);
// var last = array_v.length -1;
// console.log("array_vの長さ(length)", array_v.length);
// console.log("array_vの添字(index)", last);
// array_v.push(100);
// last = array_v.length -1;
// console.log("要素を追加しました");
// console.log("array_vの長さ(length)", array_v.length);
// console.log("array_vの最後の添字(index)", last);
// console.log(array_v[last]);
// var i = 5;
// console.log(array_v[i]);

// for(var i =0; i<array_v.length; i++){
//     // 処理する部分
//     if (i % 2 == 0){
//         console.log(array_v[i]);
//     }
//     // 処理の末尾(ここでi++(+1)する)
// }

// for(繰り返す)
//++ +1する
// -- -1する

// 入れるの要素をelに入れていく
// for (var el of array_v){
//     console.log(el);
// }

// i += 1
// i = i+1;
// i++;

// i+=2
// i = i+2;
// i++;
// i++;

// for (var i = 1; i <100; i++){
//     console.log(i);
// }

// for (var i = 100; i >0; i--){
//     console.log(i);
// }

//int(整数)
var int_v = 1;
// console.log(int_v);

//float(小数)
var float_v = 3.14;
// console.log(float_v);

//typeof(変数の種類(型)を教えてくれる)
// console.log(typeof str_v);
// console.log("a"+"b");//string型の足し算は文字列を連結する
// console.log(typeof int_v);
// console.log(typeof 3.14);   //number
// console.log(1+2);       //number型の足し算は和を返す
//number型はint,floatを含む型

// boolean型
var bool_v = true;
// console.log(typeof bool_v);
// console.log(typeof true);
// console.log(typeof false);
// console.log(10 > 2);
// console.log(10 < 2);
// console.log(10 >= 10);
// console.log(10 == 10);
// console.log(1 != 2);
// var c1 = 10 > 2;        //条件1
// var c2 = 5 > 2;         //条件2
// console.log(c1 && c2);   //どちらも満たすとTrue
// console.log(c1 || c2);  //どっちか満たすとtrue(または)

// if(coin > 20 || paper > 100){
//     //受け取り拒否の処理をする
// }

// if(password == "abcd"){
//     //login処理
// }

// fizz buzz問題
// 1~100までの数字を出力する
// 3で割り切れる時　fizz
// 5で割り切れる時 buzz
// 両方で割り切れる時　fizzbuzz
// それ以外のとき　普通の数字を表示する

// for (var i = 1; i <=60; i++){
//     if(i % 15 == 0){
//         console.log("fizzbuzz");
//     }
//     else if(i % 3 == 0){
//         console.log("fizz");
//     }
//     else if(i % 5 == 0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i)
//     }
// }

// for(var j = 1; j <=40; j++){
//     if(j % 3 ==0){
//         console.log(j+"!");
//     }
//     else{
//         console.log(j);
//     }
// }

//console.log(i)

// 九九を表示するプログラム
// 1*1~9*9まで
// 1×1 = 1
// ...
// 9×9 = 81

// for(var i = 1; i <10; i++){
//     for(var j = 1; j < 10; j++){
//         console.log(i + "x" + j + "=" + i *j);
//     }
// }

// for(var i=1;i<10;i++){
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

// エスケープシーケンス(\)
// console.log("\"");
// // 改行　(\n)
// console.log("aaa\nbbb");
// // tab
// console.log("a\tb");

// 関数
var add = function (x, y) {
    return (x + y);
}
console.log(add(1, 2));

var power = function (x) {
    return (x ** 2);
}
console.log(power(3));

var make_power = function (p) {
    var power_function = function (x) {
        return (x ** p)
    }
    return power_function;
}
var mypower3 = make_power(3);
console.log(mypower3(2));

// *********
//  *******
//   *****
//    ***
//     *

var inverse_triangle = function (x) {
    if (x % 2 == 0) {
        console.log("Error! 底辺は奇数長である必要があります");
        return "";
    }
    var result = "";

    // 段数を求める
    var stage = Math.floor(x / 2) + 1;

    // result += "***\n";
    // result += "**";
    for (var s = 0; s < stage; s++) {
        for (var i = 0; i < x; i++) {
            if (i < s || i > x - 1 - s) {
                result += " ";
            }
            else {
                result += "*";
            }
        }
        result += "\n";
    }

    return result;
}
// +=左の文字列に右の文字列を連結する

console.log(inverse_triangle(9));

var triangle = function (x) {
    if (x % 2 == 0) {
        console.log("Error! 底辺は奇数長である必要があります");
        return "";
    }
    var result = "";

    // 段数を求める
    var stage = Math.floor(x / 2) + 1;

    // result += "***\n";
    // result += "**";
    for (var s = stage - 1; s >= 0; s--) {
        for (var i = 0; i < x; i++) {
            if (i < s || i > x - 1 - s) {
                result += " ";
            }
            else {
                result += "*";
            }
        }
        result += "\n";
    }

    return result;
}
console.log(triangle(9));

// canvas
var canvas = document.getElementById("my-canvas");
var context = canvas.getContext("2d");

// 塗りつぶす四角形
// context.fillStyle = "green";
// context.fillRect(10, 10, 150, 100)//x,y,w,h

// 塗り潰さない四角形
// context.strokeStyle = "black"
// context.lineWidth = 1;
// context.strokeRect(180, 20, 50, 50);

// x,y 半径, 開始角度(rad), 終了角度(rad), true->時計回り false->反時計回り
// context.arc(100, 200, 50, 0, 360 * Math.PI, false);
// context.fillStyle = "orange";
// context.fill();

// キーボードの入力判定
// document.addEventListener("keydown", (event) =>{
//     if(event.key == "c"){
//         context.clearRect(10, 10, 150, 100);
//     }
// });

// 移動
var isCollsion = function (x, y, w, h) {
    if (x < 0 || y < 0 || x + w > 1000 || y + h > 1000) {
        return true;
    }
    return false;
}

// context.fillStyle = "green";
// var x = 10;
// var y = 10;
// var w = 150;
// var h = 100;
// var p = 15;
// context.fillRect(x, y, w, h);

// document.addEventListener("keydown", (event) =>{
//     switch(event.key){
//         case "d":
//             context.clearRect(x, y, w, h,);
//             if(!isCollsion(x + p, y, w, h)){
//                 x += p;
//             }
//             context.fillRect(x, y, w, h);
//             break;
//         case "a":
//             context.clearRect(x, y, w, h,);
//             if(!isCollsion(x - p, y, w, h)){
//                 x -= p;
//             }
//             context.fillRect(x, y, w, h);
//             break;
//         case "w":
//             context.clearRect(x, y, w, h,);
//             if(!isCollsion(x , y - p, w, h)){
//                 y -= p;
//             }
//             context.fillRect(x, y, w, h);
//             break;
//         case "s":
//             context.clearRect(x, y, w, h,);
//             if(!isCollsion(x, y + p, w, h)){
//                 y += p;
//             }
//             context.fillRect(x, y, w, h);
//             break;
//     }
// });

// *
// **
// ***
// ****
// *****
// 宿題

var halftriangle = function (x) {
    var result = "";
    for (var i = 0; i < x; i++) {
        for (var j = 0; j < i + 1; j++) {
            result += "*";
        }
        result += "\n";
    }
    return result;
}
console.log(halftriangle(5));

var rectangle = function (width, height) {
    var result = "";
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            result += "*";
        }
        result += "\n";
    }
    return result;
}
console.log(rectangle(7, 3));

// 画像の読み込み
var img = new Image();
img.src = "img/pipo-charachip001.png";

var rand = function (min, max) {

    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

var moveToS = function (x, y, w, h, i) {
    if (i > 2) {
        i = 0;
    }
    setTimeout(function () {
        switch (i) {
            case 0:
                context.drawImage(img, 0, 0, 32, 32, x, y, w, h);
                break;
            case 1:
                context.drawImage(img, 32, 0, 32, 32, x, y, w, h);
                break;
            case 2:
                context.drawImage(img, 64, 0, 32, 32, x, y, w, h);
                break;
        }
        moveToS(x, y, w, h, i + 1);
    }, 200);

}

img.onload = () => {
    var x = 10;
    var y = 10;
    var w = 32;
    var h = 32;
    var p = 12; //歩幅

    context.drawImage(img, 0, 0, 32, 32, x, y, w, h);

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "d":
                if (!isCollsion(x + p, y, w, h)) {
                    context.clearRect(x, y, w, h);
                    x += p;
                    context.drawImage(img, 32 * rand(0, 2), 64, 32, 32, x, y, w, h);
                }
                break;
            case "a":
                if (!isCollsion(x - p, y, w, h)) {
                    context.clearRect(x, y, w, h);
                    x -= p;
                    context.drawImage(img, 32 * rand(0, 2), 32, 32, 32, x, y, w, h);
                }
                break;
            case "w":
                if (!isCollsion(x, y - p, w, h)) {
                    context.clearRect(x, y, w, h);
                    y -= p;
                    context.drawImage(img, 32 * rand(0, 2), 96, 32, 32, x, y, w, h);
                }
                break;
            case "s":
                if (!isCollsion(x, y + p, w, h)) {
                    context.clearRect(x, y, w, h);
                    y += p;
                    context.drawImage(img, 32 * rand(0, 2), 0, 32, 32, x, y, w, h);
                }

                break;
        }
    });

    // img,
    // context.drawImage(img, 0, 0, 32, 32, 0, 0, 32, 32);
    // context.drawImage(img, 0, 32, 32, 32, 0, 0, 32, 32);
    // context.drawImage(img, 0, 96, 32, 32, 0, 0, 32, 32);

};