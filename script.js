function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    document.getElementById('time').textContent = utcTime;
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