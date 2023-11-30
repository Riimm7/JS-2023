function getUserAge() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const userBirthYear = parseInt(
    document.getElementById("year-birth_input").value
  );
  const userAge = currentYear - userBirthYear;
  document.querySelector(".res").innerText = userAge;
}
window.onload = function () {
  document.getElementById("year-birth_input").onchange = getUserAge;
};
