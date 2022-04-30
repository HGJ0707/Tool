function sleep (time) {
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
  }

  
// console.log('Do some thing, ' + new Date());
// sleep(3000).then(() => {
//   console.log('Do other things, ' + new Date());
// })

// (async() => {
//     console.log(1);
//     await sleep(3000);
//     console.log(3);
// })()





//2
// function sleep(delay) {
//   var start = (new Date()).getTime();
//   while ((new Date()).getTime() - start < delay) {
//     continue;
//   }
// }

// function test() {
//   console.log('111');
//   sleep(2000);
//   console.log('222');
// }

// test()