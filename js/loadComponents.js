function loadComponent(id, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (callback) callback(); // Führt eine Funktion aus, nachdem der Header geladen wurde
        })
        .catch(error => console.error("Fehler beim Laden von", file, error));
}

// Erst Header laden, dann anderen Code ausführen
document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header-placeholder", "header.html", function () {
    });
});
