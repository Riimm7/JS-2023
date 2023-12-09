class Table {
  constructor(nameTable) {
    this.nameTable = nameTable;
  }
  getRandomNum(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
  render(containerSelector) {
    this.title = document.createElement("h2");
    this.title.innerText = this.nameTable;
    this.p = document.createElement("p");

    this.table = document.createElement("table");
    this.table.setAttribute("value", 0);
    for (let i = 0; i < 3; i++) {
      this.tr = document.createElement("tr");
      for (let j = 0; j < 3; j++) {
        this.td = document.createElement("td");
        this.td.innerText = this.getRandomNum(1, 100);
        this.td.onclick = () => {
          this.table.style.borderColor = "red";
          this.table.setAttribute(
            "value",
            parseInt(this.table.getAttribute("value")) + 1
          );
          this.p.innerText =
            "Лічильник кліків = " + this.table.getAttribute("value");
          this.title.append(this.p);
        };
        this.tr.append(this.td);
      }
      this.table.append(this.tr);
    }

    const container = document.querySelector(containerSelector);

    if (container) {
      container.append(this.title);
      container.append(this.table);
    }
  }
}

const table1 = new Table("Таблиця №1");
table1.render(".Main");
const table2 = new Table("Таблиця №2");
table2.render(".Main");
const table3 = new Table("Таблиця №3");
table3.render(".Main");
