
// popup.js
(function() {
  // Ждём загрузки DOM
  document.addEventListener('DOMContentLoaded', function() {
    
    const popup = document.getElementById('about-popup');
    
    // Если попапа нет на странице — выходим
    if (!popup) return;
    
    const overlay = popup.querySelector('.popup__overlay');
    const closeBtn = popup.querySelector('.popup__close');
    const triggerLink = document.querySelector('a.header__link[href="#about"]');
    
    // Функция открытия
    function openPopup(e) {
      if (e) e.preventDefault();
      popup.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
    
    // Функция закрытия
    function closePopup() {
      popup.classList.remove('is-active');
      document.body.style.overflow = '';
    }
    
    // Открытие по клику на ссылку
    if (triggerLink) {
      triggerLink.addEventListener('click', openPopup);
    } else {
      console.warn('Ссылка a.header__link[href="#about"] не найдена');
    }
    
    // Закрытие по клику на крестик
    if (closeBtn) {
      closeBtn.addEventListener('click', closePopup);
    }
    
    // Закрытие по клику на затемнение
    if (overlay) {
      overlay.addEventListener('click', closePopup);
    }
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && popup.classList.contains('is-active')) {
        closePopup();
      }
    });
    
    // Закрытие при клике на сам попап (не на контент)
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        closePopup();
      }
    });
    
  }); // конец DOMContentLoaded
})();








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


 




console.log("1");

// ========================================
// MERCH SLIDER
// ========================================

(function() {
  'use strict'; 

  // === DOM refs ===
  const track = document.querySelector('.merch__track');
  const cards = document.querySelectorAll('.merch-card');
  const prevBtn = document.querySelector('.merch__arrow--prev');
  const nextBtn = document.querySelector('.merch__arrow--next');
  const pagination = document.querySelector('.merch__pagination');

  // === State ===
  let currentIndex = 0;
  let visibleCount = getVisibleCount();
  let totalSlides = Math.max(1, cards.length - visibleCount + 1);

  console.log("1");
  // === Helpers ===
  function getVisibleCount() {
    const width = window.innerWidth;
    if (width >= 1200) return 4;
    if (width >= 992) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  function updateTotalSlides() {
    visibleCount = getVisibleCount();
    totalSlides = Math.max(1, cards.length - visibleCount + 1);
    if (currentIndex >= totalSlides) {
      currentIndex = totalSlides - 1;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    }
  }

  function getCardWidth() {
    if (!track) return 0;
    const gap = 24; // соответствует gap в CSS
    const trackWidth = track.offsetWidth;
    const cardWidth = (trackWidth - gap * (visibleCount - 1)) / visibleCount;
    return cardWidth + gap; // ширина карточки + gap
  }

  function getTranslateX() {
    const cardWidth = getCardWidth();
    return -currentIndex * cardWidth;
  }

  // === Render ===
  function render() {
    if (!track) return;
    const translateX = getTranslateX();
    track.style.transform = `translateX(${translateX}px)`;
    updateDots();
    updateButtons();
  }

  // === Dots ===
  function generateDots() {
    if (!pagination) return;
    pagination.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'merch__dot';
      dot.type = 'button';
      dot.setAttribute('aria-label', `Слайд ${i + 1}`);
      dot.dataset.index = i;
      if (i === currentIndex) {
        dot.classList.add('merch__dot--active');
      }
      dot.addEventListener('click', function() {
        const index = parseInt(this.dataset.index, 10);
        goTo(index);
      });
      pagination.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = pagination ? pagination.querySelectorAll('.merch__dot') : [];
    dots.forEach((dot, i) => {
      dot.classList.toggle('merch__dot--active', i === currentIndex);
    });
  }

  // === Buttons ===
  function updateButtons() {
    if (prevBtn) {
      prevBtn.disabled = currentIndex === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = currentIndex >= totalSlides - 1;
    }
  }

  // === Navigation ===
  function goTo(index) {
    if (index < 0) index = 0;
    if (index >= totalSlides) index = totalSlides - 1;
    if (index === currentIndex) return;
    currentIndex = index;
    render();
  }

  function next() {
    if (currentIndex < totalSlides - 1) {
      goTo(currentIndex + 1);
    }
  }

  function prev() {
    if (currentIndex > 0) {
      goTo(currentIndex - 1);
    }
  }

  // === Recalculate on resize ===
  let resizeTimeout = null;

  function handleResize() {
    if (resizeTimeout) {
      cancelAnimationFrame(resizeTimeout);
    }
    resizeTimeout = requestAnimationFrame(function() {
      const newVisible = getVisibleCount();
      if (newVisible !== visibleCount) {
        updateTotalSlides();
        generateDots();
        render();
      } else {
        // просто обновляем позицию (ширина карточки могла измениться)
        render();
      }
      resizeTimeout = null;
    });
  }

  // === Init ===
  function init() {
    if (!track || cards.length === 0) {
      console.warn('Merch slider: track or cards not found');
      return;
    }

    updateTotalSlides();
    generateDots();
    render();

    // Events
    if (prevBtn) {
      prevBtn.addEventListener('click', prev);
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', next);
    }

    window.addEventListener('resize', handleResize);

    // Keyboard navigation (опционально)
    document.addEventListener('keydown', function(e) {
      // Только если фокус не в поле ввода
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      }
    });
  }

  // === Запуск после загрузки DOM ===
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
console.log("1");

})();