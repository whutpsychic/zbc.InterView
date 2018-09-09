
//*********************************************************


//使用生成器编写一个模拟异步编程接口

//执行任务函数

//生成器函数
function* createTask() {


  let res1 = yield getData();

  let res2 = yield getData2();

  let res3 = yield getAdded(3 + 2 + 9);

}


//模拟延迟
//获取数据延迟模拟
function getData() {
  return function (callback) {
    setTimeout(function () {
      callback(null, 111)
    }, 2000);
  }
}

function getData2() {
  return function (callback) {
    setTimeout(function () {
      callback(null, 222)
    }, 2000);
  }
}

function getAdded(v) {

  return function (callback) {
    setTimeout(function () {
      callback(null, v);
    }, 1000)
  }
}


function step() {
  console.log(result)
  if (!result.done) {
   
    if (typeof result.value === "function") {
      result.value(function (err, v) {
        console.log(v)
        result = task.next();
        step();
      });
    }
  } else {
    console.log(result)
    return result;
  };
}

//let task = createTask();

//var result = task.next();

//step();












