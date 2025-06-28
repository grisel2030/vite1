
export default function botones(){
    let valor=""

    for (let i = 0; i < 7; i++){
        
        valor += ` 
        
          <button class="text-white font-bold py-4 px-4 rounded " id="${i}" onclick="cambiarFondo('fondo${i+1}.avif')">
            <img src="./img/fondo${i+1}.avif" 
            alt="Cambiar fondo 1"
             class="w-16 h-9 object-cover rounded border border-white transition-all duration-300 hover:scale-110">
          </button>
    
        
        `;

    }

    return valor


}



