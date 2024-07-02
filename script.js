function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateDay() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const day = days[now.getUTCDay()];
  document.getElementById('day').textContent = day;
}

updateTime();
updateDay();
setInterval(updateTime, 1000);
