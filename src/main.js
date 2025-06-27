
import './style.css';

// 1. Importar el archivo de estilos
const fondos = [
  './img/fondo1.avif',
  './img/fondo2.avif',
  './img/fondo3.avif',
  './img/fondo4.avif',
  './img/fondo5.avif',
  './img/fondo6.avif',
  './img/fondo7.avif',
  './img/fondo8.avif',
];
let indiceFondo = 0; 


  
// 3. Renderizado Inicial

document.querySelector('#app').innerHTML = `
  <div class="relative w-full h-screen bg-cover bg-no-repeat bg-center transition-all duration-300 transition: background-image 0.5s ease-in-out" 
       id="fondito"
       style="background-image: url('./img/fondo3.avif')">

    <div id="botones" class="fixed bottom-10 left-0 right-0 flex justify-center gap-1">
      <button class="text-white font-bold py-4 px-4 rounded " id="boton-fondo">
        <img src="./img/fondo1.avif" 
        alt="Cambiar fondo 1"
         class="w-16 h-9 object-cover rounded border border-white transition-all duration-300 hover:scale-110">
      </button>

      <button class="text-white font-bold py-4 px-4 rounded " id="boton-fondo">
        <img src="./img/fondo2.avif" 
        alt="Cambiar fondo 2" 
        class="w-16 h-9 object cover rounded border border-white transition-all duration-300 hover:scale-110">
      </button>

      <button class="text-white font-bold py-4 px-4 rounded " id="boton-fondo">
        <img src="./img/fondo3.avif"
        alt="Cambiar fondo 3"
        class="w-16 h-9 object-cover rounded border border-white transition-all duration-300 hover:scale-110">
      </button>

      <button class="text-white font-bold py-4 px-4 rounded " id="boton-fondo">
        <img src="./img/fondo4.avif"
        alt="Cambiar fondo 4"
        class="w-16 h-9 object-cover rounded border border-white transition-all duration-300 hover:scale-110">
      </button>



    </div>
       

    
  
    
  </div>
 `;

 // 4. Asignar el evento despues de renderizar

document.querySelector('#boton-fondo').addEventListener('click', cambiarFondo)

// 5. Función para cambiar el fondo
   function cambiarFondo() {
    const fondo = document.getElementById('fondito');
    indiceFondo = (indiceFondo + 1) % fondos.length; // Incrementa el índice y lo reinicia si llega al final
    fondos.style.backgroundImage = `url(${fondos[indiceFondo]})`; // Cambia el fondo del div

}











/* document.querySelector('#app').innerHTML = `
  <div class="relative bg-[url(./img/fondo2.avif)] h-screen bg-cover bg-no-repeat bg-center">

    <!-- Elemento Principal-->
    <h1 class="absolute top-10 left-0 right-0 text-center text-white px-4 text-[40px] font-bold tracking-wider">Reloj Digital</h1>

    <!--Elemento Secundario-->
    <h2 id="fecha" class="absolute top-25 left-0 right-0 text-center text-white text-[17px] font-bold tracking-wider">
    Fecha
    </h2>
    <div class="absolute top-60 w-full flex justify-center gap-8">
          
            <!-- Rectangulo 1 -->
            <div class="w-30 h-45 bg-violet-500 bg-opacity-50 backdrop-blur-sm  "></div>

            <!-- Rectangulo 2 -->
            <div class="w-30 h-45 bg-violet-500 bg-opacity-50 backdrop-blur-sm "></div>

            <!-- Rectangulo 3 -->
            <div class="w-30 h-45 bg-violet-500 bg-opacity-50 backdrop-blur-sm "></div>


          </div>
  
    
  </div>
 `; */
 
 function actualizarFecha() {
  const fechaElemento = document.getElementById('fecha');
  if (fechaElemento) {
    const opciones = {
      weekday: 'long',
      year:'numeric',
      month:'long',
      day:'numeric'
    };
    const fecha = new Date().toLocaleDateString('es-Es',opciones);
    fechaElemento.textContent = fecha.charAt(0).toUpperCase() + fecha.slice(1);
    
  }
  
 }

 //3. Ejecuta la funcion para mostrar la fecha inmediatamente
 actualizarFecha();

 // 4. Opcional: Actualizar cada 24 horas
 setInterval(actualizarFecha, 86400000);

 
