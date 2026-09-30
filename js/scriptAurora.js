




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

const tarjeta = document.querySelector('.tarjeta');



btn.addEventListener('click', (e) => {
e.preventDefault();
tarjeta.classList.toggle("colorin");

});
let btn2 = document.getElementById("btn-2");

const tarjeta2 = document.querySelector('.tarjeta-2');



btn2.addEventListener('click', (e) => {
e.preventDefault();
tarjeta2.classList.toggle("colorin-2");

});
let btn3 = document.getElementById("btn-3");

const tarjeta3 = document.querySelector('.tarjeta-3');



btn3.addEventListener('click', (e) => {
e.preventDefault();
tarjeta3.classList.toggle("colorin-3");

});
let btn4 = document.getElementById("btn-4");

const tarjeta4 = document.querySelector('.tarjeta-4');



btn4.addEventListener('click', (e) => {
e.preventDefault();
tarjeta4.classList.toggle("colorin-4");

});

console.log(btn);