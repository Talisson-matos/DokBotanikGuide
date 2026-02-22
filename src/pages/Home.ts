import { plantas } from '../data/plantas'
import { navigateTo } from '../main'

export function renderHome() {
  const app = document.getElementById('app') as HTMLDivElement

  app.innerHTML = `
    <div class="home-wrapper">

      <header class="home-header">
        <div class="home-logo">
          <span class="logo-icon">🌿</span>
          <span class="logo-text">DokBotanik<em>Guide</em></span>
        </div>
        <p class="home-subtitle">Enciclopédia botânica interativa</p>
      </header>

      <div class="home-search-area">
        <div class="search-bar-wrap">
          <span class="search-icon">🔍</span>
          <input
            type="text"
            id="pesquisa-web"
            class="search-input"
            placeholder="Pesquisar planta na web..."
            autocomplete="off"
          />
          <button id="btn-pesquisa-web" class="search-btn">Buscar</button>
        </div>

        <div class="filter-bar-wrap">
          <span class="filter-label">Filtrar coleção:</span>
          <input
            type="text"
            id="filtro-cards"
            class="filter-input"
            placeholder="Ex: Abacate..."
            autocomplete="off"
          />
        </div>
      </div>

      <div class="cards-grid" id="cards-grid">
        ${plantas.map(p => `
          <div class="planta-thumb" data-id="${p.id}" data-nome="${p.nome.toLowerCase()}">
            <div class="thumb-img-wrap">
              <div class="thumb-skeleton"></div>
              <img
                data-src="${p.thumb}"
                alt="${p.nome}"
                class="thumb-img lazy"
                decoding="async"
              />
              <div class="thumb-overlay">
                <span class="thumb-ver">Ver planta →</span>
              </div>
            </div>
            <div class="thumb-info">
              <span class="thumb-nome">${p.nome}</span>
              <span class="thumb-cientifico">${p.nomecientifico}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="no-results hidden" id="no-results">
        <span>🌵</span>
        <p>Nenhuma planta encontrada</p>
      </div>

    </div>
  `

  // ── Lazy loading via IntersectionObserver ──────────────────────────
  const lazyImages = document.querySelectorAll<HTMLImageElement>('img.lazy')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        const img = entry.target as HTMLImageElement
        const src = img.getAttribute('data-src')
        if (!src) return

        img.src = src
        img.removeAttribute('data-src')

        img.onload = () => {
          img.classList.add('loaded')
          const skeleton = img.previousElementSibling as HTMLElement
          if (skeleton?.classList.contains('thumb-skeleton')) {
            skeleton.style.opacity = '0'
          }
        }

        img.onerror = () => {
          img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><rect fill='%23162418' width='200' height='200'/><text fill='%236ef3b0' font-size='48' x='50%25' y='55%25' text-anchor='middle'>🌱</text></svg>"
          img.classList.add('loaded')
        }

        observer.unobserve(img)
      })
    },
    {
      root: null,
      rootMargin: '150px',
      threshold: 0
    }
  )

  lazyImages.forEach(img => observer.observe(img))

  // ── Web search ─────────────────────────────────────────────────────
  const btnPesquisa = document.getElementById('btn-pesquisa-web') as HTMLButtonElement
  const inputPesquisa = document.getElementById('pesquisa-web') as HTMLInputElement

  btnPesquisa.addEventListener('click', () => {
    const termo = inputPesquisa.value.trim()
    if (termo) {
      window.open(`https://www.google.com/search?q=${encodeURIComponent(termo + ' planta botânica')}`, '_blank')
    }
  })

  inputPesquisa.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') btnPesquisa.click()
  })

  // ── Filtro de cards ────────────────────────────────────────────────
  const filtroInput = document.getElementById('filtro-cards') as HTMLInputElement
  const cardsGrid = document.getElementById('cards-grid') as HTMLDivElement
  const noResults = document.getElementById('no-results') as HTMLDivElement

  filtroInput.addEventListener('input', () => {
    const termo = filtroInput.value.toLowerCase().trim()
    const cards = cardsGrid.querySelectorAll<HTMLElement>('.planta-thumb')
    let visiveis = 0

    cards.forEach(card => {
      const nome = card.getAttribute('data-nome') || ''
      const visivel = nome.includes(termo)
      card.style.display = visivel ? '' : 'none'
      if (visivel) visiveis++
    })

    noResults.classList.toggle('hidden', visiveis > 0)
  })

  // ── Navegação para planta ──────────────────────────────────────────
  const cards = cardsGrid.querySelectorAll<HTMLElement>('.planta-thumb')
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = Number(card.getAttribute('data-id'))
      navigateTo('planta', id)
    })
  })
}