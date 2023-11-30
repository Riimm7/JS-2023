function convert() {
  const rateUsd = 37.5;
  const rateEur = 40;
  const userMoney = parseFloat(document.getElementById("input1").value);
  const userUsd = userMoney / rateUsd;
  const userEur = userMoney / rateEur;
  document.getElementById("input2").value = userUsd.toFixed(2);
  document.getElementById("input3").value = userEur.toFixed(2);
}
window.onload = function () {
  document.querySelector("button").onclick = convert;
  // якщо натиснути ентер
  document.getElementById("input1").onchange = convert;
  // в реальному часі
  // document.getElementById("input1").oninput = convert;
};
