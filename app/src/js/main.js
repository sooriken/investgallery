// ========================================
// INTERIER SLIDER
// ========================================

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
    this.isTouching = false

    this.init()
  }

  init() {
    this.counterTotal.textContent = String(this.totalSlides).padStart(2, '0')
    this.updateProgress()

    // Mouse events
    this.track.addEventListener('mousedown', (e) => this.onDragStart(e))
    document.addEventListener('mousemove', (e) => this.onDragMove(e))
    document.addEventListener('mouseup', () => this.onDragEnd())

    // Touch events (с улучшенной обработкой для iOS)
    this.track.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: true })
    this.track.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false })
    this.track.addEventListener('touchend', () => this.onTouchEnd(), { passive: true })

    // Scroll events
    this.track.addEventListener('scroll', () => {
      this.updateProgress()
      this.onScrollEnd()
    })

    // Resize
    let resizeTimer
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => this.updateProgress(), 200)
    })
  }

  onDragStart(e) {
    this.isDragging = true
    this.track.style.cursor = 'grabbing'
    this.track.style.userSelect = 'none'
    this.track.style.scrollBehavior = 'auto'

    this.startX = e.pageX
    this.scrollStartX = this.track.scrollLeft
  }

  onDragMove(e) {
    if (!this.isDragging) return
    e.preventDefault()

    const diff = this.startX - e.pageX
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

  onTouchStart(e) {
    this.isTouching = true
    this.track.style.scrollBehavior = 'auto'
    const touch = e.touches[0]
    this.startX = touch.pageX
    this.scrollStartX = this.track.scrollLeft
  }

  onTouchMove(e) {
    if (!this.isTouching) return
    e.preventDefault()

    const touch = e.touches[0]
    const diff = this.startX - touch.pageX
    this.track.scrollLeft = this.scrollStartX + diff
  }

  onTouchEnd() {
    if (!this.isTouching) return
    this.isTouching = false
    this.track.style.scrollBehavior = 'smooth'

    // Небольшая задержка перед snap, чтобы iOS успел обработать скролл
    setTimeout(() => {
      this.snapToNearestSlide()
    }, 50)
  }

  snapToNearestSlide() {
    const slideWidth = this.slides[0].offsetWidth
    const gap = parseInt(getComputedStyle(this.track).gap) || 24
    const slideTotal = slideWidth + gap
    const currentScroll = this.track.scrollLeft

    // Находим индекс ближайшего слайда
    let nearestIndex = Math.round(currentScroll / slideTotal)
    nearestIndex = Math.max(0, Math.min(nearestIndex, this.totalSlides - 1))

    const targetScroll = nearestIndex * slideTotal

    // Проверяем, нужно ли вообще двигать
    if (Math.abs(this.track.scrollLeft - targetScroll) > 5) {
      this.track.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      })
    }

    // Обновляем прогресс после анимации
    setTimeout(() => {
      this.updateProgress()
    }, 400)
  }

  onScrollEnd() {
    // Защита от множественных вызовов
    if (this._scrollTimeout) {
      clearTimeout(this._scrollTimeout)
    }
    this._scrollTimeout = setTimeout(() => {
      this.updateProgress()
      this._scrollTimeout = null
    }, 100)
  }

  updateProgress() {
    const slideWidth = this.slides[0].offsetWidth
    const gap = parseInt(getComputedStyle(this.track).gap) || 24
    const slideTotal = slideWidth + gap
    const currentScroll = this.track.scrollLeft

    // Текущий индекс
    let currentIndex = Math.round(currentScroll / slideTotal)
    currentIndex = Math.max(0, Math.min(currentIndex, this.totalSlides - 1))

    // Прогресс в %
    const progress = this.totalSlides > 1
      ? Math.min((currentIndex / (this.totalSlides - 1)) * 100, 100)
      : 0

    this.progressFill.style.width = `${progress}%`
    this.counterCurrent.textContent = String(currentIndex + 1).padStart(2, '0')
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  const sliderSections = document.querySelectorAll('.interier')
  sliderSections.forEach(section => new InterierSlider(section))
})

console.log("interier work");







// ========================================
// CONCEPT MANIFEST EXPAND
// ========================================

