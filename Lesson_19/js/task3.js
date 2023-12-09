class FiveRandomGenerateList {
  getRandomNum(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }
  changeColor() {
    const allList = document.querySelectorAll("ol");

    for (const ol of allList) {
      if (ol.children.length % 2) ol.style.color = "red";
      else ol.style.color = "green";
    }
  }
  render(containerSelector) {
    const container = document.querySelector(containerSelector);

    if (!container) {
      console.error("Container not found.");
      return;
    }

    for (let i = 0; i < 5; i++) {
      const ol = document.createElement("ol");

      let listItems = this.getRandomNum(1, 10);

      for (let k = 0; k < listItems; k++) {
        const li = document.createElement("li");
        li.innerText = this.getRandomNum(1, 100);
        ol.appendChild(li);
      }

      container.appendChild(ol);
    }
    const button = document.createElement("button");
    button.innerText = "Знайти парні списки";
    button.onclick = this.changeColor;
    container.appendChild(button);
  }
}

let Test = new FiveRandomGenerateList();
Test.render(".Main");
