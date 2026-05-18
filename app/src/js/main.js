// interier-slider.js — добавляем одну строку в init()

class InterierSlider {
  constructor(section) {
    this.section = section
    this.track = section.querySelector('.interier__track')
    this.progressFill = section.querySelector('.interier__progress-fill')
    this.counterCurrent = section.querySelector('.interier__counter-current')
    this.counterTotal = section.querySelector('.interier__counter-total')
    this.slides = section.querySelectorAll('.interier__slide')
    this.totalSlides = this.slides.length

    this.isDragging = false
    this.startX = 0
    this.scrollStartX = 0

    this.init()
  }

  init() {
    // Автоматически подставляем количество слайдов
    this.counterTotal.textContent = String(this.totalSlides).padStart(2, '0')

    this.track.addEventListener('mousedown', (e) => this.onDragStart(e))
    this.track.addEventListener('mousemove', (e) => this.onDragMove(e))
    this.track.addEventListener('mouseup', () => this.onDragEnd())
    this.track.addEventListener('mouseleave', () => this.onDragEnd())
    this.track.addEventListener('scroll', () => this.onScroll())
    this.track.addEventListener('scrollend', () => this.onScrollEnd())

    this.track.addEventListener('touchstart', (e) => this.onDragStart(e), { passive: false })
    this.track.addEventListener('touchmove', (e) => this.onDragMove(e), { passive: false })
    this.track.addEventListener('touchend', () => this.onDragEnd())

    this.updateProgress()
  }

  // ... остальные методы без изменений
  onDragStart(e) {
    this.isDragging = true
    this.track.style.cursor = 'grabbing'
    this.track.style.userSelect = 'none'
    this.track.style.scrollBehavior = 'auto'

    const pageX = e.type.includes('touch') ? e.touches[0].pageX : e.pageX
    this.startX = pageX
    this.scrollStartX = this.track.scrollLeft
  }

  onDragMove(e) {
    if (!this.isDragging) return

    e.preventDefault()
    const pageX = e.type.includes('touch') ? e.touches[0].pageX : e.pageX
    const diff = this.startX - pageX
    this.track.scrollLeft = this.scrollStartX + diff
  }

  onDragEnd() {
    if (!this.isDragging) return
    this.isDragging = false
    this.track.style.cursor = 'grab'
    this.track.style.userSelect = ''
    this.track.style.scrollBehavior = 'smooth'

    this.snapToNearestSlide()
  }

  snapToNearestSlide() {
    const slideWidth = this.slides[0].offsetWidth
    const gap = 24
    const slideTotal = slideWidth + gap
    const currentScroll = this.track.scrollLeft
    const nearestIndex = Math.round(currentScroll / slideTotal)
    const targetScroll = nearestIndex * slideTotal

    this.track.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })
  }

  onScroll() {
    this.updateProgress()
  }

  onScrollEnd() {
    this.snapToNearestSlide()
  }

  updateProgress() {
    const slideWidth = this.slides[0].offsetWidth
    const gap = 24
    const slideTotal = slideWidth + gap
    const maxScroll = this.track.scrollWidth - this.track.clientWidth
    const currentScroll = this.track.scrollLeft

    const currentIndex = Math.min(
      Math.round(currentScroll / slideTotal),
      this.totalSlides - 1
    )

    const progress = Math.min((currentIndex / (this.totalSlides - 1)) * 100, 100)
    this.progressFill.style.width = `${progress}%`

    this.counterCurrent.textContent = String(currentIndex + 1).padStart(2, '0')
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  const sliderSections = document.querySelectorAll('.interier')
  sliderSections.forEach(section => new InterierSlider(section))
})


// provenance-slider.js
const slider = document.querySelector('[data-slider="provenance"]')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.style.cursor = 'grabbing'
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.parentElement.scrollLeft
})

slider.addEventListener('mouseleave', () => {
  isDown = false
  slider.style.cursor = 'grab'
})

slider.addEventListener('mouseup', () => {
  isDown = false
  slider.style.cursor = 'grab'
})

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - slider.offsetLeft
  const walk = (x - startX) * 2
  slider.parentElement.scrollLeft = scrollLeft - walk
})



document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header')
  const links = header.querySelectorAll('a[href^="#"]')

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()

      const targetId = link.getAttribute('href')
      const target = document.querySelector(targetId)

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})