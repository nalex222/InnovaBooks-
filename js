// ------------------------------
// MODO OSCURO
// ------------------------------
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// ------------------------------
// BUSCADOR
// ------------------------------
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", () => {
    let value = searchBar.value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(book => {
        let title = book.querySelector("h3").textContent.toLowerCase();
        book.style.display = title.includes(value) ? "block" : "none";
    });
});
