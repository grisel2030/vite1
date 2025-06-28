
import './style.css';
import botones from './botones.js';

  
// 3. Renderizado Inicial

document.querySelector('#app').innerHTML = `
  <div class="relative w-full h-screen bg-cover bg-no-repeat bg-center transition-all duration-300 transition: background-image 0.5s ease-in-out" 
       id="fondito"
       style="background-image: url('./img/fondo2.avif')">

    <div id="botones" class="fixed bottom-10 left-0 right-0 flex justify-center gap">
      ${
       botones()
      }

    </div>
</div>
     


`



