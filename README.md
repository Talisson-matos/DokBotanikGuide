<div align="center">

<!-- Banner principal -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0b1610,50:1f4d2e,100:6ef3b0&height=200&section=header&text=🌿%20FloraGuide&fontSize=52&fontColor=e8f5ec&fontAlignY=38&desc=Enciclopédia%20Botânica%20Interativa&descAlignY=58&descSize=18&descColor=8ed4aa" width="100%"/>

<br/>

[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Node](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/Licença-MIT-6ef3b0?style=for-the-badge)](#-licença)

<br/>

> **FloraGuide** é uma enciclopédia botânica interativa desenvolvida com **Vite + TypeScript puro**, sem frameworks, sem dependências pesadas. Navegue por uma coleção de plantas com galeria de imagens em carrossel, texto paginado estilo livro e lazy loading inteligente.

<br/>

[🚀 Instalação](#-instalação) · [📖 Como usar](#-como-usar) · [🗂️ Estrutura](#️-estrutura-de-diretórios) · [⚙️ Tecnologias](#️-tecnologias) · [🌱 Contribuição](#-contribuição) · [📄 Licença](#-licença)

</div>

---

## ✨ Funcionalidades

<table>
<tr>
<td width="50%">

### 🏠 Tela Inicial
- **Pesquisa web** integrada — abre o Google com o termo buscado
- **Filtro em tempo real** dos cards pelo nome da planta
- **Grid responsivo** com cards animados
- **Skeleton shimmer** durante o carregamento
- **Lazy loading** via `IntersectionObserver` — zero desperdício de banda

</td>
<td width="50%">

### 📚 Tela da Planta
- **Carrossel de imagens** com dots e setas animadas
- **Texto paginado** estilo livro com fonte serifada
- **Fade suave** entre páginas e imagens
- **Badge** com nome científico sobreposto à imagem
- **Botão de retorno** à coleção principal

</td>
</tr>
</table>

---

## 🚀 Instalação

### Pré-requisitos

| Ferramenta | Versão mínima |
|-----------|--------------|
| [Node.js](https://nodejs.org/) | `18.x` ou superior |
| npm | `9.x` ou superior |

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/floraguide.git
cd floraguide/siteplantas

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** no seu navegador. 🎉

---

## 📦 Scripts disponíveis

```bash
# Desenvolvimento com hot-reload
npm run dev

# Build para produção (TypeScript + Vite)
npm run build

# Pré-visualizar o build de produção
npm run preview

# Comprimir todas as imagens para WebP (requer npm install)
npm run compress-images
```

---

## 🗂️ Estrutura de Diretórios

```
PLANTASTESTEPILOTO/
└── siteplantas/
    │
    ├── 📄 index.html               # Entry point HTML
    ├── 📦 package.json             # Dependências e scripts
    ├── 🔧 tsconfig.json            # Configuração TypeScript
    ├── ⚡ vite.config.ts           # Configuração Vite
    │
    ├── 📁 public/
    │   └── 📁 plantas/
    │       ├── 📁 planta1/         # Imagens + consumado.txt
    │       ├── 📁 planta2/
    │       ├── 📁 planta3/
    │       └── ...                 # planta4 → planta28+
    │
    ├── 📁 scripts/
    │   └── 🖼️  compress-images.mjs  # Utilitário de compressão WebP
    │
    └── 📁 src/
        ├── 🧭 main.ts              # Roteador SPA (navigateTo)
        │
        ├── 📁 data/
        │   └── 🌿 plantas.ts       # Cadastro central das plantas
        │
        ├── 📁 pages/
        │   ├── 🏠 Home.ts          # Tela inicial + filtro + lazy loading
        │   └── 📖 Planta.ts        # Tela de detalhe + carrossel + livro
        │
        └── 📁 styles/
            └── 🎨 planta.css       # Estilos globais (home + detalhe)
```

---

## ➕ Adicionando novas plantas

Abra `src/data/plantas.ts` e adicione um novo objeto ao array `plantas`:

```typescript
{
  id: 7,
  nome: 'Orquídea',
  nomecientifico: 'Orchidaceae',
  thumb: '/plantas/planta7/thumb.jpg',
  imagens: [
    '/plantas/planta7/foto1.jpg',
    '/plantas/planta7/foto2.jpg',
  ],
  txtPath: '/plantas/planta7/consumado.txt'
}
```

Em seguida, crie a pasta `public/plantas/planta7/` com as imagens e o arquivo `consumado.txt` contendo a descrição da planta. **Pronto** — o card aparecerá automaticamente na grade.

---

## 🖼️ Compressão de Imagens

Para reduzir o peso das imagens em **60–80%** convertendo para WebP:

```bash
# Instala o sharp (já listado em devDependencies)
npm install

# Roda o script de compressão
npm run compress-images
```

O script percorre toda a pasta `public/plantas/`, redimensiona para **600px** de largura máxima e exporta versões `.webp` com qualidade 78. Os originais não são apagados.

Após rodar, atualize os caminhos em `src/data/plantas.ts`:

```diff
- thumb: '/plantas/planta1/abacate1.jpg',
+ thumb: '/plantas/planta1/abacate1.webp',
```

---

## ⚙️ Tecnologias

<div align="center">

| Tecnologia | Papel no projeto |
|-----------|-----------------|
| **[Vite 5](https://vitejs.dev/)** | Build tool e servidor de desenvolvimento ultrarrápido |
| **[TypeScript 5](https://www.typescriptlang.org/)** | Tipagem estática, organização e segurança do código |
| **CSS3 Vanilla** | Estilização completa sem frameworks — animações, grid, variáveis |
| **IntersectionObserver API** | Lazy loading nativo de imagens sem bibliotecas externas |
| **[Sharp](https://sharp.pixelplumbing.com/)** | Compressão e conversão de imagens para WebP no build |
| **Google Fonts** | Tipografia — Playfair Display + DM Sans |

</div>

### Por que sem framework?

FloraGuide foi intencionalmente construído **sem React, Vue ou Angular**. O objetivo foi explorar o máximo do TypeScript e das APIs nativas do browser — `IntersectionObserver`, manipulação de DOM, `fetch` — mantendo o bundle mínimo e a performance máxima.

---

## 🎨 Design System

```
Paleta de cores
───────────────────────────────────────────────
  Background principal   #0b1610
  Background card        #111a16
  Superfície livro       #16241e → #1f332a
  Texto principal        #e6e6e6
  Texto suave            #c2d9c8
  Acento verde           #6ef3b0
  Acento escuro          #2d5a40

Tipografia
───────────────────────────────────────────────
  Display / Títulos      Playfair Display (serif)
  Interface / Corpo      DM Sans (sans-serif)
```

---

## 🌱 Contribuição

Contribuições são muito bem-vindas! Siga os passos abaixo:

```bash
# 1. Faça um fork do projeto
# 2. Crie uma branch para sua feature
git checkout -b feature/minha-feature

# 3. Commit com mensagem descritiva
git commit -m "feat: adiciona busca por família botânica"

# 4. Envie para o seu fork
git push origin feature/minha-feature

# 5. Abra um Pull Request 🎉
```

### Convenção de commits

| Prefixo | Uso |
|--------|-----|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `style:` | Alterações de CSS/visual sem lógica |
| `refactor:` | Refatoração de código |
| `docs:` | Alterações na documentação |
| `chore:` | Tarefas de manutenção (deps, config) |

---

## 📋 Termos de Uso

- ✅ Uso **pessoal e educacional** totalmente livre
- ✅ **Modificação** e redistribuição permitidas com atribuição
- ✅ Uso em **projetos open source** permitido
- ❌ **Redistribuição comercial** sem autorização prévia não é permitida
- ❌ As **imagens das plantas** podem ter direitos autorais próprios — verifique a origem antes de publicar
- ❌ Não é permitido remover créditos do projeto original

---

## 📄 Licença

```
MIT License

Copyright (c) 2025 FloraGuide

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 🗺️ Roadmap

- [x] Tela inicial com grid de plantas
- [x] Filtro de cards em tempo real
- [x] Pesquisa web integrada
- [x] Carrossel de imagens com dots
- [x] Texto paginado estilo livro
- [x] Lazy loading com skeleton shimmer
- [x] Script de compressão WebP
- [ ] Modo escuro / claro alternável
- [ ] Suporte a Supabase como backend
- [ ] PWA com funcionamento offline
- [ ] Busca fonética (ex: "abacateiro" encontra "Abacate")
- [ ] Página de taxonomia com árvore visual

---

<div align="center">

<br/>

Feito com 🌿 e muito TypeScript

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6ef3b0,50:1f4d2e,100:0b1610&height=100&section=footer" width="100%"/>

</div>