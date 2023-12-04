function autoFillInputValues() {
  let thisInput = this;
  let thisInputValue = parseInt(thisInput.value);
  let thisInputParent = thisInput.parentElement;
  let prevInputParent = thisInputParent.previousElementSibling;
  let nextInputParent = thisInputParent.nextElementSibling;

  while (prevInputParent) {
    thisInput = prevInputParent.lastElementChild;
    thisInput.value = thisInputValue - 1;
    thisInputValue--;
    thisInputParent = thisInput.parentElement;
    prevInputParent = thisInputParent.previousElementSibling;
  }
  thisInput = this;
  thisInputValue = parseInt(thisInput.value);
  while (nextInputParent) {
    thisInput = nextInputParent.lastElementChild;
    thisInput.value = thisInputValue + 1;
    thisInputValue++;
    thisInputParent = thisInput.parentElement;
    nextInputParent = thisInputParent.nextElementSibling;
  }
}

const mainSection = document.querySelector(".Main");
const inputs = mainSection.querySelectorAll("input");

for (const input of inputs) {
  input.oninput = autoFillInputValues;
}
