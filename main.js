 let ingreseNombre = prompt("Ingresar nombre");
 let ingreseApellido = prompt("Ingresar Apellido");
 let IngreseCorreoElectronico = prompt("Ingrese Correo Electronico");
  alert(`Bienvenido ${ingreseNombre} ${ingreseApellido}`);
 if (ingreseNombre != "" && ingreseApellido != "") {
   alert(`Bienvenido ${ingreseNombre} ${ingreseApellido}`);
 } else {
 alert("Error: Ingresar nombre y apellido");
 }

let n4 = Number;
let clickboton = Number;
let cuotasporpagar = Number;
n4 = 0;
let element = document.getElementById("boton1");
let button = document.querySelector(".boton2");
let button2 = document.querySelector(".boton3");

function buttonstate() {
  if (n4 == 0) {
    button.disabled = true;
    button2.disabled = true;
  } else {
    button.disabled = false;
    button2.disabled = false;
  }
}
function botonCalculo() {
  document.getElementById("tcuerpo").innerHTML = "";
  let montoPrestamo = Number(document.getElementById("montoPrestamo").value);
  let numCuotas = Number(document.getElementById("numCuotas").value);
  let interes = Number;
  if (numCuotas >= 12 && numCuotas != "") {
    interes = 25;
    alert("Como estas pagando a un año, o más, tu interes es del 25%");
  } else if (numCuotas == "") {
    alert("tienes que colocar el numero de cuotas");
  } else {
    interes = 12.5;
    alert(
      "Ya que quieres pagar en menos de un año, tu interes es solo de 12.5% mensual "
    );
  }

  if (montoPrestamo > 0) {
    for (i = 1; i <= numCuotas; i++) {
      ca = montoPrestamo / numCuotas;
      d1 = ca.toFixed(2);
      i2 = (montoPrestamo * interes) / 100 / numCuotas;
      d2 = i2.toFixed(2);
      r = ca + i2;
      d3 = r.toFixed(2);
      document.getElementById("tcuerpo").innerHTML =
        document.getElementById("tcuerpo").innerHTML +
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
    }
    n1 = montoPrestamo.toFixed(2);
    t_p = r * numCuotas;
    d5 = t_p.toFixed(2);
    n4 = numCuotas;
  } else {
    alert("te falta agregar un numero");
  }
}
cuotasporpagar = n4;
clickboton = 0;

function pedir_prestamo() {
  if (clickboton == 0) {
    alert("Estamos procesando su solicitud");
    clickboton++;
  } else {
    alert("Seguro quieres hacer un prestamo?");
  }
}
function pago_cuota() {
  if (n4 != 0) {
    n4 = n4 - 1;
    for (let counter = 1; counter <= 1; counter++) {
      console.log(counter);
      alert("" + counter + "");
    }
    alert("Gracias por pagar una cuota! te quedan " + n4 + " cuotas por pagar");
  } else {
    alert("Ya pagaste toda tu deuda gracias por preferirnos");
  }
}
//----Array Objetos------
class Producto {
  constructor (nombre, categoria, modelo, precio){
    this.nombre = nombre;
    this.categoria = categoria;
    this.modelo;
    this.precio = precio;

  }
}

let listaAutos = [
  {nombre: "Touareg", categoria:"auto familiar", modelo:"sedan", precio: 8000},
  {nombre: "Amarok", categoria:"auto familiar", modelo:"sedan", precio: 10000},
  {nombre: "Saveiro", categoria:"auto familiar",modelo:"sedan", precio: 12000},
  {nombre: "Vento", categoria:"auto familiar",modelo:"sedan", precio: 9000},
];
//-------agragando objetos al Array
const agregarAutos =() => {
  let nombre = prompt ("Que Auto es?");
  let categoria = prompt ("Que categoria es?");
  let modelo = prompt("Que modelo es?")
  let precio = parseFloat (prompt ("Cual es el precio?"));
  let prodNuevo = new Producto (nombre, categoria, modelo, precio);
  listaAutos.push(prodNuevo);
  return listaAutos;
}
//------console.log del Array AgregarAuto
for(const producto of listaAutos) {
  console.log (`este Auto es ${producto.nombre} y su precio es ${producto.precio}`)
}

//-------------------Anonima
const arrayNuevo = [];
porCadaElem(numeros,(elem)=> {
    arrayNuevo.push(elem *1.21);
}) 
console.log(arrayNuevo);