export function Store({ onClose, buyItem }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center    bg-opacity-50 z-50">
      <div className=" rounded-lg bg-shop-bg bg-cover shadow-lg p-6 w-[900px] h-[430px]  max-w-2xl">
      
      <div className="flex flex-col justify-center items-center">
          <h3 className="text-gray-100 ml-3 font-PressStart2P font-bold text-xs">1UP!</h3> 
          <button onClick={() => buyItem("revivir")} className="text-white   rounded w-20 h-20 ml-2" > 
          <img src="../../public/1up.webp" className="w-full " />
          <p className="text-xs font-PressStart2P">30$</p>
          </button>
      </div>

      <div className="flex justify-center mt-8">
        
        <div className="grid grid-cols-2  md:grid-cols-4">
          <div className="flex flex-col items-center justify-center text-center">
          <h3 className="text-gray-100  font-PressStart2P font-bold text-xs">Comida</h3>
            <button onClick={() => buyItem("comida")}>
            <img
              src="../../public/cena.webp"
              alt="Comida"
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="mt-2 font-PressStart2P text-gray-100">10$</p>
            </button>
          </div>
          <div className="flex flex-col items-center text-center">
            <h3 className="text-gray-100  font-PressStart2P font-bold text-xs">Juguete</h3>
            <button  onClick={() => buyItem("juguete")}>
            <img
              src="../../public/peluche.png"
              alt="Juguete"
              className="w-16 h-16 object-contain mb-2"
            />
            <p className="mt-2 font-PressStart2P text-gray-100">10$</p>
            </button>
            
          </div>
          <div className="flex flex-col items-center text-center">
          <h3 className="text-gray-100  font-PressStart2P font-bold text-xs">Cepillo</h3>
            <button  onClick={() => buyItem("cepillo")}>
            <img
              src="../../public/diente.webp"
              alt="Cepillo de Dientes"
              className="w-16 h-16 object-contain mb-2"
            />
             <p className="mt-2 font-PressStart2P text-gray-100">10$</p>
            </button>
          </div>
          <div className="flex flex-col items-center text-center">
          <h3 className="text-gray-100  font-PressStart2P font-bold text-xs">Energizante</h3>
            <button  onClick={() => buyItem("energizante")}>
            <img
              src="../../public/batery.webp"
              alt="Energizante"
              className="w-16 h-16 object-contain mb-2"
            />
           <p className="mt-2 font-PressStart2P text-gray-100">10$</p>
           </button>
            
          </div>
        </div>
        </div>
        <div className="flex -mt-8 justify-center">
        <button
          onClick={onClose}
          className="mt-6  text-white py-2 px-6 rounded w-full md:w-auto mx-auto"
        >
          <img src="../../public/shopLogo.webp" className=" w-20 "/> 
        </button>
        </div>
      </div>
    </div>
  );
}
