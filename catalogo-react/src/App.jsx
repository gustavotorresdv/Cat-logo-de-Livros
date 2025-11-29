import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Páginas
import Catalogo from "./pages/Catalogo";
import LivroDetalhe from "./pages/LivroDetalhe";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Catalogo />} />
        <Route path="livro/:id" element={<LivroDetalhe />} />
      </Route>
    </Routes>
  );
}
