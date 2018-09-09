
const promiseGetFile = (str, ms) => {

  return new Promise(
    function (resolved, rejected) {
      setTimeout(function () {
        console.log(str)
        resolved();
      }, ms)

    })
}

let _pro = promiseGetFile("hehe", 2000);




_pro.then(
  function () {
    setTimeout(function () { console.log('resolved 1500') }, 3000);
  },

  function () { console.log('error'); }
)







