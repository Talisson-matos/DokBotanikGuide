import './styles/planta.css'
import { renderHome } from './pages/Home'
import { renderPlanta } from './pages/Planta'

export function navigateTo(page: 'home' | 'planta', plantaId?: number) {
  const app = document.getElementById('app') as HTMLDivElement
  app.innerHTML = ''

  if (page === 'home') {
    renderHome()
  } else if (page === 'planta' && plantaId !== undefined) {
    renderPlanta(plantaId)
  }
}

navigateTo('home')