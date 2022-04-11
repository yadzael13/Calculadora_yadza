body = document.querySelector('body');

themeone = document.querySelector("#theme_one");
themetwo = document.querySelector("#theme_two");
themethree = document.querySelector("#theme_three");
themeone.addEventListener("click", () => changethemeOne());
themetwo.addEventListener("click", () => changethemeTwo());
themethree.addEventListener("click", () => changethemeThree());


function changethemeOne() {
  body.style.background = "#3b4664";
}

function changethemeTwo() {
  body.style.background = "#145A32";
}

function changethemeThree() {
  body.style.background = "#4A235A";
}
