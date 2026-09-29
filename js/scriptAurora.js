




const menunave = document.getElementById("menu");

const bo = document.getElementById("boton-menu")

bo.addEventListener("click", () => {

menunave.classList.toggle("mostrar");

});


let btn = document.getElementById("btn");
let nulo = null;
let texto = 'Cadena de texto';
let productos = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];


function mostrarDatos(param) {
    console.log(param);
}

mostrarDatos(nulo);
mostrarDatos(texto);
mostrarDatos(productos);


let captura = document.querySelectorAll('p')
let cambiarTexto = () => captura[1].textContent="nnnnncnnnfdnfndnfnsndf";

btn.addEventListener('click', cambiarTexto);


btn.addEventListener('click', (e) => {
e.preventDefault();
numero = numero + 1;
captura[1].textContent = numero;
captura[1].classList.toggle('color');

});

console.log(btn);