🚀 Como rodar o projeto
# Instalar dependências
npm install

# Rodar o servidor
npm run dev


Acesse no navegador:

http://localhost:5173

🛠 Tecnologias Utilizadas

⚛ React

🌐 React Router DOM

⚡ Vite

🎨 CSS

🟦 Context API (tema claro/escuro)

📍 Aplicações Requeridas no Projeto
✔️ React Router

Arquivo: src/App.jsx

<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Catalogo />} />
    <Route path="livro/:id" element={<LivroDetalhe />} />
  </Route>
</Routes>

✔️ URLs Dinâmicas

Rota dinâmica:

<Route path="livro/:id" element={<LivroDetalhe />} />


Uso na página:

const { id } = useParams();

✔️ Navegação Programática

Feita através de um hook customizado:

navigate(`/livro/${id}`);

✔️ Hook Customizado

Exemplo:

import { useNavigate } from "react-router-dom";

export function useBookNavigation() {
  const navigate = useNavigate();

  function goToBook(id) {
    navigate(`/livro/${id}`);
  }

  return { goToBook };
}

✔️ Layout Reutilizável

Arquivo: src/layouts/MainLayout.jsx

<div className={`app ${theme}`}>
  <Header />
  <main>
    <Outlet />
  </main>
  <Footerss />
</div>


Esse layout envolve todas as páginas e reaproveita o mesmo Header e Footer.

📚 Estrutura do Projeto
src/
├─ App.jsx
├─ layouts/
│  └─ MainLayout.jsx
├─ components/
│  ├─ header.jsx
│  └─ footer.jsx
├─ pages/
│  ├─ Catalogo.jsx
│  └─ LivroDetalhe.jsx
├─ context/
│  └─ ThemeContext.jsx
└─ App.css

💡 Funcionalidades do Projeto

Listagem de livros

Visualização detalhada pelo ID

Navegação entre páginas

Tema claro/escuro (via Context API)

Layout fixo reutilizável

Footer centralizado

Cabeçalho navegável usando <Link>