import Carrousel from "../components/Carrousel";

export default function Proyectos() {
  const items = [
    {
      imagen_url: "https://support.localexpress.io/hs-fs/hubfs/1-Jul-31-2024-03-03-29-3705-AM.png?width=670&height=395&name=1-Jul-31-2024-03-03-29-3705-AM.png",
      titulo: "Maquetación de Landing Page Estática",
      tecnologias: "HTML5, CSS3, Flexbox, Media Queries.",
      aprendizaje:
        "Dominar la **estructura semántica de HTML5** (uso correcto de <header>, <footer>). Aprender a crear **layouts complejos** y a gestionar el espaciado. Implementar el diseño para que sea **responsive** en móviles y escritorio.",
    },
    {
      imagen_url: "https://assets.justinmind.com/wp-content/uploads/2019/05/button-states-in-form-design.png",
      titulo: "Diseño Avanzado de Formularios y Validaciones Visuales",
      tecnologias:
        "HTML5, CSS3, Selectores Avanzados de CSS (:focus, :hover, :valid), Diseño Responsivo.",
      aprendizaje:
        "Perfeccionar el uso de **pseudoclases y pseudoelementos** en CSS para mejorar la interacción (UX). Aprender a **estilizar todos los tipos de input** y a crear **validaciones visuales** sin JavaScript.",
    },
    {
      imagen_url: "https://assets.justinmind.com/wp-content/uploads/2019/09/card-ui-layout-example.png",
      titulo: "Catálogo de Productos con Tarjetas Dinámicas (Uso de Grid)",
      tecnologias:
        "HTML5, CSS Grid, Flexbox (para centrado interno), Box-Shadow.",
      aprendizaje:
        "Comprender y aplicar **CSS Grid** para la organización bidimensional de elementos (catálogos o galerías). Practicar la **combinación de Flexbox y Grid** para lograr layouts robustos y eficientes.",
    },
    {
      imagen_url: "https://assets.justinmind.com/wp-content/uploads/2020/07/hamburger-menu-design-principles.png",
      titulo: "Componente de Navegación Responsive (Menú 'Hamburguesa')",
      tecnologias:
        "HTML5, CSS3, Media Queries (Mobile First), Transiciones CSS.",
      aprendizaje:
        "Aplicar la metodología **Mobile First** (diseñar primero para móvil). Implementar **Media Queries** para modificar la estructura de navegación. Uso práctico de **transiciones** para un cambio de estado suave.",
    },
    {
      imagen_url: "https://assets.justinmind.com/wp-content/uploads/2020/08/parallax-effect-website-scrolling-firewatch.png",
      titulo: "Efecto Parallax de Desplazamiento con Múltiples Capas",
      tecnologias:
        "HTML5, CSS Positioning (fixed, relative, absolute), Z-Index, Background Attachment.",
      aprendizaje:
        "Comprender el **contexto de posicionamiento** y el uso del **Z-Index** para crear capas. Aprender a manipular las propiedades de **fondo (`background-attachment`)** para generar la ilusión de profundidad y movimiento al hacer scroll. Fortalecer el manejo de las unidades de medida en CSS.",
    },
    {
      imagen_url: "https://i.ytimg.com/vi/XZPqCiJd_Vo/maxresdefault.jpg",
      titulo: "Componente de Interruptor de Tema (Uso de Variables CSS)",
      tecnologias:
        "HTML5, CSS Variables (`--custom-property`), Transiciones CSS, Estilización de Toggles.",
      aprendizaje:
        "Introducir la **gestión de estilos** utilizando **Variables CSS** (Custom Properties) para definir colores y fuentes base. Esto facilita el cambio de estilos globales (como Dark/Light Mode) con mínimas modificaciones. Practicar la **estilización avanzada de componentes interactivos** (como switches o toggles).",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-10">
      <section>
        <div>
          <h3 className="text-xl font-league-spartan uppercase">
            Proyectos a Desarrollar
          </h3>
          <h4 className="flex gap-2 font-jetBrains-mono text-sm">
            <p className="text-blue-400">Curso:</p> FRONT END I
          </h4>
        </div>
      </section>
      <Carrousel items={items} />
    </div>
  );
}