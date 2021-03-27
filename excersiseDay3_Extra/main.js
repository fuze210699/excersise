function clearAndset() {
  var TIME_LIMIT = 30;
  var TIME_PASSED = 0;
  var TIME_LEFT = TIME_LIMIT;
  // tính toán thời gian
  const MINUTE = (TIME_LIMIT / 60).toFixed(1);
  let SECOND;
  if (MINUTE >= 1) {
    // Set thời gian lên giao diện
    const SECOND = TIME_LIMIT - 60 * MINUTE;
    if (SECOND < 10) {
      document.querySelector(".second").innerHTML = "0" + SECOND;
    }
  } else if (MINUTE < 1) {
    // Set thời gian lên giao diện
    document.querySelector(".minute").innerHTML = "00";
    document.querySelector(".second").innerHTML = TIME_LIMIT;
  }
}
window.addEventListener("load", clearAndset);
// Tạo cho thời gian chạy
function startTimer() {
  var TIME_LIMIT = 30;
  var TIME_PASSED = 0;
  var TIME_LEFT = TIME_LIMIT;
  var randomTime = setInterval(randomColor,1000);
  timerInterval = setInterval(() => {
    TIME_PASSED = TIME_PASSED + 1;
    TIME_LEFT = TIME_LIMIT - TIME_PASSED;
    if (TIME_LEFT < 10) {
      document.querySelector(".second").innerHTML = "0" + TIME_LEFT;
      document.querySelector(".audio-10s").classList.add("audio-start");
    } else {
      document.querySelector(".second").innerHTML = TIME_LEFT;
    }
    if (TIME_LEFT === 0) {
      document.querySelector(".audio-bell-rang").autoplay = true;
      document.querySelector(".audio-bell-rang").load();
      clearInterval(timerInterval);
      clearInterval(randomTime);
      document.querySelector(".btn-start").disabled = false;
      return TIME_LEFT;
    }
    var count = true;
    if (document.querySelector(".audio-start") !== null && count === true) {
      document.querySelector(".audio-10s").autoplay = true;
      document.querySelector(".audio-10s").load();
    }
  }, 1000);
}
const btnStart = document.querySelector(".btn-start");
btnStart.addEventListener("click", () => {
    randomColor();
    document.querySelector(".audio-begin").autoplay = true;
    document.querySelector(".btn-start").disabled = true;
    document.querySelector(".audio-begin").load();
    startTimer();
});

// change color
let color = ["red", "orange", "yellow", "green", "blue", "gray", "purple"];
function getRanDomIndex(min, max) {
  let a = max - min + 1;
  let b = Math.random() * a;
  let c = Math.floor(b) + min;
  return c;
}
function randomColor() {
  const listItem = document.querySelectorAll(".item");
  listItem.forEach((item) => {
    let index = getRanDomIndex(0, color.length - 1);
    let currentColor = item.style.backgroundColor;
    if (currentColor === color[index]) {
      item.style.backgroundColor = color[index];
    }
    item.style.backgroundColor = color[index];
    item.classList.add(color[index]);
    for(i=0;i<index;i++){
        item.classList.remove(color[i]);
    }
    for(i=index+1;i<=color.length;i++){
        item.classList.remove(color[i]);
    }
    item.classList.remove(color[!index]);
    document.querySelector(".color").innerHTML=color[index];
    document.querySelector(".color").style.color=color[index - 1]; 
  });
  listItem.forEach((item) => {
    let index = getRanDomIndex(0, color.length - 1);
    document.querySelector(".color").innerHTML=color[index];
    document.querySelector(".color").style.color=color[index - 1]; 
  });
}
let answer = 0;
const itemClick = document.querySelector(".item");
itemClick.addEventListener("click", () => {
    
    var colorText = document.querySelector(".color").style.color;
    console.log(document.querySelector(".color").style.color);
    console.log(document.querySelector(".item").classList[1]);
    if(document.querySelector(".item").classList[1] === colorText){
        ++answer;
        document.querySelector(".user-result").innerHTML = answer;
    } 
    
});