(function() {
  'use strict';

  const expandButtons = document.querySelectorAll('.concept__expand');

  expandButtons.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Ищем .concept__manifest-wrapper через .concept__manifest-inner
      const inner = this.closest('.concept__manifest-inner');
      if (!inner) return;
      
      const wrapper = inner.querySelector('.concept__manifest-wrapper');
      if (!wrapper) return;
      
      // Переключаем класс
      wrapper.classList.toggle('is-expanded');
    });
  });

})(); 

console.log("manifest works");







// ========================================
// PROVENANCE SLIDER
// ========================================

(function() {
  'use strict';

  const sliderWrapper = document.querySelector('.provenance__slider-wrapper');
  const slider = document.querySelector('[data-slider="provenance"]');
  
  if (!sliderWrapper || !slider) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  // === Mouse events ===
  sliderWrapper.addEventListener('mousedown', function(e) {
    isDown = true;
    sliderWrapper.style.cursor = 'grabbing';
    startX = e.pageX - sliderWrapper.offsetLeft;
    scrollLeft = sliderWrapper.scrollLeft;
    sliderWrapper.classList.add('is-dragging');
  });

  sliderWrapper.addEventListener('mouseleave', function() {
    isDown = false;
    sliderWrapper.style.cursor = 'grab';
    sliderWrapper.classList.remove('is-dragging');
  });

  sliderWrapper.addEventListener('mouseup', function() {
    isDown = false;
    sliderWrapper.style.cursor = 'grab';
    sliderWrapper.classList.remove('is-dragging');
  });

  sliderWrapper.addEventListener('mousemove', function(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderWrapper.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderWrapper.scrollLeft = scrollLeft - walk;
  });

  // === Touch events (для мобильных) ===
  let touchStartX = 0;
  let touchScrollLeft = 0;

  sliderWrapper.addEventListener('touchstart', function(e) {
    const touch = e.touches[0];
    touchStartX = touch.pageX - sliderWrapper.offsetLeft;
    touchScrollLeft = sliderWrapper.scrollLeft;
    sliderWrapper.classList.add('is-dragging');
  }, { passive: true });

  sliderWrapper.addEventListener('touchmove', function(e) {
    const touch = e.touches[0];
    const x = touch.pageX - sliderWrapper.offsetLeft;
    const walk = (x - touchStartX) * 1.5;
    sliderWrapper.scrollLeft = touchScrollLeft - walk;
  }, { passive: true });

  sliderWrapper.addEventListener('touchend', function() {
    sliderWrapper.classList.remove('is-dragging');
  }, { passive: true });

})();


// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

(function() {
  'use strict';

  const header = document.getElementById('header');
  if (!header) return;

  const links = header.querySelectorAll('a[href^="#"]');

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      // Пропускаем ссылки на попап
      if (targetId === '#about-popup') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

})();

console.log("provenance works");






 

// ========================================
// MERCH SLIDER
// ========================================

