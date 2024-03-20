function obtenerDatos() {
	var xhr = new XMLHttpRequest();

	xhr.open("GET","https://jsonplaceholder.typicode.com/photos",true);

	xhr.onload=function(){
		if (xhr.status == 200) {
			var albunes = JSON.parse(xhr.responseText);


			mostrarDatos();
		} else{
		console.error("Error al realizar la solicitud. Código de estado: " + xhr.status);
		}
	};

	xhr.onerror = function(){
		console.error("Error ha realizar la conexión");
	};

	xhr.send();

}

function mostrarDatos(albunes){
	var resultadoX = document.getElementByID('resultado');
	resultadoX.innerHTML("<h1>Datos Obtenidos");


	var listaDatos "<ul>";
	albunes.forEach(function(albunes){
		listaDatos += "<li><strong> ID"+albunes.albumId+ "</strong><strong> Titulo: " +albunes.title + "</strong><strong>"
	});
	listaDatos += "</ul>"
	resultadoX.innerHTML = listaDatos;
}