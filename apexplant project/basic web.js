function filterBikes() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.getElementsByClassName("bike-card");

    for (let card of cards) {
        const title = card.querySelector("h2").innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}