function obtenerDatos() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            var albunes = JSON.parse(xhr.responseText);

            mostrarDatos(albunes);
        } else {
            console.error("Error al realizar la solicitud. Código de estado: " + xhr.status);
        }
    };

    xhr.onerror = function () {
        console.error("Error al realizar la conexión");
    };

    xhr.send();
}

function mostrarDatos(albunes) {
    var resultadoX = document.getElementById("resultado");
    resultadoX.innerHTML = "<h1>Datos Obtenidos</h1>";

    var listaDatos = "<ul>";
    albunes.forEach(function (album) {
        listaDatos += "<li><strong> ID" + album.albumId + "</strong><strong> Titulo: " + album.title + "</strong></li>";
    });

    listaDatos += "</ul>";
    resultadoX.innerHTML += listaDatos;
}
