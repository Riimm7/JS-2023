const cards = document.getElementsByClassName("product-card");
for (const card of cards) {
  card.onclick = function () {
    toggleClassActive(card);
  };
}
function toggleClassActive(card) {
  card.classList.toggle("active");
}
