// auto darkmode and lightmode
const schedule= () => {
  let currentTime = new Date().getHours();
  if (0 <= currentTime && currentTime < 8) {
    document.write("<link rel='stylesheet' href='css/night.css' type='text/css'>");
  }
  if (8 <= currentTime && currentTime < 19) {
    document.write("<link rel='stylesheet' href='css/day.css' type='text/css'>");
  }
  if (19 <= currentTime && currentTime < 24) {
    document.write("<link rel='stylesheet' href='css/night.css' type='text/css'>");
  }
}
schedule();

// custom message on inactive tab
let originalPageTitle = document.title;
let changeTitleTimeout;

const changeTitle = () => {
  document.title = document.hidden ? "My precious... tab" : originalPageTitle;
}

$(document).on('visibilitychange', function (e) {
  clearTimeout(changeTitleTimeout);
  changeTitleTimeout = setTimeout(changeTitle, 10);
});