(function() {
  'use strict';

  // ========================================
  // DOM
  // ========================================

  const slider = document.querySelector('.merch__slider');
  const track = document.querySelector('.merch__track');
  const cards = Array.from(
    document.querySelectorAll('.merch-card')
  );

  const prevBtn =
    document.querySelector('.merch__arrow--prev');

  const nextBtn =
    document.querySelector('.merch__arrow--next');

  const pagination =
    document.querySelector('.merch__pagination');


  // ========================================
  // State
  // ========================================

  let currentIndex = 0;

  let visibleCount = 1;

  let maxIndex = 0;

  let cardStep = 0;

  let maxTranslate = 0;

  let currentTranslateX = 0;


  // ========================================
  // Drag state
  // ========================================

  let isDragging = false;

  let startX = 0;

  let startTranslateX = 0;

  let dragDiff = 0;


  // ========================================
  // Get actual gap
  // ========================================

  function getGap() {
    if (!track) {
      return 0;
    }

    const styles =
      window.getComputedStyle(track);

    const gap =
      parseFloat(
        styles.columnGap || styles.gap
      );

    return Number.isFinite(gap)
      ? gap
      : 0;
  }


  // ========================================
  // Calculate actual geometry
  // ========================================

  function calculateSlider() {
    if (
      !slider ||
      !track ||
      cards.length === 0
    ) {
      return;
    }


    const firstCard = cards[0];


    const cardWidth =
      firstCard.getBoundingClientRect().width;


    const gap = getGap();


    /*
     * Полный физический шаг:
     *
     * карточка + gap
     */
    cardStep =
      cardWidth + gap;


    /*
     * Реальная ширина области просмотра.
     */
    const sliderWidth =
      slider.clientWidth;


    /*
     * Определяем, сколько ПОЛНЫХ карточек
     * действительно помещается внутри слайдера.
     *
     * Например:
     *
     * slider = 700px
     * card   = 330px
     * gap    = 24px
     *
     * (700 + 24) / (330 + 24) = 2.05
     *
     * Значит реально видно 2 карточки.
     */
    if (cardStep > 0) {
      visibleCount = Math.floor(
        (sliderWidth + gap + 0.01) /
        cardStep
      );
    } else {
      visibleCount = 1;
    }


    /*
     * Защита от странных значений.
     */
    visibleCount = Math.max(
      1,
      Math.min(
        visibleCount,
        cards.length
      )
    );


    /*
     * Последний ДОПУСТИМЫЙ индекс.
     *
     * 4 карточки / 3 видно:
     * 4 - 3 = 1
     *
     * Индексы:
     * 0 → первый
     * 1 → последний
     *
     * Никакого индекса 2.
     */
    maxIndex = Math.max(
      0,
      cards.length - visibleCount
    );


    /*
     * Реальная ширина всего track.
     */
    const trackWidth =
      track.scrollWidth;


    /*
     * Максимальное допустимое физическое
     * смещение.
     */
    maxTranslate = Math.max(
      0,
      trackWidth - sliderWidth
    );


    /*
     * Если карточек помещается больше
     * или столько же, сколько существует,
     * прокрутка полностью отключается.
     */
    if (
      visibleCount >= cards.length
    ) {
      maxIndex = 0;
      maxTranslate = 0;
    }


    /*
     * Защищаем текущую позицию после resize.
     */
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }


    if (currentIndex < 0) {
      currentIndex = 0;
    }
  }


  // ========================================
  // Translate
  // ========================================

  function getTranslateX(index) {
    if (
      maxIndex <= 0 ||
      cardStep <= 0
    ) {
      return 0;
    }


    /*
     * Обычное смещение.
     */
    let translate =
      index * cardStep;


    /*
     * Последняя позиция НЕ должна
     * выходить за физический конец track.
     *
     * Это особенно важно из-за дробных
     * размеров карточек.
     */
    if (index >= maxIndex) {
      translate = maxTranslate;
    } else {
      translate = Math.min(
        translate,
        maxTranslate
      );
    }


    return -translate;
  }


  // ========================================
  // Render
  // ========================================

  function render(animate = true) {
    if (!track) {
      return;
    }


    const translateX =
      getTranslateX(currentIndex);


    currentTranslateX =
      translateX;


    if (animate) {
      track.style.transition =
        'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    } else {
      track.style.transition =
        'none';
    }


    track.style.transform =
      `translate3d(${translateX}px, 0, 0)`;


    if (!animate) {
      track.offsetHeight;
      track.style.transition = '';
    }


    updateDots();
    updateButtons();
  }


  // ========================================
  // Pagination
  // ========================================

  function generateDots() {
    if (!pagination) {
      return;
    }


    pagination.innerHTML = '';


    /*
     * Количество точек:
     *
     * maxIndex + 1
     *
     * 4 карточки / 3 видно:
     * maxIndex = 1
     * точек = 2
     */
    const dotsCount =
      maxIndex + 1;


    for (
      let i = 0;
      i < dotsCount;
      i++
    ) {
      const dot =
        document.createElement('button');


      dot.className =
        'merch__dot';


      dot.type =
        'button';


      dot.setAttribute(
        'aria-label',
        `Слайд ${i + 1}`
      );


      dot.dataset.index =
        i;


      if (
        i === currentIndex
      ) {
        dot.classList.add(
          'merch__dot--active'
        );
      }


      dot.addEventListener(
        'click',
        function() {
          const index =
            Number(this.dataset.index);

          goTo(index);
        }
      );


      pagination.appendChild(dot);
    }
  }


  function updateDots() {
    if (!pagination) {
      return;
    }


    const dots =
      pagination.querySelectorAll(
        '.merch__dot'
      );


    dots.forEach(
      (dot, index) => {
        dot.classList.toggle(
          'merch__dot--active',
          index === currentIndex
        );
      }
    );
  }


  // ========================================
  // Buttons
  // ========================================

  function updateButtons() {
    if (prevBtn) {
      prevBtn.disabled =
        currentIndex <= 0;
    }


    if (nextBtn) {
      nextBtn.disabled =
        currentIndex >= maxIndex;
    }
  }


  // ========================================
  // Navigation
  // ========================================

  function goTo(index) {
    /*
     * Жесткое ограничение.
     */
    index = Math.max(
      0,
      Math.min(
        maxIndex,
        index
      )
    );


    /*
     * Если это уже последняя позиция,
     * ничего не делаем.
     */
    if (index === currentIndex) {
      return;
    }


    currentIndex =
      index;


    render(true);
  }


  function next() {
    /*
     * СТРОГОЕ ограничение.
     *
     * После последнего индекса
     * функция вообще ничего не делает.
     */
    if (
      currentIndex >= maxIndex
    ) {
      updateButtons();
      return;
    }


    currentIndex++;


    render(true);
  }


  function prev() {
    if (
      currentIndex <= 0
    ) {
      updateButtons();
      return;
    }


    currentIndex--;


    render(true);
  }


  // ========================================
  // Drag start
  // ========================================

  function onDragStart(e) {
    if (
      maxIndex <= 0
    ) {
      return;
    }


    const pageX =
      e.type === 'touchstart'
        ? e.touches[0].pageX
        : e.pageX;


    isDragging = true;


    startX =
      pageX;


    startTranslateX =
      currentTranslateX;


    dragDiff = 0;


    track.classList.add(
      'is-dragging'
    );


    track.style.transition =
      'none';
  }


  // ========================================
  // Drag move
  // ========================================

  function onDragMove(e) {
    if (!isDragging) {
      return;
    }


    e.preventDefault();


    const pageX =
      e.type === 'touchmove'
        ? e.touches[0].pageX
        : e.pageX;


    const diff =
      startX - pageX;


    dragDiff =
      diff;


    let newTranslate =
      startTranslateX - diff;


    /*
     * Ограничения:
     *
     * начало = 0
     * конец = -maxTranslate
     */
    newTranslate =
      Math.max(
        -maxTranslate,
        Math.min(
          0,
          newTranslate
        )
      );


    track.style.transform =
      `translate3d(${newTranslate}px, 0, 0)`;
  }


  // ========================================
  // Drag end
  // ========================================

  function onDragEnd() {
    if (!isDragging) {
      return;
    }


    isDragging = false;


    track.classList.remove(
      'is-dragging'
    );


    track.style.transition =
      'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';


    if (
      cardStep <= 0
    ) {
      render(true);
      return;
    }


    /*
     * Вычисляем направление движения.
     */
    const offset =
      dragDiff / cardStep;


    /*
     * Маленькое движение —
     * возвращаем текущий слайд.
     */
    if (
      Math.abs(offset) < 0.2
    ) {
      render(true);
      return;
    }


    let targetIndex =
      currentIndex +
      Math.round(offset);


    /*
     * Жесткое ограничение.
     */
    targetIndex =
      Math.max(
        0,
        Math.min(
          maxIndex,
          targetIndex
        )
      );


    currentIndex =
      targetIndex;


    render(true);
  }


  // ========================================
  // Resize
  // ========================================

  let resizeFrame = null;


  function handleResize() {
    if (resizeFrame) {
      cancelAnimationFrame(
        resizeFrame
      );
    }


    resizeFrame =
      requestAnimationFrame(
        function() {

          /*
           * Сбрасываем геометрию.
           */
          calculateSlider();


          /*
           * После пересчета текущий индекс
           * может стать недопустимым.
           */
          if (
            currentIndex > maxIndex
          ) {
            currentIndex =
              maxIndex;
          }


          /*
           * Пересоздаем pagination.
           */
          generateDots();


          /*
           * Рисуем без анимации.
           */
          render(false);


          resizeFrame = null;
        }
      );
  }


  // ========================================
  // Init
  // ========================================

  function init() {
    if (
      !slider ||
      !track ||
      cards.length === 0
    ) {
      console.warn(
        'Merch slider: required elements not found'
      );

      return;
    }


    /*
     * Первичный расчет.
     */
    calculateSlider();


    /*
     * Создаем точки.
     */
    generateDots();


    /*
     * Начальный render.
     */
    render(false);


    // ======================================
    // Buttons
    // ======================================

    if (prevBtn) {
      prevBtn.addEventListener(
        'click',
        prev
      );
    }


    if (nextBtn) {
      nextBtn.addEventListener(
        'click',
        next
      );
    }


    // ======================================
    // Mouse drag
    // ======================================

    track.addEventListener(
      'mousedown',
      onDragStart
    );


    document.addEventListener(
      'mousemove',
      onDragMove
    );


    document.addEventListener(
      'mouseup',
      onDragEnd
    );


    // ======================================
    // Touch
    // ======================================

    track.addEventListener(
      'touchstart',
      onDragStart,
      {
        passive: true
      }
    );


    track.addEventListener(
      'touchmove',
      onDragMove,
      {
        passive: false
      }
    );


    track.addEventListener(
      'touchend',
      onDragEnd,
      {
        passive: true
      }
    );


    track.addEventListener(
      'touchcancel',
      function() {

        if (!isDragging) {
          return;
        }


        isDragging = false;


        track.classList.remove(
          'is-dragging'
        );


        render(true);
      },
      {
        passive: true
      }
    );


    // ======================================
    // Resize
    // ======================================

    window.addEventListener(
      'resize',
      handleResize
    );


    // ======================================
    // Keyboard
    // ======================================

    document.addEventListener(
      'keydown',
      function(e) {

        if (
          e.target.tagName === 'INPUT' ||
          e.target.tagName === 'TEXTAREA'
        ) {
          return;
        }


        if (
          e.key === 'ArrowLeft'
        ) {
          e.preventDefault();

          prev();

        } else if (
          e.key === 'ArrowRight'
        ) {
          e.preventDefault();

          next();
        }
      }
    );
  }


  // ========================================
  // Start
  // ========================================

  if (
    document.readyState ===
    'loading'
  ) {
    document.addEventListener(
      'DOMContentLoaded',
      init
    );
  } else {
    init();
  }

})();
console.log("merch works");





