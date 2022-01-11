document.getElementById("finalAmount").style.display="none"
const formulario = document.getElementById('Calculadora');
const valor = document.getElementById("cantidad-dinero");
const De = document.getElementById("moneda-origen");
const A = document.getElementById("moneda-destino");
const alerta = document.getElementById('Calculadora');
let convertir = 0

const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

let USD = 1;
let MXN = 0.049;
let COP = 0.00024;
let EUR = 1.13;
let GBP = 1.36;

var monedaOrigen = ['Seleccione', 'USD', 'MXN', 'COP', 'EUR', 'GBP']
var monedaDestino = ['Seleccione','USD','MXN','COP','EUR','GBP']

monedaOrigen.forEach((data, index) => {
  const item = document.createElement('option');
  item.setAttribute('value', index)
  item.textContent = data;
  fragmento.appendChild(item)
})

monedaDestino.forEach((data, index) => {
  const item = document.createElement('option');
  item.setAttribute('value', index)
  item.textContent = data;
  fragmento2.appendChild(item)
})

De.appendChild(fragmento);
A.appendChild(fragmento2);
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const origenOption = document.getElementById('moneda-origen');
  const origenMoneda = origenOption.options[origenOption.selectedIndex].value;
  let cantidadDinero = parseFloat(document.getElementById("cantidad-dinero").value);
  const destinoOption = document.getElementById('moneda-destino');
  const destinoMoneda = destinoOption.options[destinoOption.selectedIndex].value;

  const mensajeAlerta = document.createElement('div');
  mensajeAlerta.classList.add('text-center', 'alert');

  if (origenMoneda == 0 || destinoMoneda == 0) {
    mensajeAlerta.classList.add('alert-danger');
    mensajeAlerta.appendChild(document.createTextNode('Seleccione una opción'));
    alerta.appendChild(mensajeAlerta)
    document.getElementById("finalAmount").style.display = "none"
  }
  else if (cantidadDinero < 0 || isNaN(formulario.cantidad.value) == true) {
    mensajeAlerta.classList.add('alert-danger');
    mensajeAlerta.appendChild(document.createTextNode('Valor(es) Inválido(s)'));
    alerta.appendChild(mensajeAlerta)
    document.getElementById("finalAmount").style.display = "none"
  }
  
  var convertir = (cantidadDinero * origenMoneda) / destinoMoneda
  document.getElementById("finalValue").innerHTML = convertir.toFixed(2);
  document.getElementById("finalAmount").style.display = "block";

  
})

function clearVal(elem) {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHTML = "";
}