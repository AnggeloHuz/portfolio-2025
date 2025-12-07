import perfil from "../../public/perfil.jpg"

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-full gap-12 lg:items-center">
    {/* COLUMNA IZQUIERDA (Texto) */}
    <section className="flex flex-col lg:w-1/2 lg:h-full  gap-3 ">
      
      <h5 className="text-lg text-blue-300 font-league-spartan">
        ¡Hola Mundo!
      </h5>
      
      <h2 className="text-3xl font-bold font-league-spartan w-64">
        MI NOMBRE ES ANGGELO HUZ
      </h2>
      
      {/* Usamos lg:mx-auto para centrar el bloque azul que tiene ancho fijo */}
      <h4 className="p-2 bg-blue-500 font-medium w-[350px] font-space-mono italic text-black text-sm flex">
        Ingeniero en Computación y Programador
      </h4>
      
      {/* Centramos el texto dentro del párrafo y limitamos su ancho */}
      <p className="font-jetBrains-mono text-sm md:w-5/6">
        Ingeniero en Computación y desarrollador de software con experiencia
        en el ciclo de vida completo del desarrollo tecnológico. Mi enfoque
        principal reside en el diseño de arquitecturas de sistemas escalables
        y la optimización del rendimiento. Utilizo mis habilidades de
        programación para implementar soluciones robustas y eficientes que
        cumplen con los requerimientos técnicos y de negocio.
      </p>

    </section>

    {/* COLUMNA DERECHA (Imagen) */}
    <picture className="p-4 relative w-full lg:w-1/2 flex justify-center">
      <img
        className="border border-blue-500 rounded-md md:w-[450px]"
        src={perfil}
        alt="Ing. Anggelo Huz"
      />
    </picture>
</div>
  );
}