// ========================================
// MOBILE MENU (бургер)
// ========================================

(function() {
  'use strict';

  // === DOM refs ===
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.mobile-menu');
  const overlay = menu ? menu.querySelector('.mobile-menu__overlay') : null;
  const closeBtn = menu ? menu.querySelector('.mobile-menu__close') : null;
  const menuLinks = menu ? menu.querySelectorAll('.mobile-menu__link') : [];

  // === Функции меню ===
  function openMenu() {
    if (!menu || !burger) return;
    menu.classList.add('is-active');
    burger.classList.add('is-active');
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!menu || !burger) return;
    menu.classList.remove('is-active');
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (menu && menu.classList.contains('is-active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // === Events меню ===
  if (burger) {
    burger.addEventListener('click', toggleMenu);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  if (menuLinks.length > 0) {
    menuLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Если ссылка ведёт на попап (#about-popup) — не закрываем меню, открываем попап
        if (targetId === '#about-popup') {
          e.preventDefault();
          closeMenu();
          openPopup();
          return;
        }
        
        // Обычные якоря — скроллим
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
        closeMenu();
      });
    });
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('is-active')) {
      closeMenu();
    }
  });

  let resizeTimeout = null;
  window.addEventListener('resize', function() {
    if (resizeTimeout) {
      cancelAnimationFrame(resizeTimeout);
    }
    resizeTimeout = requestAnimationFrame(function() {
      if (window.innerWidth > 1200 && menu && menu.classList.contains('is-active')) {
        closeMenu();
      }
      resizeTimeout = null;
    });
  });
})();

console.log("mobile menu works");










  // ========================================
  // POPUP (открытие по ссылке "Об авторе")
  // ========================================

  const popup = document.querySelector('.popup');
  const popupOverlay = popup ? popup.querySelector('.popup__overlay') : null;
  const popupClose = popup ? popup.querySelector('.popup__close') : null;
  const popupLinks = document.querySelectorAll('.js-open-popup');

  function openPopup() {
    if (!popup) return;
    popup.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    if (!popup) return;
    popup.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  // === Ссылки "Об авторе" — открываем попап ===
  if (popupLinks.length > 0) {
    popupLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        openPopup();
      });
    });
  }

  // === Закрытие попапа ===
  if (popupClose) {
    popupClose.addEventListener('click', closePopup);
  }

  if (popupOverlay) {
    popupOverlay.addEventListener('click', closePopup);
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && popup && popup.classList.contains('is-active')) {
      closePopup();
    }
  });











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