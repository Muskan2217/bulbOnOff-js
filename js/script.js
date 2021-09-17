function bulbOn() {
  let bulbobj = document.querySelector(".bulbOff");
  bulbobj.setAttribute("src", "imgs/bulb-On.png");
}

function bulbOff() {
  let bulbobj = document.querySelector(".bulbOff");
  bulbobj.setAttribute("src", "imgs/bulb-Off.png");
}

document.getElementById("onbtn").addEventListener("click", function () {
  document.getElementById("cont").style.boxShadow =
    "#fff71ac6 0px 22px 70px 4px";
});

document.getElementById("offbtn").addEventListener("click", function () {
  document.getElementById("cont").style.boxShadow = "none";
});
