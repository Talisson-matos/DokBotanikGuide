import { plantas } from '../data/plantas'
import { navigateTo } from '../main'

export async function renderPlanta(id: number) {
  const app = document.getElementById('app') as HTMLDivElement
  const planta = plantas.find(p => p.id === id)

  if (!planta) {
    navigateTo('home')
    return
  }

  let descricao = 'Descrição não disponível.'
  try {
    const resp = await fetch(planta.txtPath)
    if (resp.ok) descricao = await resp.text()
  } catch (_) {}

  const imagens = planta.imagens

  app.innerHTML = `
    <div class="planta-page">

      <button class="btn-voltar" id="btn-voltar">
        <span>&#8592;</span> Voltar
      </button>

      <div class="planta-card">

        <div class="imagem-carrossel">
          <img class="imagem-principal" src="${imagens[0]}" alt="${planta.nome}" />

          <button class="seta-img esquerda-img">&#10094;</button>
          <button class="seta-img direita-img">&#10095;</button>

          <div class="dots">
            ${imagens.map((_, i) =>
              `<span class="dot ${i === 0 ? 'ativa' : ''}" data-index="${i}"></span>`
            ).join('')}
          </div>

          <div class="planta-badge">
            <span class="badge-nome">${planta.nome}</span>
            <span class="badge-cientifico">${planta.nomecientifico}</span>
          </div>
        </div>

        <div class="livro">
          <button class="seta esquerda">&#10094;</button>

          <div class="pagina-container">
            <div class="pagina"></div>
          </div>

          <button class="seta direita">&#10095;</button>
        </div>

      </div>
    </div>
  `

  document.getElementById('btn-voltar')!.addEventListener('click', () => navigateTo('home'))

  iniciarCarrossel(imagens)
  iniciarLivro(descricao)
}

/* ================= CARROSSEL ================= */

function iniciarCarrossel(imagens: string[]) {
  const imagemPrincipal = document.querySelector('.imagem-principal') as HTMLImageElement
  const btnEsquerda = document.querySelector('.esquerda-img') as HTMLButtonElement
  const btnDireita = document.querySelector('.direita-img') as HTMLButtonElement
  const dots = document.querySelectorAll('.dot')

  let indiceAtual = 0

  function atualizarSlide() {
    imagemPrincipal.style.opacity = '0'
    setTimeout(() => {
      imagemPrincipal.src = imagens[indiceAtual]
      imagemPrincipal.style.opacity = '1'
    }, 150)
    dots.forEach(d => d.classList.remove('ativa'))
    dots[indiceAtual].classList.add('ativa')
  }

  btnDireita.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % imagens.length
    atualizarSlide()
  })

  btnEsquerda.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length
    atualizarSlide()
  })

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      indiceAtual = Number(dot.getAttribute('data-index'))
      atualizarSlide()
    })
  })
}

/* ================= LIVRO ================= */

function iniciarLivro(textoCompleto: string) {
  const paginaContainer = document.querySelector('.pagina-container') as HTMLDivElement
  const paginaElemento = document.querySelector('.pagina') as HTMLDivElement
  const btnEsquerda = document.querySelector('.esquerda') as HTMLButtonElement
  const btnDireita = document.querySelector('.direita') as HTMLButtonElement

  // Adiciona número de página e decoração
  const numEl = document.createElement('div')
  numEl.className = 'pagina-numero'
  paginaContainer.appendChild(numEl)

  const paginas = dividirTextoEmPaginas(textoCompleto)
  let paginaAtual = 0

  function renderizarPagina() {
    paginaElemento.style.opacity = '0'
    setTimeout(() => {
      // Destaca linhas que parecem títulos (ex: "1. Nome", "2. Taxonomia")
      const linhas = paginas[paginaAtual].split('\n')
      const html = linhas.map(linha => {
        const eTitulo = /^\d+\.\s/.test(linha.trim()) || (linha.trim().length < 50 && linha.trim().endsWith(':'))
        if (eTitulo) {
          return `<div class="pagina-titulo">${linha}</div>`
        }
        return `<span>${linha}<br/></span>`
      }).join('')

      paginaElemento.innerHTML = html
      paginaElemento.style.opacity = '1'

      numEl.textContent = `— ${paginaAtual + 1} / ${paginas.length} —`
    }, 120)

    btnEsquerda.style.visibility = paginaAtual === 0 ? 'hidden' : 'visible'
    btnDireita.style.visibility = paginaAtual === paginas.length - 1 ? 'hidden' : 'visible'
  }

  btnDireita.addEventListener('click', () => {
    if (paginaAtual < paginas.length - 1) { paginaAtual++; renderizarPagina() }
  })

  btnEsquerda.addEventListener('click', () => {
    if (paginaAtual > 0) { paginaAtual--; renderizarPagina() }
  })

  renderizarPagina()
}

function dividirTextoEmPaginas(texto: string): string[] {
  const limite = 800
  const palavras = texto.split(' ')
  const paginas: string[] = []
  let atual = ''

  for (const palavra of palavras) {
    if ((atual + palavra).length < limite) {
      atual += palavra + ' '
    } else {
      paginas.push(atual.trim())
      atual = palavra + ' '
    }
  }
  if (atual.length > 0) paginas.push(atual.trim())
  return paginas
}