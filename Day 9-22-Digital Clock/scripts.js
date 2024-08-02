const time = document.querySelector(".time");
setTime();
setInterval(() => {
  setTime();
}, 1000);

function setTime() {
  const timer = new Date();
  let hours = timer.getHours();
  let min = timer.getMinutes();
  let sec = timer.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  {
    hours < 10
      ? (time.innerHTML = `0${hours} : ${min} : ${sec}`)
      : (time.innerHTML = `${hours} : ${min} : ${sec}`);
  }
}
