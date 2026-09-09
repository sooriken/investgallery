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
      
      // Переключаем класс на wrapper
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





// feedback.js
document.querySelector('.feedback__form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const form = this;
  const submitBtn = form.querySelector('.feedback__submit');
  const originalText = submitBtn.textContent;
  
  // Блокируем кнопку
  submitBtn.textContent = 'Отправка...';
  submitBtn.disabled = true;
  
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      form.reset();
      submitBtn.textContent = 'Отправлено!';
    } else {
      alert('Что-то пошло не так. Попробуйте ещё раз.');
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  })
  .catch(() => {
    alert('Ошибка отправки. Попробуйте ещё раз.');
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
});



















// ========================================
// LANGUAGE TOGGLE
// ========================================

(function() {
  'use strict';

  // === Translations ===
  const translations = {
    ru: {
      header: {
        nav: ['Интерьер', 'Концепция', 'Признание', 'Работы', 'Коллекционерам', 'Об авторе', 'Заказ']
      },
      mobile: {
        nav: ['Интерьер', 'Концепция', 'Признание', 'Работы', 'Коллекционерам', 'Об авторе', 'Заказ'],
        contacts: ['info@investme.ru', '@investme']
      },
      hero: {
        title: 'The Magical Shine<br>of Financial Bubbles',
        subtitle: 'Мировая экономика как объект искусства',
        button: 'Вход в галерею'
      },
      interier: {
        title: 'Искусство в интерьере',
        subtitle: 'Картины органично интегрируются в архитектурную среду, становясь смысловым центром пространства'
      },
      concept: {
        title: 'Философия проекта',
        quote: '«Рынок акций безумен», — Уоррен Баффет.',
        text: [
          'Проект «The Magical Shine of Financial Bubbles» исследует, как сухая математика рынков трансформируется в иррациональную человеческую драму. Это не иллюстрация экономики, а перевод её на язык визуальной метафоры.',
          'На пересечении искусства, психологии и экономической истории создаются объекты, фиксирующие архитектуру человеческих желаний — от Тюльпаномании XVII века до цифровой эфемерности Биткоина. Это искусство для тех, кто ищет интеллектуальную глубину в интерьере.'
        ],
        manifest: 'Манифест выставки',
        manifest_text: [
          'Фондовый рынок это загадка, одновременно сложная, но в тоже время простая. Это параллельный мир - зеркальная версия нашего мира, где можно инвестировать в будущее. Он никогда не бывает очевиден и вводит в заблуждение большинство людей. Фондовый рынок - это его участники - это живой, дышащий, голодный организм, который не остановить. Он проник в нашу реальность, в еду на вашем столе, в ваш дом - он везде. Все что угодно можно купить или продать. Только фондовый рынок меняет реальный мир и когда кто-то нарушает правила, обманывает рынок, страдают обычные люди. Фантазии людей о богатстве и деньгах безграничны последствия реальны. Пространство между вымыслом и реальностью — это место, где формируются экономические пузыри. Воздух страхов и надежд заполняет это пространство.',
          'Люди во все времена мечтают о волшебном рецепте богатства, магическом способе, который поможет решить все их беды. В такой ситуации продавать красивую легенду о великолепно идущей торговле невероятно легко. Когда спекуляции, ожидания и невежество сталкиваются, создавая идеальный шторм иррационального финансового изобилия возникает удивительное по своим масштабам и психологии явление - Экономический пузырь. Этот проект впервые объединяет искусство и экономику, он показывает графики самых ярких финансовых пузырей в истории фондового рынка, в поле той природы, в которой они возникли, используя визуальный язык искусства. Окружая график живописью вдохновивших автора контекстов времени и места экономических аномалий. Проект призван показать, что за острой кривой каждого графика, с его взлетом и падением, стоят человеческие судьбы, выбор и разрушенные надежды реальных людей. Ведь пузыри всегда лопаются - это их природа.'
        ],
        expand: 'Читать далее'
      },
      provenance: {
        title: 'Экспозиция и признание',
        intro: 'Проект получил экспертное признание и прошёл проверку институциональными площадками.',
        items: [
          { label: 'Медиа-присутствие', text: 'Освещение в прайм-тайм на федеральных каналах и публикация в ведущих профильных изданиях.' },
          { label: 'Экспертный совет', text: 'Признан профессиональными искусствоведами' },
          { label: 'Аудитория', text: 'Более 2 000 посетителей на знаковых мероприятиях.' },
          { label: 'Философия рынка', text: 'Статья Артёма Заренкова о визуальной метафоре экономических пузырей в пространстве современного искусства.' }
        ]
      },
      works: {
        title: 'Избранные работы',
        materials: '*Цена на репродукции зависит от её размера.',
        original: 'Оригинал',
        reproduction: 'Репродукция',
        button: 'Заказать',
        badge: 'Диптих',
        series: {
          benjamin: 'Benjamin',
          tulipomania: 'Tulip Mania',
          astronaut: 'Astronaut',
          bitcoin: 'BTC',
          bull1: 'Wall Street / Bull',
          bull2: 'Wall Street / Bull 2',
          wallstreetbets: 'Wallstreetbets',
          depression: 'Great Depression. Beginning',
          jcoin: 'J Coin',
          ginger1: 'Ginger 1',
          ginger2: 'Ginger 2'
        },
        price_labels: {
          original: 'Оригинал',
          reproduction: 'Репродукция',
          archival: 'Архивная галерейная печать + пластификация (способ премиального оформления снимков, при котором распечатанное изображение помещают между прозрачным акриловым стеклом спереди и прочной алюминиевой панелью сзади). Размер 700х900 мм'
        }
      },
      brand: {
        title: 'Живое искусство',
        registered: 'InvestMe — зарегистрированный товарный знак. Все произведения имеют сертификаты подлинности.'
      },
      merch: {
        title: 'Дизайн',
        subtitle: 'Ограниченная коллекция с принтами картин InvestMe',
        button: 'Заказать',
        types: {
          tshirt: 'Футболка',
          cap: 'Кепка',
          mask: 'Маска',
          tote: 'Шоппер'
        },
        items: {
          bitcoin: 'Биткоин',
          benjamin: 'Бенджамин',
          dev: 'Dev',
          astronaut: 'Астронавт'
        },
        descriptions: {
          bitcoin: 'Хлопок 100%',
          benjamin: 'Хлопок 100%, принт на груди',
          dev: 'Хлопок 100%, принт на спине',
          astronaut: 'Хлопок 100%, оверсайз'
        }
      },
      acquisition: {
        title: 'Коллекционерам и Дизайнерам',
        intro: 'Арт-дизайн для интерьеров. Под брендом INVESTME ART DESIGN создаются объекты, адаптируемые под архитектурное пространство любого масштаба.',
        options: [
          { title: '· Оригиналы', text: 'Уникальные полотна из выставочной серии. Каждая работа существует в единственном экземпляре или лимитированном тираже с сертификацией.' },
          { title: '· Адаптация', text: 'Возможность изменения формата и масштабирования работ под конкретный интерьерный запрос без потери художественной ценности.' },
          { title: '· Сотрудничество', text: 'Открытость к сотрудничеству с архитекторами и дизайнерами интерьеров. Индивидуальные условия подбора и интеграции искусства в проект.' }
        ],
        button: 'Запросить каталог'
      },
      feedback: {
        title: 'Оформить заказ',
        subtitle: 'Ограниченный тираж. Каждое произведение — 1000 экземпляров с сертификатом подлинности.',
        name: 'Имя',
        phone: 'Телефон',
        telegram: 'Telegram',
        artwork: 'Произведение',
        size: 'Размер',
        consent_html: 'Я принимаю условия&nbsp;<a href="pages/privacy.html" target="_blank" class="feedback__link">обработки персональных данных</a>',
        submit: 'Отправить запрос',
        placeholder: {
          name: 'Ваше имя',
          phone: '+7 (999) 000-00-00',
          telegram: '@username',
          artwork: 'Выберите работу'
        },
        sizes: ['S', 'M', 'L', 'Оригинал'],
        artworks: [
          'Benjamin',
          'Wall Street Bull (диптих)',
          'Tulip Mania',
          'Mississippi Company',
          'Железнодорожная лихорадка',
          'South Sea Company',
          'Великая депрессия. Начало',
          'Wallstreetbets',
          'Wallstreetbets. Алмазные руки',
          'Космонавт',
          'Bitcoin',
          'J Coin',
          'Имбирь (диптих)'
        ]
      },
      footer: {
        description: 'Зарегистрированный бренд. Лимитированные репродукции с сертификатами.',
        copy: '© 2026 InvestMe. Все права защищены.',
        privacy: 'Политика конфиденциальности',
        consent: 'Согласие на обработку данных'
      }
    },
    en: {
      header: {
        nav: ['Interior', 'Concept', 'Recognition', 'Works', 'Collectors', 'About', 'Order']
      },
      mobile: {
        nav: ['Interior', 'Concept', 'Recognition', 'Works', 'Collectors', 'About', 'Order'],
        contacts: ['info@investme.ru', '@investme']
      },
      hero: {
        title: 'The Magical Shine<br>of Financial Bubbles',
        subtitle: 'Global economy as an art object',
        button: 'Enter Gallery'
      },
      interier: {
        title: 'Art in Interior',
        subtitle: 'Paintings organically integrate into architectural environments, becoming the semantic center of space'
      },
      concept: {
        title: 'Project Philosophy',
        quote: '«The stock market is crazy», — Warren Buffett.',
        text: [
          'The project «The Magical Shine of Financial Bubbles» explores how dry market mathematics transforms into irrational human drama. This is not an illustration of economics, but a translation into the language of visual metaphor.',
          'At the intersection of art, psychology and economic history, objects are created that capture the architecture of human desires — from the Tulipomania of the 17th century to the digital ephemerality of Bitcoin. This is art for those seeking intellectual depth in interiors.'
        ],
        manifest: 'Exhibition Manifesto',
        manifest_text: [
          'The stock market is a mystery, simultaneously complex, yet simple. It is a parallel world — a mirror version of our world where you can invest in the future. It is never obvious and misleads most people. The stock market is its participants — it is a living, breathing, hungry organism that cannot be stopped. It has penetrated our reality, into the food on your table, into your home — it is everywhere. Anything can be bought or sold. Only the stock market changes the real world, and when someone breaks the rules, deceives the market, ordinary people suffer. People\'s fantasies about wealth and money are limitless, but the consequences are real. The space between fiction and reality is where economic bubbles form. The air of fears and hopes fills this space.',
          'Throughout history, people have dreamed of a magical recipe for wealth, a magical way that will solve all their problems. In such a situation, selling a beautiful legend about splendidly going trade is incredibly easy. When speculation, expectations and ignorance collide, creating a perfect storm of irrational financial abundance, an amazing phenomenon arises in its scale and psychology — the Economic Bubble. This project for the first time unites art and economics, it shows the graphs of the brightest financial bubbles in the history of the stock market, in the field of the nature in which they arose, using the visual language of art. Surrounding the graph with painting inspired by the contexts of time and place of economic anomalies. The project is designed to show that behind the sharp curve of each graph, with its rise and fall, there are human destinies, choices and destroyed hopes of real people. After all, bubbles always burst — that is their nature.'
        ],
        expand: 'Read more'
      },
      provenance: {
        title: 'Exhibition & Recognition',
        intro: 'The project has received expert recognition and has been verified by institutional platforms.',
        items: [
          { label: 'Media Presence', text: 'Prime-time coverage on federal channels and publications in leading industry media.' },
          { label: 'Expert Council', text: 'Recognized by professional art critics' },
          { label: 'Audience', text: 'Over 2,000 visitors at landmark events.' },
          { label: 'Market Philosophy', text: 'Article by Artyom Zarenkov on the visual metaphor of economic bubbles in contemporary art.' }
        ]
      },
      works: {
        title: 'Featured Works',
        materials: '*The price of reproductions depends on size.',
        original: 'Original',
        reproduction: 'Reproduction',
        button: 'Order',
        badge: 'Diptych',
        series: {
          benjamin: 'Benjamin',
          tulipomania: 'Tulip Mania',
          astronaut: 'Astronaut',
          bitcoin: 'BTC',
          bull1: 'Wall Street / Bull',
          bull2: 'Wall Street / Bull 2',
          wallstreetbets: 'Wallstreetbets',
          depression: 'Great Depression. Beginning',
          jcoin: 'J Coin',
          ginger1: 'Ginger 1',
          ginger2: 'Ginger 2'
        },
        price_labels: {
          original: 'Original',
          reproduction: 'Reproduction',
          archival: 'Archival gallery print + lamination (a premium method of photo finishing in which the printed image is placed between transparent acrylic glass on the front and a durable aluminum panel on the back). Size 700x900 mm'
        }
      },
      brand: {
        title: 'Living Art',
        registered: 'InvestMe is a registered trademark. All works have authenticity certificates.'
      },
      merch: {
        title: 'Design',
        subtitle: 'Limited collection with InvestMe prints',
        button: 'Order',
        types: {
          tshirt: 'T-shirt',
          cap: 'Cap',
          mask: 'Mask',
          tote: 'Tote bag'
        },
        items: {
          bitcoin: 'Bitcoin',
          benjamin: 'Benjamin',
          dev: 'Dev',
          astronaut: 'Astronaut'
        },
        descriptions: {
          bitcoin: '100% Cotton',
          benjamin: '100% Cotton, front print',
          dev: '100% Cotton, back print',
          astronaut: '100% Cotton, oversized'
        }
      },
      acquisition: {
        title: 'For Collectors & Designers',
        intro: 'Art design for interiors. Under the INVESTME ART DESIGN brand, objects are created that adapt to architectural spaces of any scale.',
        options: [
          { title: '· Originals', text: 'Unique canvases from the exhibition series. Each work exists in a single copy or limited edition with certification.' },
          { title: '· Adaptation', text: 'Ability to change format and scale works for specific interior needs without losing artistic value.' },
          { title: '· Collaboration', text: 'Open to collaboration with architects and interior designers. Individual terms for selecting and integrating art into projects.' }
        ],
        button: 'Request catalog'
      },
      feedback: {
        title: 'Place an Order',
        subtitle: 'Limited edition. Each work — 1000 copies with authenticity certificate.',
        name: 'Name',
        phone: 'Phone',
        telegram: 'Telegram',
        artwork: 'Artwork',
        size: 'Size',
        consent_html: 'I accept the terms of&nbsp;<a href="pages/privacy.html" target="_blank" class="feedback__link">personal data processing</a>',
        submit: 'Send request',
        placeholder: {
          name: 'Your name',
          phone: '+7 (999) 000-00-00',
          telegram: '@username',
          artwork: 'Select artwork'
        },
        sizes: ['S', 'M', 'L', 'Original'],
        artworks: [
          'Benjamin',
          'Wall Street Bull (diptych)',
          'Tulip Mania',
          'Mississippi Company',
          'Railway Fever',
          'South Sea Company',
          'Great Depression. Beginning',
          'Wallstreetbets',
          'Wallstreetbets. Diamond Hands',
          'Cosmonaut',
          'Bitcoin',
          'J Coin',
          'Ginger (diptych)'
        ]
      },
      footer: {
        description: 'Registered brand. Limited edition reproductions with certificates.',
        copy: '© 2026 InvestMe. All rights reserved.',
        privacy: 'Privacy Policy',
        consent: 'Data Processing Consent'
      }
    }
  };

  // === DOM refs ===
  const langBtns = document.querySelectorAll('.header__lang-btn');
  let currentLang = localStorage.getItem('lang') || 'ru';

  // === Функция получения значения по ключу ===
  function getValueByPath(obj, path) {
    const keys = path.split('.');
    let result = obj;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var match = key.match(/^(.+)\[(\d+)\]$/);
      if (match) {
        var arrayKey = match[1];
        var index = parseInt(match[2], 10);
        if (result && result[arrayKey] && Array.isArray(result[arrayKey])) {
          result = result[arrayKey][index];
        } else {
          result = undefined;
          break;
        }
      } else {
        if (result && result[key] !== undefined) {
          result = result[key];
        } else {
          result = undefined;
          break;
        }
      }
    }

    return result;
  }

  // === Функция переключения ===
  function switchLanguage(lang) {
    if (!translations[lang]) return;

    const texts = translations[lang];

    // Обновляем элементы с data-i18n (обычный текст)
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      const key = el.getAttribute('data-i18n');
      let value = getValueByPath(texts, key);

      if (value === undefined || value === null) {
        value = el.innerHTML.trim() || '';
      }

      if (Array.isArray(value)) {
        value = value.join(' ');
      }

      el.innerHTML = value;
    });

    // Обновляем элементы с data-i18n-html (HTML-содержимое)
    document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
      const key = el.getAttribute('data-i18n-html');
      let value = getValueByPath(texts, key);

      if (value === undefined || value === null) {
        value = el.innerHTML.trim() || '';
      }

      el.innerHTML = value;
    });

    // Обновляем плейсхолдеры
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      const key = el.getAttribute('data-i18n-placeholder');
      let value = getValueByPath(texts, key);

      if (value === undefined || value === null) {
        value = '';
      }

      el.placeholder = value;
    });

    // Обновляем активный класс у кнопок
    langBtns.forEach(function(btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('lang', lang);
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
  }

  // === Events ===
  langBtns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      if (lang === currentLang) return;
      switchLanguage(lang);
    });
  });

  // === Init ===
  if (localStorage.getItem('lang')) {
    const savedLang = localStorage.getItem('lang');
    if (translations[savedLang]) {
      switchLanguage(savedLang);
      return;
    }
  }

  const browserLang = navigator.language.slice(0, 2);
  if (translations[browserLang]) {
    switchLanguage(browserLang);
  } else {
    switchLanguage('ru');
  }

})();