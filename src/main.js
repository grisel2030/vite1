
import './style.css';

// 1. Lista de fondos disponibles
const fondos = [
  public/img/fondo1.avif




//2. Funcion para cambiar el fondo
function cambiarFondo() {                                                        
 indiceActual = (indiceActual + 1) % fondos.length;
  document.getElementById('fondito').style.backgroundImage = `url('${fondos[indiceActual]}')`;
}



  
// 3. Renderizado Inicial

document.querySelector('#app').innerHTML = `
  <div class="relative h-screen bg-cover bg-no-repeat bg-center transition-all duration-300" 
       id="fondito"
       style="background-image: url('${fondos[0]}')">
       

    <button 
    class="absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      id="boton-fondo">
      Cambiar Fondo
    </button>
  
    
  </div>
 `;

 // 4. Asignar el evento despues de renderizar
 document.getElementById('boton-fondo').add





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

 
