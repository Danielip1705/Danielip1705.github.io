
let calc = {
	suma:0,
	media:0,
	minimo:999,
	maximo:-999,
	i:1
}

let fila = [];
function datosDinamicos() {
	//Objeto persona con valores
	let persona = {
		nombre:$("#inNom").val(),
		apellido:document.getElementById("inAp").value,
		edad:document.getElementById("inEd").value,
		ciudad:document.getElementById("inCi").value
	}
	//si el resultado de alerta es distinto de true,
	if(!alerta(persona)){
		//Crearemos tr y haremos los calculos de las edades
		generaTR(persona);

		fila.push(persona);

		console.log(fila)
		calculos(persona);

	}
		

		
}

function alerta(persona) {
	let valido = false;
	if (persona.nombre=="" || persona.apellido=="" || persona.edad==""
		|| persona.ciudad=="" || persona.ciudad=="") {
		alert("Te falta rellenar el campo nombre");
		valido = true;
	}
	return valido;
}

function generaTR(persona){

	$("tbody").append("<tr id=\"fila.length\">" + 
	"<td>"+persona.nombre+"</td><td>"+
	persona.apellido+"</td><td>"+
	persona.edad+"</td><td>"+
	persona.ciudad+"</td>");
}

//nota: hay que crear array de filas y realizar un push cada vez
function eliminarTabla(){
$("#cacl.i")
}
//Funcion que calcula la suma,media,maximo,minimo
function calculos(persona) {

//Operacion para sacar la suma
calc.suma += parseInt(persona.edad);
$("#suma").text("Suma: " + calc.suma);
console.log(calc.suma);


//Operacion para realizar la media
calc.media = calc.suma /calc.i;
$("#media").text("Media: " + calc.media);
console.log(calc.media);

//Operacion para realizar el maximo
if(calc.maximo<parseInt(persona.edad)){
calc.maximo = parseInt(persona.edad);
$("#maximo").text("Maximo: " + calc.maximo)
}

if(calc.minimo>parseInt(persona.edad)){
calc.minimo = parseInt(persona.edad)
$("#minimo").text("Minimo: " + calc.minimo)
}
calc.i++;
}

