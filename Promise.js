
//
//const promiseGetFile = (str, ms) => {

//  return new Promise(
//    function (resolved, rejected) {
//      setTimeout(function () {
//        console.log(str);
//       // resolved();
//      }, ms)

//    })
//}

//const _pro = promiseGetFile("hehe", 1000);


//_pro.catch(() => { })



//_pro.then(
//  ()=> {
//    setTimeout(function () {
//      console.log('resolved 1500');

//      _pro.then(function () {
//        setTimeout(function () {
//          console.log("haha")
//        }, 2000);
//      })

//    }, 2000);
//  }
//)

//const _pro = Promise.resolve(33);

//_pro.then((data) => {
//  console.log(33)
//})


//console.log(111)


////模拟一个随机成功的函数

//function getData() {

//  let __data__ = Math.random();
//  console.log(__data__)
//  if (__data__ <= 0.2) return;

//  else if (__data__ > 0.2) return true;
//}

//const readFile = () => {

//  return new Promise(function (resolved, rejected) {
//    console.log("开始读取工作...");

//    //模拟读取动作
//    let success = getData();
//    if (success)
//      resolved();
//    else if (!success)  
//      rejected(); 
//  })
//}

//const _pro = readFile();

////注册并完成pro对象监听调用成功或失败函数接下来的动作。
//_pro.then(function () {
//    console.log("成功读取文件")
//}).then(function () {
//  console.log("haha")
//})

//_pro.catch(function () {
//  setTimeout(function () { console.log("读取文件失败") }, 800);
//})



//window.onunhandledrejection = function (e) {
//  console.log(e)
//}

//window.onrejectionhandled = function (e) {
//  console.log(e)
//}

//////////////////////////////////////////////////////////////////

let p1 = new Promise(function (resolve, reject) {

  resolve(42);
})


const timeout = () => {
  setTimeout()
}




p1.then(function (value) {

  setTimeout(function () {
    console.log(value);

  
  }, 800);


    

  const p2 = new Promise(function (resolve, reject) {
    //setTimeout(function () { resolve(43); }, 800);
    resolve(43); 
  })
  return p2;
}).then(function (v) {

  console.log(v);
})








