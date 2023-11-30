function table() {
  const userNum = parseInt(document.getElementById("userNum").value);

  const table = document.createElement("table");
  const button = document.createElement("button");
  button.innerText = "Розрахувати";
  document.body.append(table, button);

  const row = document.createElement("tr");
  for (let i = 1; i <= userNum; i++) {
    const col = document.createElement("td");
    col.innerHTML = `<input class="userScore" type="number" placeholder="Оцінка ${i}">`;
    row.append(col);
  }
  table.append(row);

  button.onclick = printAverageScore;
}

function printAverageScore() {
  let sum = 0;
  let validScoresCount = 0;
  const scores = document.querySelectorAll(".userScore");

  scores.forEach((score) => {
    const parsedScore = parseInt(score.value);
    if (!isNaN(parsedScore)) {
      sum += parsedScore;
      validScoresCount++;
    }
  });

  const div = document.createElement("div");
  document.body.append(div);

  const average = validScoresCount > 0 ? sum / validScoresCount : 0;
  div.innerText = `Середнє значення = ${average}`;
}

document.querySelector("button").onclick = table;
