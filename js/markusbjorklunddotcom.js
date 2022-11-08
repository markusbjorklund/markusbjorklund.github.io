/*// auto darkmode and lightmode
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
*/

// custom message on inactive tab
let originalPageTitle = document.title;
let changeTitleTimeout;

const changeTitle = () => {
  document.title = document.hidden ? "¯\\\_(ツ)_/¯" : originalPageTitle;
}

$(document).on('visibilitychange', function (e) {
  clearTimeout(changeTitleTimeout);
  changeTitleTimeout = setTimeout(changeTitle, 10);
});

// get current age
const getAge= (dateString) => {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}
