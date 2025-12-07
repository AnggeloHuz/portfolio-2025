import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Aprendizaje from './pages/Aprendizaje';
import Proyectos from './pages/Proyectos';

// Definición de rutas usando objetos
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout principal (Navbar, Footer)
    errorElement: <ErrorPage />, // Manejo de errores global (404, crashes)
    children: [
      {
        index: true, // Esta es la ruta por defecto ('/')
        element: <Home />,
      },
      {
        path: "proyectos", // Equivale a '/about'
        element: <Proyectos />,
      },
      {
        path: "aprendizaje", // Equivale a '/about'
        element: <Aprendizaje />,
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* El RouterProvider inyecta el router en la app */}
    <RouterProvider router={router} />
  </StrictMode>,
)
