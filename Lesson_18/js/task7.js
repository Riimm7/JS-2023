function getTotalPrice() {
  let sumTicketPrice = 0;
  for (let i = 1; i <= 3; i++) {
    let transportValue = parseInt(
      document.getElementById(`transport${i}`).value
    );
    sumTicketPrice += transportValue;
  }
  const inputsArray = document.querySelectorAll("input");
  let totalInputPrice = 0;
  for (const input of inputsArray) {
    if (input.checked) {
      totalInputPrice += parseInt(input.value);
    }
  }
  const result = sumTicketPrice + totalInputPrice;
  document.getElementById("total").value = result;
}

document.querySelector("button").onclick = getTotalPrice;
