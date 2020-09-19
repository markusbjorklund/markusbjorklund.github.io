// dark side
function darkmode() {
  const body = document.body; body.classList.toggle("w3-black");
  const img = document.getElementsByTagName("img")[0]; img.classList.toggle("w3-grayscale-max");
};

// custom message
let originalPageTitle = document.title;
let changeTitleTimeout;

function changeTitle() {
  document.title = document.hidden ? "Get back here you filthy animal" : originalPageTitle;
}

$(document).on('visibilitychange', function (e) {
  clearTimeout(changeTitleTimeout);
  changeTitleTimeout = setTimeout(changeTitle, 200);
});

// no pointers mousing on my face
const head = document.getElementsByTagName('HEAD')[0];
const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'style.css';
head.appendChild(link);  