import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Carrousel({items}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Función que actualiza el estado con el tamaño actual de la ventana
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Ejecuta la función una vez al inicio para obtener las dimensiones iniciales
    handleResize();

    // Añade el event listener para que actualice el estado cada vez que se redimensiona
    window.addEventListener("resize", handleResize);

    // FUNCIÓN DE LIMPIEZA: Crucial para remover el listener cuando el componente se desmonta
    return () => window.removeEventListener("resize", handleResize);
  }, []); // El array vacío asegura que el efecto solo se ejecute al montar y desmontar

  // Configuración visual:
  const ITEMS_PER_VIEW = windowSize.width > 1023 ? 3 : windowSize.width > 767 ? 2 : 1;
  const TOTAL_ITEMS = items.length;

  // Calcula el índice máximo al que podemos avanzar antes de quedarnos sin contenido a la derecha.
  // Si hay 6 items y vemos 3 a la vez, el último índice visible es 6 - 3 = 3.
  const maxIndex = TOTAL_ITEMS - ITEMS_PER_VIEW;

  // Calcula el porcentaje que debe moverse la tira por cada click.
  // Mueve el 100% de la vista / (número total de ítems).
  const SHIFT_PERCENTAGE = 100 / ITEMS_PER_VIEW;

  const handleNext = () => {
    // Si no es el último índice permitido, avanza 1.
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Bucle "infinito" (vuelve al inicio)
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    // Si no está en el inicio, retrocede 1.
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Bucle "infinito" (va al final)
      setCurrentIndex(maxIndex);
    }
  };

  return (
    <>
      <section className="w-full h-full flex">
        <div className="flex items-center px-1">
          <IoIosArrowBack
            onClick={handlePrev}
            className="text-blue-400 text-xl hover:cursor-pointer"
          />
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          {/* Tira de Slides: Aplica la transición suave y la posición de desplazamiento */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            // La clave es el estilo: mueve la tira un múltiplo del porcentaje de desplazamiento
            style={{
              width: `${(TOTAL_ITEMS / ITEMS_PER_VIEW) * 100}%`, // Asegura que la tira es lo suficientemente ancha
              transform: `translateX(-${currentIndex * (100 / TOTAL_ITEMS)}%)`, // Desplazamiento
              // NOTA: Para un desplazamiento de un slide a la vez:
              // transform: `translateX(-${currentIndex * SHIFT_PERCENTAGE}%)`
            }}
          >
            {items.map((slide, key) => (
              <div
                key={key}
                // Ancho del slide: debe ser 100% / ITEMS_PER_VIEW
                className={`w-[calc(100%/${TOTAL_ITEMS})] flex-shrink-0 h-auto flex flex-col gap-3 items-center justify-center text-white text-3xl font-bold`}
                style={{ width: `${100 / TOTAL_ITEMS}%` }}
              >
                <h4 className="px-2 text-sm md:text-base font-league-spartan font-bold w-full">
                  {slide.titulo}
                </h4>
                <figure className="w-full px-2">
                  <img
                    src={slide.imagen_url}
                    className="w-full rounded-md"
                    alt=""
                  />
                </figure>
                <h5 className="px-2 text-xs md:text-sm text-blue-300 font-league-spartan w-full">
                  {slide.tecnologias}
                </h5>
                <p className="px-2 text-[10px] md:text-xs font-light font-jetBrains-mono">
                  {slide.aprendizaje}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center px-1">
          <IoIosArrowForward
            onClick={handleNext}
            className="text-blue-400 text-xl hover:cursor-pointer"
          />
        </div>
      </section>
    </>
  );
}

export default Carrousel