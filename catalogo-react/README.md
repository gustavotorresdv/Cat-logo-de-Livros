 Catálogo de Livros — React 
Projeto da 2ª unidade, baseado no catálogo da 1ª unidade, agora com React Router, tema claro/escuro, página de detalhes e layout fixo.

Funcionalidades

Listar, adicionar e remover livros
Busca por título/autor
Contador de total e filtrados
Tema claro/escuro (salvo no LocalStorage)

Rotas:
/ → Home
/catalogo → Catálogo
/livro/:id → Detalhes (URL dinâmica)

Extras:
Página de detalhes com botão de voltar
Header e footer fixos entre as páginas

Tecnologias
React
React Router DOM
Context API

Hooks (useState, useEffect, useParams, useLocalStorage)

Vite

▶ Como rodar
npm install
npm run dev

Acesse:
http://localhost:5173

Pastas principais

components/ → Componentes (header, busca, etc.)
pages/ → Telas (Catálogo, Home, Detalhes)
layouts/ → Layout fixo
context/ → Tema claro/escuro
hooks/ → LocalStorage

📌 Onde cada coisa foi usada (Requisito da atividade)
React Router

Usado em src/App.jsx

Definição das rotas:

<Routes>
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="catalogo" element={<Catalogo />} />
    <Route path="livro/:id" element={<LivroDetalhe />} />
  </Route>
</Routes>

📍 Navegação Programática

Usada na página Home.jsx, com useNavigate:

const navigate = useNavigate();
navigate("/catalogo");
 URLs Dinâmicas

Usadas em:
Rota: livro/:id
Captura do parâmetro em LivroDetalhe.jsx:
const { id } = useParams();
const book = books.find(b => b.id == id);

Hook Customizado
Arquivo: hooks/useLocalStorage.js
Ele salva e recupera dados automaticamente no LocalStorage:

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}


Usado para:
Salvar livros
Salvar tema claro/escuro

Layout Reutilizável
Arquivo: layouts/MainLayout.jsx
Ele envolve todas as páginas com:
Header fixo
Footer fixo
Área principal de conteúdo

<div className={`app ${theme}`}>
  <Header />
  <main>
    <Outlet />
  </main>
  <Footerss />
</div>

👥 Integrantes
Arnaldo José Henriques de Souza - 01702248
Gustavo Lopes Torres - 01655124
Marcos Antônio Cruz Palmeira - 01688072
Pedro Moreno Vieira - 01702265
Sabrina Araújo de Lemos - 01700691