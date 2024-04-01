function datosDinamicos() {
	
	let persona = {
		nombre:$("#inNom").val(),
		apellido:document.getElementById("inAp").value,
		edad:document.getElementById("inEd").value,
		ciudad:document.getElementById("inCi").value
	}

	$("tbody").append("<tr>" + "<td>"+persona.nombre+"</td><td>"+persona.apellido+"</td><td>"+persona.edad+"</td><td>"+persona.ciudad+"</td>");
}