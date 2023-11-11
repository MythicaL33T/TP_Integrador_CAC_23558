// valor del ticket
const ticket = 200;

// descuentos
const descEstudiante = 0.80;
const descTrainee = 0.50;
const descJunior = 0.15;

// elementos
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const pago = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');

function calcularPago(){
    
    let total = cantidad.value * ticket;

    // descuentos por categoria

    switch (categoria.value) {
        case "estudiante":
            total = total - (total * descEstudiante);
            break;
    
        case "trainee":
            total = total - (total * descTrainee);
            break;

        case "junior":
            total = total - (total * descJunior);
            break;

    }

    pago.textContent = `Total a pagar: $ ${total}`;

}

btnResumen.addEventListener('click',(e)=>{
    // evita que se refresque la pagina (preventDefault)
    e.preventDefault();
    calcularPago();

});


