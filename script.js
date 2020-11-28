var canvas = new fabric.Canvas("canvas");
var b_width = 30;
var b_height = 30;
var playerX = 10;
var playerY = 10;
var playerObj = "";
var blockObj = "";

function playerUpdate() {
  fabric.Image.fromURL("hiclipart.com.png", function (Img) {
    playerObj = Img;
    playerObj.scaleToWidth(150);
    playerObj.scaleToHeight(140);
    playerObj.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(playerObj);
  });
}

function newImage(Img) {
  fabric.Image.fromURL(Img, function (img) {
    blockObj = img;
    blockObj.scaleToWidth(b_width);
    blockObj.scaleToHeight(b_height);
    blockObj.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(blockObj);
  });
}
