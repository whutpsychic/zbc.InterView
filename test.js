
//快法务牛逼试题
function kfw() {
  getResult = function () {
    console.log(1);
  }
  return this;
}

kfw.getResult = function () { console.log(2) };
kfw.prototype.getResult = function () { console.log(3) };
var getResult = function () { console.log(4) };
function getResult() { console.log(5) };

kfw.getResult();       //2
getResult();           //4
kfw().getResult();     //1
getResult();           //1
new kfw.getResult();   //2
new kfw().getResult(); //3




