const commonListElements = document.querySelectorAll(".common-list .member");
const chosenListElements = document.querySelectorAll(".chosen-list .member");

for (const element of commonListElements) {
  element.onclick = function () {
    moveElement(element);
  };
}

for (const element of chosenListElements) {
  element.onclick = function () {
    returnElement(element);
  };
}

function moveElement(element) {
  const chosenList = document.querySelector(".chosen-list");
  chosenList.appendChild(element);
  element.onclick = function () {
    returnElement(element);
  };
}

function returnElement(element) {
  const commonList = document.querySelector(".common-list");
  commonList.appendChild(element);
  element.onclick = function () {
    moveElement(element);
  };
}
