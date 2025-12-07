import { FaBars, FaRegDotCircle } from "react-icons/fa";
import { Outlet, Link, NavLink } from "react-router-dom";
import DrawOutlineButton from "../components/buttons/DrawOutlineButton";
import { useState } from "react";

export default function RootLayout() {
    const [menu, setMenu] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-950">
      <header className="px-4 py-3 flex flex-col relative md:flex-row md:items-center">
        <button className="md:hidden text-white hover:cursor-pointer">
            <FaBars className="text-xl" onClick={(e) => {setMenu(!menu)}}/>
        </button>
        <nav className={`${menu ? "flex flex-col absolute z-50 bg-gray-950 w-full left-0 top-11 md:flex" : "hidden md:flex"} text-white flex items-center gap-4`}>
          {/* NavLink nos permite saber si el link está activo */}
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}><DrawOutlineButton text={"Anggelo Huz"} /></NavLink>
          <NavLink to="/proyectos" className={({ isActive }) => isActive ? "text-blue-300 hover:text-white" : "hover:text-blue-300"}>Proyectos</NavLink>
          <NavLink to="/aprendizaje" className={({ isActive }) => isActive ? "text-blue-300 hover:text-white" : "hover:text-blue-300"}>Aprendizaje</NavLink>
          <div>

          </div>
        </nav>
      </header>

      <main className="flex-grow text-white p-6 flex items-center">
        {/* AQUÍ es donde se renderizarán los componentes hijos (Home, About) */}
        <Outlet />
      </main>

      <footer className="py-3 px-4 flex gap-4 items-center w-full">
        <div className="flex relative w-7/12">
            <FaRegDotCircle className="absolute -left-2 -top-[9px] text-xl text-white" />
            <div className="border border-white w-full"></div>
        </div>
        <p className="text-white w-5/12 text-center">PORTAFOLIO 2025</p>
      </footer>
    </div>
  );
}