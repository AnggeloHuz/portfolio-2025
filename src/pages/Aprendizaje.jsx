export default function Aprendizaje() {
  return (
    <div className="flex flex-col gap-12 mx-auto">
      <section className="flex flex-col gap-8 max-w-3xl">
        <div>
          <h3 className="text-xl font-league-spartan uppercase">
            Objetivos de Aprendizaje
          </h3>
          <h4 className="flex gap-2 font-jetBrains-mono text-sm">
            <p className="text-blue-400">Curso:</p> FRONT END I
          </h4>
        </div>

        <ol className="relative border-s border-default border-blue-500">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full border-blue-500 mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="text-xs font-league-spartan text-blue-300 italic leading-none text-body">
              Objetivo #1
            </time>
            <h3 className="text-sm uppercase font-semibold text-heading my-2 font-league-spartan">
              Dominio Semántico de HTML5
            </h3>
            <p className="mb-4 text-xs font-jetBrains-mono text-body">
              Adquirir la habilidad de estructurar contenido de manera lógica y
              accesible, utilizando correctamente las etiquetas para asegurar la
              optimización del motor de búsqueda (SEO).
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full border-blue-500 mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="text-xs font-league-spartan text-blue-300 italic leading-none text-body">
              Objetivo #2
            </time>
            <h3 className="text-sm uppercase font-semibold text-heading my-2 font-league-spartan">
              Maestría en CSS3 y Layout
            </h3>
            <p className="text-xs font-jetBrains-mono text-body">
              Trascender el estilo básico y dominar las técnicas modernas de
              maquetación, específicamente Flexbox y Grid, para la creación de
              diseños complejos y flexibles.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full border-blue-500 mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="mb-1 text-xs font-league-spartan text-blue-300 italic leading-none text-body">
              Objetivo #3
            </time>
            <h3 className="text-sm uppercase font-semibold text-heading my-2 font-league-spartan">
              Desarrollo Responsivo
            </h3>
            <p className="text-xs font-jetBrains-mono text-body">
              Lograr que cada proyecto sea completamente adaptable a cualquier
              dispositivo y tamaño de pantalla, entendiendo y aplicando
              eficazmente los principios del Mobile First.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full border-blue-500 mt-1.5 -start-1.5 border border-buffer"></div>
            <time className="mb-1 text-xs font-league-spartan text-blue-300 italic leading-none text-body">
              Objetivo #4
            </time>
            <h3 className="text-sm uppercase font-semibold text-heading my-2 font-league-spartan">
              Fundamento para el Futuro
            </h3>
            <p className="text-xs font-jetBrains-mono text-body">
              Establecer las mejores prácticas de codificación limpia y modular,
              preparando el terreno para la introducción a la lógica de
              programación (JavaScript) y mi eventual transición a frameworks de
              front-end más avanzados.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}