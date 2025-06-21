import './style.css'


document.querySelector('#app').innerHTML = `
  <div class=" relative bg-[url(./img/fondo2.avif)] h-screen bg-cover bg-no-repeat bg-center">

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
 `;//<--cierra el innerHTML aqui-->//
 // 2. Luego, fuera del HTML, añadir el codigo
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

 
