
//Objeto cacl que contiene los atributos en la que se realizara las operacion
let calc = {
	suma:0,
	media:0,
	minimo:999,
	maximo:-999,
	i:1
}
//Funcion principal que ejecutara instrucciones y funciones del sricp
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
		calculos(persona);

	}		
}
//Funcion que muestra una alerta si todos los campos no estan llenos
function alerta(persona) {
	let valido = false;
	if (persona.nombre=="" || persona.apellido=="" || persona.edad==""
		|| persona.ciudad=="" || persona.ciudad=="") {
		alert("Te falta rellenar el campo nombre");
		valido = true;
	}
	return valido;
}

//Funcion que genera el tr
function generaTR(persona){

	$("tbody").append("<tr>" +
	"<td>"+persona.nombre+"</td><td>"+
	persona.apellido+"</td><td>"+
	persona.edad+"</td><td>"+
	persona.ciudad+"</td>"+
	"</tr>");
}


//nota: hay que crear array de filas y realizar un push cada vez
function eliminarTabla(){
	

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

//Operacion para realizar el minimo
if(calc.minimo>parseInt(persona.edad)){
calc.minimo = parseInt(persona.edad)
$("#minimo").text("Minimo: " + calc.minimo)
}

calc.i++;
}

