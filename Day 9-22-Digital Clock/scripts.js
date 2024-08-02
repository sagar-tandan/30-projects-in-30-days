const time = document.querySelector(".time");

setInterval(() => {
  const timer = new Date();
  const hours = timer.getHours();
  const min = timer.getMinutes();
  const sec = timer.getSeconds();

  time.innerHTML = `${hours} : ${min} : ${sec}`;
}, 1000);
