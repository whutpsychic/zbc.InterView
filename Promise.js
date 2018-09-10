
//const promiseGetFile = (str, ms) => {

//  return new Promise(
//    function (resolved, rejected) {
//      setTimeout(function () {
//        console.log(str);
//        resolved();
//      }, ms)

//    })
//}

//const _pro = promiseGetFile("hehe", 1000);

//console.log(_pro)

//_pro.then(
//  function () {
//    setTimeout(function () {
//      console.log('resolved 1500');
//      _pro.then(function () {
//        setTimeout(function () {
//          console.log("haha")
//        }, 2000);
//      })

//    }, 2000);
//  },

//  function () { console.error('error'); }
//)

const _pro = Promise.resolve(33);

_pro.then((data) => {
  console.log(33)
})


console.log(111)


