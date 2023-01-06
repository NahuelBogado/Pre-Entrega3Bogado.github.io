const MARCA = "Joggins ZS"
const BIENVENIDA = ("¡Hola, bienvenido a " + MARCA+"!");

console.log(MARCA);
alert(BIENVENIDA);

function inicio () {
    let Correo= prompt("Ingrese su dirección de correo electrónico").toUpperCase();
    if (Correo.includes("@")){
        let Correo = alert("Correo electronico válido");
    } 
    let usuario = prompt("Ingrese su nombre y apellido por favor: ");
    if (usuario === "") {
      inicio();
      } else {
    let saludo = alert("¡Ya puedes comprar " + usuario + "!");
      }
    }
    
    inicio();
    
    class Producto {
      constructor (nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id
      }
    }
    
    const remera = new Producto ("Remera", 5000, 1);
    const campera = new Producto ("Campera", 15000, 2);
    const jogger = new Producto ("Jogger", 10000, 3);
    const buzo = new Producto ("Buzo", 8000, 4);
    
    const prendas = [remera, campera, jogger, buzo];
    
    const arrayProductos = [];
    
    function elegirProducto () {
      let eleccionUser = parseInt(prompt("Escriba el número del producto que desea: "));
      let productoElegido = prendas.find (el => el.id === eleccionUser);
      console.log(productoElegido);
      if (productoElegido === undefined) {
        alert("Ingrese un número válido por favor");
        elegirProducto();
      }
      arrayProductos.push(productoElegido.precio);
    }
    
    function finalizarCompra () {
      let totalPrecio = arrayProductos.reduce((acumulador, producto) => acumulador + producto, 0);
      alert("El total de su compra es de $" + totalPrecio)
      alert("Gracias por elegir Joggins ZS para vestirte ;)")
    };