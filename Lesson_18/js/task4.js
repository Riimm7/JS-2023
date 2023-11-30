let wishesArray = [
  "щастя",
  "гроші",
  "смаколики",
  "настільні ігри",
  "кальян",
  "гори",
];

function printWishes(number, array) {
  let newArray = [...array];
  console.log(newArray);
  for (let i = 0; i < number; i++) {
    if (newArray.length === 0) {
      throw new Error("масив порожній");
    }

    const randomArrayNum = Math.floor(Math.random() * newArray.length);
    const wish = newArray[randomArrayNum];
    const div = document.createElement("div");
    div.innerText = wish;
    document.body.append(div);
    newArray.splice(randomArrayNum, 1);
    console.log(newArray);
  }
}

printWishes(3, wishesArray);
