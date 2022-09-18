var i = 0;
var k = 0;
var j = 2; //循环闹钟时间，单位分钟
var time1;
const music = new Audio("Ring07.wav");
function timeToRest() {
  // var i=1;
  // var j = document.getElementById("button1").getAttribute("value");
  // for (let i = 0; i < 3; i++) {
  //   //   setTimeout(() => {
  //   //      alert(i)
  //   //   }, 5000 * i)
  //   console.log(i);
  //  };
  document.getElementById("button1").disabled = true;
  time1 = setTimeout(() => {
    if (k < j) {
      i++;
      console.log(i);
      if (i === 60) {
        i = 0;
        k = k + 1;
      }
      console.log(k);
      document.getElementById("p2").innerHTML = k + ":" + i;
      timeToRest();
    } else {
      i = 0;
      k = 0;
      music.play();
      timeToRest();
    }
  }, 1000);
  // setTimeout(() => {
  //   music.play();
  //   alert("注意休息，现在开始休息十分钟");
  //   console.log(i);
  //   timeToRest();
  // }, j);
}
function timeToStop() {
  document.getElementById("button1").disabled = false;
  clearTimeout(time1);
  i = 0;
  k = 0;
  document.getElementById("p2").innerHTML = k + ":" + i;
}
// function setTime(i){
//     setTimeout(console.log(i),4000);
// }
// function myFun(){
//     var obj =document.getElementById("p1");
//     obj.innerHTML='开始放松';
// }
