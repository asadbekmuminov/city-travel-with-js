const london = document.getElementById("london-time");
const rome = document.getElementById("rome-time");
const newYork = document.getElementById("newYork-time");
const tokio = document.getElementById("tokio-time");
const paris = document.getElementById("paris-time");
setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  london.textContent = `${hour - 4 < 10 ? "0" + (hour - 4) : hour - 4}:${
    minute < 10 ? "0" + minute : minute
  }`;
  rome.textContent = `${hour - 3 < 10 ? "0" + (hour - 3) : hour - 3}:${
    minute < 10 ? "0" + minute : minute
  }`;
  newYork.textContent = `${hour - 9 < 10 ? "0" + (hour - 9) : hour - 9}:${
    minute < 10 ? "0" + minute : minute
  }`;
  tokio.textContent = `${hour + 4 < 10 ? "0" + (hour + 4) : hour + 4}:${
    minute < 10 ? "0" + minute : minute
  }`;
  paris.textContent = `${hour - 3 < 10 ? "0" + (hour - 3) : hour - 3}:${
    minute < 10 ? "0" + minute : minute
  }`;
}, 1000);
