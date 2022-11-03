setInterval(function () {
  let dateNow = new Date();
  let Hor = dateNow.getHours();
  let Min = dateNow.getMinutes();
  let Sec = dateNow.getSeconds();

  Min = zero(Min);
  Sec = zero(Sec);

  document.querySelector(".Timer").innerHTML = Hor + ":" + Min + ":" + Sec;
}, 1000);

function zero(x) {
  if (x < 10) {
    x = "0" + x;
  }
  return x;
}
