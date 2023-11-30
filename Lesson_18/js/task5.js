function table() {
  const userRow = document.getElementById("inputRow").value;
  const userCol = document.getElementById("inputCol").value;

  document.body.innerHTML = "";

  const table = document.createElement("table");
  document.body.prepend(table);

  let number = 1;
  for (let i = 1; i <= userRow; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= userCol; j++) {
      const col = document.createElement("td");
      // col.innerText = `${number}`;
      col.textContent = `${number}`;
      row.append(col);
      number++;
    }
    table.append(row);
  }
}
document.querySelector("button").onclick = table;
