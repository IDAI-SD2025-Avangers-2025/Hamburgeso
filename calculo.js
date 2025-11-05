var formulario = document.getElementById("calcularprecio");




function calcular() {
    var total = 0;

    var cantidad = parseInt(formulario.cantidad.value) || 1;

    var tamano = getRadioValue("tam"); 
    
    if (!tamano) {
        alert("Por favor selecciona un tamaño (chico, mediano, o grande).");
        return;
    }


    if (tamano == "chico") {
        total = 100;
    } else if (tamano == "mediano") {
        total = 150;
    } else if (tamano == "grande") {
        total = 200;
    }

    // 3. Get Bread Type (Pan)
    var pan = getRadioValue("pan");

    if (!pan) {
        alert("Por favor selecciona un tipo de pan.");
        return;
    }

    if (pan == "integral") 
 {
        total += 20; 
    } 
    else if (pan == "blanco") 
    {
        total += 0;
    } 
    else if (pan == "papa") 
    {
        total += 25;
    } 
    else if (pan == "parmesano")
    {
        total += 30;
    } 

   
    if (formulario.tomate.checked) 
        total += 10;
    if (formulario.cebolla.checked)
         total += 10;
    if (formulario.jamon.checked) 
        total += 10;
    if (formulario.tocino.checked) 
        total += 10;
    if (formulario.piña.checked) 
        total += 10;
    if (formulario.queso.checked)
         total += 10;
    if (formulario.mostaza.checked) 
        total += 10;
    if (formulario.champiñones.checked)
         total += 10; 
    if (formulario.salami.checked) 
        total += 10;
    if (formulario.peperoni.checked)
         total += 10;

    if (formulario.combo.value.toLowerCase() == "si") {
        total += 50;
    }
    formulario.total.value = total * cantidad;
}