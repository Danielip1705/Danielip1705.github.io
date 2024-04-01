function mostrarDatos1() {

let persona = {
	nombre : "Daniel",
	apellidos : "Iglesias",
	edad : "18",
	ciudad: "Sevilla"
}

let personaJSON = JSON.stringify(persona);

console.log(personaJSON);

personaJSON = JSON.parse(personaJSON)

console.log(personaJSON);
}