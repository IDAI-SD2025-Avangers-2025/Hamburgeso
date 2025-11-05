var formulario = document.getElementById("calcularprecio");

function calcular() {

var tamano = formulario.tam.value;

alert(tamano);

var total = 0;

    if (tamano == "chico")
    {
        total = 100;
    }
    else if (tamano == "mediano")
    {
        total = 150;
    }
    else if (tamano == "grande")
    {
        total = 200;
    }

    formulario.total.value = total;

// alert("variable formulario:" + formulario
//     + "variable cantidad:" + cantidad);
//
}