function mostrarTabla() {
	
	let persona ={
	nombre : "Daniel",
	apellidos : "Iglesias",
	edad : "18",
	ciudad: "Sevilla"
	}

	document.getElementById("nombre").innerHTML = persona.nombre;
	document.getElementById("apellidos").innerHTML = persona.apellidos;
	document.getElementById("edad").innerHTML = persona.edad;
	document.getElementById("ciudad").innerHTML = persona.ciudad;
}