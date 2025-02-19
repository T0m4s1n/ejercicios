//Ejercicios del flex el 12/02/2025 tomasin
export default function Item() {
    return (
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-b from-red-50 to-red-100 font-[family-name:var(--font-geist-sans)]" >
        <ul className="w-80 bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl 
          transition-all duration-500 hover:scale-105">
          <div className="w-full h-48 overflow-hidden">
            <img 
              src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg" 
              alt="Noimagen" 
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="p-6 transform transition-transform duration-300">
            <h2 className="text-xl font-bold text-gray-800 mb-2 ">
              Red Heaven?
            </h2>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Hola soy tomasin, no se que ponerle profe pero usted no me dejo poner mi animacion bonita pero bueno no importa, dislike?
            </p>
            <ul className="flex gap-2">
              <span className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full 
                hover:bg-red-200 hover:scale-105 transition-all duration-300 cursor-pointer">
                #Tomasin
              </span>
              <span className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded-full  
                hover:bg-red-200 hover:scale-105 transition-all duration-300 cursor-pointer">
                #Zapayo
              </span>
            </ul>
          </ul>
        </ul>
      </main>
    );
  }
  