// ---------- ДАНІ ДЛЯ СЛАЙДЕРА (ВАШІ РЕАЛЬНІ ПРОЄКТИ) ----------
const projects = [
    {
        title: "Стоматологія SmileCare",
        description: "Сучасний сайт із онлайн-записом, інтеграцією Google Maps, адаптивний дизайн.",
        tech: ["WordPress", "Elementor", "PHP"],
        image: "https://placehold.co/600x400/eef2ff/2563eb?text=Stomatology+Site",
        link: "https://example.com/stomatology"
    },
    {
        title: "Beauty-бар LAVENDER",
        description: "Лендінг із плавними анімаціями, формою бронювання та Instagram-стрічкою.",
        tech: ["HTML/CSS", "JS", "Formspree"],
        image: "https://placehold.co/600x400/f3e8ff/7c3aed?text=Beauty+Landing",
        link: "https://example.com/lavender"
    },
    {
        title: "Інтернет-магазин квітів",
        description: "Каталог, кошик, оплата LiqPay, адмін-панель для додавання товарів.",
        tech: ["WordPress", "WooCommerce", "Custom CSS"],
        image: "https://placehold.co/600x400/fef3c7/d97706?text=Flowers+Shop",
        link: "https://example.com/flower-shop"
    },
    {
        title: "Сайт-портфоліо архітектора",
        description: "Галерея проєктів, фільтрація робіт, форма замовлення консультації.",
        tech: ["HTML/CSS", "JavaScript", "AOS анімації"],
        image: "https://placehold.co/600x400/e0f2fe/0284c7?text=Architect+Portfolio",
        link: "https://example.com/architect"
    }
];

// ---------- ДАНІ ДЛЯ СЕРВІСІВ ----------
const services = [
    {
        icon: "🌐",
        title: "Сайт-візитка",
        description: "3-5 сторінок, форма зв'язку, адаптивний дизайн. Ідеально для малого бізнесу.",
        price: "від 3000 грн"
    },
    {
        icon: "🚀",
        title: "Лендінг",
        description: "Односторінковий сайт для запуску продукту або акції. Висока конверсія.",
        price: "від 4500 грн"
    },
    {
        icon: "🏪",
        title: "Інтернет-магазин",
        description: "Каталог, кошик, оплата. Повноцінна платформа для продажів.",
        price: "від 12000 грн"
    },
    {
        icon: "⚙️",
        title: "Підтримка",
        description: "Щомісячне оновлення, бекапи, технічний супровід вашого сайту.",
        price: "від 1000 грн/міс"
    }
];

// ---------- ДАНІ ДЛЯ СОЦІАЛЬНИХ МЕРЕЖ ----------
const socialLinks = [
    { name: "Telegram", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "GitHub", url: "https://github.com/Kolya-f" }
];

// ---------- ЗМІННІ ДЛЯ СЛАЙДЕРА ----------
let currentIndex = 0;
let autoPlayInterval;
const track = document.getElementById('sliderTrack');
const dotsContainer = document.getElementById('sliderDots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const highlightSpan = document.getElementById('slideHighlight');

// ---------- ФУНКЦІЯ ПОБУДОВИ СЛАЙДЕРА ----------
function buildSlider() {
    if (!track) return;
    track.innerHTML = '';
    projects.forEach((proj, idx) => {
        const slide = document.createElement('div');
        slide.className = 'slide-card';
        slide.innerHTML = `
            <img src="${proj.image}" alt="${proj.title}" loading="lazy">
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <div>
                ${proj.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
            </div>
            <a href="${proj.link}" target="_blank" rel="noopener noreferrer" class="slide-link">
                Переглянути сайт 🔗
            </a>
        `;
        track.appendChild(slide);
    });
    updateDots();
    updateHighlight();
}

// ---------- ОНОВЛЕННЯ КРАПОК (DOTS) ----------
function updateDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    projects.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });
}

// ---------- ОНОВЛЕННЯ ТЕКСТУ ХАЙЛАЙТУ ----------
function updateHighlight() {
    if (highlightSpan) {
        highlightSpan.textContent = `⭐ Зараз дивитесь: ${projects[currentIndex].title} — натисніть на картку, щоб відкрити живий сайт.`;
    }
}

// ---------- ПЕРЕХІД ДО КОНКРЕТНОГО СЛАЙДУ ----------
function goToSlide(index) {
    if (index < 0) index = projects.length - 1;
    if (index >= projects.length) index = 0;
    currentIndex = index;
    const offset = -currentIndex * 100;
    if (track) {
        track.style.transform = `translateX(${offset}%)`;
    }
    updateDots();
    updateHighlight();
    resetAutoPlay();
}

// ---------- НАСТУПНИЙ / ПОПЕРЕДНІЙ СЛАЙД ----------
function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

// ---------- АВТОМАТИЧНЕ ПЕРЕМИКАННЯ ----------
function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function resetAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    startAutoPlay();
}

// ---------- РЕНДЕР СЕРВІСІВ ----------
function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;
    container.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="price">${service.price}</div>
        </div>
    `).join('');
}

// ---------- РЕНДЕР СОЦІАЛЬНИХ МЕРЕЖ ----------
function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;
    container.innerHTML = socialLinks.map(social => `
        <a href="${social.url}" target="_blank" rel="noopener noreferrer">${social.name}</a>
    `).join('');
}

// ---------- ВСТАНОВЛЕННЯ ПОТОЧНОГО РОКУ В ФУТЕРІ ----------
function setCurrentYear() {
    const footerText = document.getElementById('footerText');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `© ${currentYear} Kolya-f | Створення сайтів під ключ`;
    }
}

// ---------- ТЕКСТ В КОНТАКТАХ ----------
function setContactText() {
    const contactText = document.getElementById('contactText');
    if (contactText) {
        contactText.innerHTML = 'Готові до співпраці? Просто напишіть – обговоримо ваш проєкт.';
    }
}

// ---------- ПЛАВНИЙ СКРОЛ ДЛЯ НАВІГАЦІЇ ----------
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ---------- ЗУПИНКА АВТОПРОКРУТКИ ПРИ НАВЕДЕННІ НА СЛАЙДЕР ----------
function setupSliderPauseOnHover() {
    const sliderContainer = document.querySelector('.slider-container');
    if (!sliderContainer) return;
    
    sliderContainer.addEventListener('mouseenter', () => {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        if (!autoPlayInterval) {
            startAutoPlay();
        }
    });
}

// ---------- ГОЛОВНА ФУНКЦІЯ ІНІЦІАЛІЗАЦІЇ ----------
document.addEventListener('DOMContentLoaded', () => {
    // Рендер основних секцій
    renderServices();
    renderSocialLinks();
    setCurrentYear();
    setContactText();
    setupSmoothScroll();
    
    // Побудова слайдера
    buildSlider();
    
    // Запуск автопрокрутки (тільки якщо є слайди)
    if (projects.length > 0) {
        startAutoPlay();
        setupSliderPauseOnHover();
    }
    
    // Додаємо обробники для кнопок слайдера
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSlide);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSlide);
    }
    
    // Лог для перевірки
    console.log('Сайт успішно завантажено! Слайдер містить', projects.length, 'проєктів');
});
