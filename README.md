## 📋 Descrição Geral

  O projeto possui a página inicial (home) onde estão listados os processos cadastrados no sistema JUDIT. 
  Cada processo possui um link para a página de detalhes do processo, onde são exibidas mais informações do mesmo.
  Também foram criadas rotas numa API do NextJS que faz a ponte entre este frontend e a API do sistema JUDIT.
  

##  🛠️ Tecnologias

- **Linguagem:** TypeScript (5)
- **Framework:** NextJS (14.0.4) + React (18)
- **Estilização:** SASS Modules (1.69)
- **Linter:** ESLint (8)

## 📂 Estrutura do Projeto

    .
    | 
    ├─ public/         
    |  └─ images/                # Imagens estáticas
    |
    └─ src/  
       ├─ app/
       |  ├─ api/                # Rotas da API do NextJS para se comunicar com o backend do sistema JUDIT
       |  |  └─ lawsuits/   
       |  |     └─ [lawsuitId]/
       |  |     |  └─ route.ts   # Rota da API para buscar os detalhes de um processo específico
       |  |     |
       |  |     └─ route.ts      # Rota da API para buscar a lista de processos ou um processo específico a partir de um CNJ
       |  |
       |  └─ lawsuit/
       |     └─ [lawsuitId]/
       |        └─ page.tsx      # Página para visualizar um processo específico (Ex: https://desafio-judit.vercel.app/lawsuit/9883fa6b-d82a-4d18-aebd-6e6b99d55d6a)
       | 
       ├─ components/            # Componentes React reutilizáveis
       ├─ containers/            # Seções de cada página onde são chamados os componentes menores
       ├─ context/               # Contextos React para melhor organização de props
       ├─ hooks/                 # Hooks React para reutilização de lógica
       ├─ styles/                # Arquivos de estilização SASS
       └─ types/                 # Definições de tipos reutilizáveis para o TypeScript


## ▶️ Rodando

Instalar dependências: 
`npm install`

* #### Desenvolvimento:

    * Iniciar em modo de desenvolvimento: `npm run dev`
    * Abrir [http://localhost:3000](http://localhost:3000) com o navegador

* #### Produção:

    * Criar a build do projeto: `npm run build`
    * Iniciar em modo de produção : `npm run start`
    * Abrir [http://localhost:3000](http://localhost:3000) com o navegador


## 💻 Live

  * [Link para aplicação hospedada na plataforma Vercel](https://desafio-judit.vercel.app/)