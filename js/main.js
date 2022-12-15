let Remera = 1;
let Campera = 2;
let Jogger = 3;
let Buzo = 4;

const MARCA = "Joggins ZS"
const BIENVENIDA = ("¡Bienvenido a  " + MARCA+"!");

console.log(MARCA);
alert(BIENVENIDA);

let NombreCliente= prompt("Ingrese su Nombre").toUpperCase();
let ApellidoCliente = prompt("Ingrese su Apellido").toUpperCase();
let CorreoCliente= prompt("Ingrese su Dirección de Correo Electrónico").toUpperCase();
    if (CorreoCliente.includes("@")){
        let CorreoCliente = alert("Correo electronico valido");
    } 
 
function solicitarNombre() {
    alert("Bienvenido " + NombreCliente + " "+ ApellidoCliente + " . ¡Gracias por visitarnos!. " + "Recibirás la confirmación de compra al correo ingresado: " + CorreoCliente)
}

const carrito = []

function elegirPrenda() {

    let prenda;
        do {
        prenda = parseInt(prompt("Ingresá la prenda que deseas comprar.\n\nEjemplo seleccioná '1' para Remera.\n\n1- Remera\n2- Campera\n3- Jogger\n4- Buzo"));
            } while (prenda !=1 && prenda !=2 && prenda !=3&& prenda !=4);
            switch(prenda){
                case 1:
                return "Remera";
                case 2:
                return "Campera";
                case 3:
                return "Jogger";
                case 4:
                return "Buzo";

            default:
            console.log("Solo puedes elegir un número entre 1 y 4");
            alert("Solo puedes elegir un número entre 1 y 4");
            break;
        }
}

function elegirTalle() {
    let talle;
    do {
        talle = parseInt(prompt("Seleccioná el talle.\n\nEjemplo seleccioná '1' S.\n\n1- S \n2- M \n3- L"));
    } while (talle !=1 && talle !=2 && talle !=3);
    switch(talle){
        case 1:
            return "S";
        case 2:
            return "M";
        case 3:
            return "L";
        default:
            console.log("Solo puedes elegir un número entre 1 y 3");
            alert("Solo puedes elegir un número entre 1 y 4");
        break;
    }
}

function validarPrecio (prenda, talle) {

    if (prenda === "Remera" && talle === "S") {
                return 5000;
    } else if (prenda === "Remera" && talle === "M") {
                return 5000;
    } else if (prenda === "Remera" && talle === "L") {
                return 5000;     
    } 
    
    if (prenda === "Campera" && talle === "S") {
        return 15000;
    } else if (prenda === "Campera" && talle === "M") {
        return 15000;
    } else if (prenda === "Campera" && talle === "L") {
        return 15000; 

}

    if (prenda === "Jogger" && talle === "S") {
        return 10000;
    } else if (prenda === "Jogger" && talle === "M") {
        return 10000;
    } else if (prenda === "Jogger" && talle === "L") {
        return 10000; 
}

    if (prenda === "Buzo" && talle === "S") {
        return 8000;
    } else if (prenda === "Buzo" && talle === "M") {
        return 8000;
    } else if (prenda === "Buzo" && talle === "L") {
        return 8000; 
    }
}


function preciototal (nombre, talle, precio){
    alert("El precio de " + nombre + " talle "+ talle + "\nes de S/" + precio)
    agregarProducto()
}

function agregarProducto() {
    let agregarProducto;
    do {
        agregarProducto = parseInt(prompt( "Desea añadir más productos?.\n\n1- Si.\n\n2- No "))
    } while (agregarProducto !=1 && agregarProducto !=2);
    switch(agregarProducto){
        case 1:
            flow(); 
        case 2:
            detalleCompra();
            break;
        default:
            console.log("Solo puedes elegir un número entre 1 y 2");
            alert("Solo puedes elegir un número entre 1 y 2");
            break;
    }
}

function detalleCompra() {
    let detalle = "Detalle de compra \n\n"
    let body = "Prenda  Talle  Precio\n"
    let item = ""
    let total = 0;
    

    carrito.forEach((element) => {
    item +=  element.nombre+ "     "+  element.talle+"     "+  element.precio+"\n";
    total+= element.precio;
    });

    let precioTotal = "Total       "+total
    let fin = "\n ========================"
    let boleta = detalle + body + item + precioTotal +fin
    
    console.log(boleta)
    let pago = 0

    do {
        pago = parseInt(prompt("El resumen de tu compra: " + boleta+ "\n¿Con cuanto pagas?"))
        while (isNaN(pago)) {
            alert("Ingrese un valor númerico");
            break;
            detalleCompra()
        }

        while (pago < total) {
            alert ("Monto insuficiente");
            break;
            detalleCompra()
        } 
        } while (pago < total){
        alert("¡Gracias por tu compra!, " + NombreCliente + ". En breve recibirás información de envio al correo registrado, tu: pedido llegará pronto" + ". Tu vuelto es S/" + (pago-total))
        saludoFinal ();

    } 

}


function saludoFinal (){
    carrito.forEach(element => console.log(element));
    console.log("Gracias por preferir a " + MARCA + " . ¡Hasta Luego!");
    alert("Gracias por preferir a " + MARCA + " . ¡Hasta Luego!");
}

class Prenda { // 

    constructor(nombre, talle, precio){
        this.nombre = nombre
        this.talle = talle
        this.precio = precio
    }
}

function flow() {
        let prendaNombre = elegirPrenda();
        let talleNombre = elegirTalle();
        let precioProducto = validarPrecio(prendaNombre, talleNombre);

        console.log(prendaNombre)
        console.log(talleNombre)
        console.log(precioProducto)

    let prenda = new Prenda(prendaNombre, talleNombre, precioProducto)
    console.log(prenda)
    carrito.push(prenda)
    preciototal(prenda.nombre, prenda.talle, prenda.precio);
}

solicitarNombre();
flow()
