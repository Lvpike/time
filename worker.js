var i = 0;
var k = 0;
var j = 30; //休息完毕的时间，单位分钟
var g = 1; //该休息了的时间，单位分钟
var time1;
var message = [];
// self.addEventListener(
//   "message",
//   function (e) {
//     console.log(e);
//   },
//   false
// );
function timeToWork() {
  // var i=1;
  // var j = document.getElementById("button1").getAttribute("value");
  // for (let i = 0; i < 3; i++) {
  //   //   setTimeout(() => {
  //   //      alert(i)
  //   //   }, 5000 * i)
  //   console.log(i);
  //  };Work
  //   document.getElementById("button1").disabled = true;
  time1 = setTimeout(() => {
    if (k < j) {
      i++;
      // console.log(i);
      if (i === 60) {
        i = 0;
        k = k + 1;
      }
      // console.log(k);
      // document.getElementById("p2").innerHTML = k + ":" + i;
      message[0] = k;
      message[1] = i;
      timeToWork();
    } else {
      i = 0;
      k = 0;
      music.play();
      message[0] = k;
      message[1] = i;
      timeToWork();
    }
    if (k === g && i === 0) {
      music.play();
    }
  }, 1000);

  // setTimeout(() => {
  //   music.play();
  //   alert("注意休息，现在开始休息十分钟");
  //   console.log(i);
  //   timeToRest();
  // }, j);
  self.postMessage(message);
}
timeToWork();
