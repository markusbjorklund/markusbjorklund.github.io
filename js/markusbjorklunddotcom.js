// auto darkmode
function automode() {
  let currentTime = new Date().getHours();
  if (0 <= currentTime && currentTime < 8) {
    document.write("<link rel='stylesheet' href='css/night.css' type='text/css'>");
  }
  if (8 <= currentTime && currentTime < 20) {
    document.write("<link rel='stylesheet' href='css/day.css' type='text/css'>");
  }
  if (20 <= currentTime && currentTime < 24) {
    document.write("<link rel='stylesheet' href='css/night.css' type='text/css'>");
  }
}

automode();

// custom message
let originalPageTitle = document.title;
let changeTitleTimeout;

function changeTitle() {
  document.title = document.hidden ? "Hasta la vista, baby" : originalPageTitle;
}

$(document).on('visibilitychange', function (e) {
  clearTimeout(changeTitleTimeout);
  changeTitleTimeout = setTimeout(changeTitle, 200);
});