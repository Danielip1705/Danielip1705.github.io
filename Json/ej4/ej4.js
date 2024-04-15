//Objeto calc que contiene los atributos en la que se realizara las operacion
let calc = {
    suma: 0,
    media: 0,
    minimo: 999,
    maximo: -999,
    i: 1
}

let fila = [];

//Funcion principal que ejecutara instrucciones y funciones del sricp
function datosDinamicos() {
    //Objeto persona con valores
    let persona = {
        nombre: $("#inNom").val(),
        apellido: document.getElementById("inAp").value,
        edad: document.getElementById("inEd").value,
        ciudad: document.getElementById("inCi").value
    }
    //si el resultado de alerta es distinto de true,
    if (!alerta(persona)) {
        calculos(persona)
        fila.push(persona)
        generarTabla()
        console.log(fila)
    }
}

//Funcion que muestra una alerta si todos los campos no estan llenos
function alerta(persona) {
    let valido = false;
    if (persona.nombre == "" || persona.apellido == "" || persona.edad == "" || persona.ciudad == "") {
        alert("Te falta rellenar algun campo");
        valido = true;
    }
    return valido;
}

function generarTabla() {
	let i=0;
    fila.forEach(element => {
        $("tbody").append("<tr id= tr"+ i +">" +
            "<td>" + element.nombre + "</td><td>" +
            element.apellido + "</td><td>" +
            parseInt(element.edad) + "</td><td>" +
            element.ciudad + "</td><td><button onclick='borrar()'>Borrar</td>" +
            "</tr>");
			i++
    });
}
function borrar(id) {
	let elemento = $("tr")
	elemento.remove()
}

//Funcion que genera el tr
function generaTR(persona) {

    $("tbody").append("<tr>" +
        "<td>" + persona.nombre + "</td><td>" +
        persona.apellido + "</td><td>" +
        persona.edad + "</td><td>" +
        persona.ciudad + "</td>" +
        "</tr>");
}

//Funcion que calcula la suma,media,maximo,minimo
function calculos(persona) {
    //Operacion para sacar la suma
    calc.suma += parseInt(persona.edad);

    $("#suma").text("Suma: " + calc.suma);

    //Operacion para realizar la media
    calc.media = calc.suma / calc.i;

    $("#media").text("Media: " + calc.media);

    //Operacion para realizar el maximo
    if (calc.maximo < parseInt(persona.edad)) {
        calc.maximo = parseInt(persona.edad);

        $("#maximo").text("Maximo: " + calc.maximo)
    }

    //Operacion para realizar el minimo
    if (calc.minimo > parseInt(persona.edad)) {
        calc.minimo = parseInt(persona.edad)

        $("#minimo").text("Minimo: " + calc.minimo)
    }

    calc.i++;
}