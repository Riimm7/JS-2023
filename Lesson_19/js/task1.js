function clickElement() {
  const mainSection = document.getElementsByClassName("Main")[0];

  const divArr = mainSection.getElementsByTagName("div");

  for (const div of divArr) {
    div.onclick = function () {
      this.style.color = "red";
    };
  }
}

clickElement();
