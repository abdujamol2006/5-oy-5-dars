let button = document.querySelector("#btn");
button.addEventListener("click", function () {
  function RandomColor() {
    let randomNum1 = Math.floor(Math.random() * 255);
    let randomNum2 = Math.floor(Math.random() * 200);
    let randomNum3 = Math.floor(Math.random() * 150);
    return `rgb(${randomNum1},${randomNum2},${randomNum3})`;
  }
  container.style.backgroundImage = `linear-gradient(217deg, ${RandomColor()}, ${RandomColor()} 70.71%)`;

  btn.style.backgroundImage = ` linear-gradient(127deg, ${RandomColor()}, ${RandomColor()} 70.71%)`;

  text.style.color = RandomColor();
  btn.style.borderImage = `linear-gradient(${RandomColor()},${RandomColor()})`;
  btn.style.borderRadius = 10;
});
