function calculator(operation) {
  const firstNum = parseFloat(document.getElementsByTagName("input")[0].value);
  const secondNum = parseFloat(document.getElementsByTagName("input")[1].value);
  let result;
  switch (operation) {
    case "Додати":
      result = firstNum + secondNum;
      break;
    case "Відняти":
      result = firstNum - secondNum;
      break;
    case "Помножити":
      result = firstNum * secondNum;
      break;
    case "Розділити":
      if (secondNum === 0) {
        alert("Ділення на нуль неможливе.");
        return;
      }
      result = firstNum / secondNum;
      break;
    default:
      alert("Невідома операція.");
      return;
  }
  document.getElementsByTagName("input")[2].value = result;
}
window.onload = function () {
  const buttons = document.querySelectorAll(".ButtonsOperation button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const buttonText = button.innerText;
      calculator(buttonText);
    });
  });
};
