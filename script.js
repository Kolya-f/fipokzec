// Дані для сервісів
const services = [
    {
        icon: "🌐",
        title: "Сайт-візитка",
        description: "3-5 сторінок, форма зв'язку, адаптивний дизайн. Ідеально для малого бізнесу.",
        features: ["Адаптивний дизайн", "Форма зв'язку", "SEO-оптимізація", "Соціальні мережі"],
        price: "від 3 000 грн"
    },
    {
        icon: "🚀",
        title: "Лендінг",
        description: "Односторінковий сайт для запуску продукту або акції. Висока конверсія.",
        features: ["Анімації", "Форма захоплення", "Інтеграція з CRM", "Аналітика"],
        price: "від 4 500 грн"
    },
    {
        icon: "🏪",
        title: "Інтернет-магазин",
        description: "Каталог, кошик, оплата. Повноцінна платформа для продажів.",
        features: ["Каталог товарів", "Кошик та оплата", "Адмін-панель", "Звіти"],
        price: "від 12 000 грн"
    },
    {
        icon: "⚙️",
        title: "Підтримка",
        description: "Щомісячне оновлення, бекапи, технічний супровід вашого сайту.",
        features: ["Щомісячні оновлення", "Резервні копії", "Техпідтримка 24/7", "Безпека"],
        price: "від 1 000 грн/міс"
    }
];

// Дані для портфоліо
const portfolioItems = [
    {
        title: "Стоматологія SmileCare",
        description: "Сучасний сайт із онлайн-записом, інтеграцією Google Maps.",
        image: "🏥",
        tech: ["WordPress", "Elementor"],
        link: "#",
        category: "wordpress"
    },
    {
        title: "Beauty-бар LAVENDER",
        description: "Лендінг із плавними анімаціями та Instagram-стрічкою.",
        image: "💅",
        tech: ["HTML/CSS", "JS"],
        link: "#",
        category: "landing"
    },
    {
        title: "Інтернет-магазин квітів",
        description: "Каталог, кошик, оплата LiqPay, адмін-панель.",
        image: "🌸",
        tech: ["WooCommerce", "WordPress"],
        link: "#",
        category: "ecommerce"
    },
    {
        title: "Фітнес-клуб Energy",
        description: "Сайт з онлайн-записом на тренування та розкладом.",
        image: "💪",
        tech: ["WordPress", "Custom CSS"],
        link: "#",
        category: "wordpress"
    },
    {
        title: "Архітектурне бюро",
        description: "Портфоліо проєктів з фільтрацією та 3D-візуалізацією.",
        image: "🏛️",
        tech: ["HTML/CSS", "JS"],
        link: "#",
        category: "landing"
    },
    {
        title: "Магазин меблів",
        description: "Повноцінний інтернет-магазин з кошиком та оплатою.",
        image: "🛋️",
        tech: ["WooCommerce"],
        link: "#",
        category: "ecommerce"
    }
];

// Дані для відгуків
const reviews = [
    {
        text: "Коля створив для нас сайт-візитку. Все зроблено якісно, швидко та з урахуванням всіх побажань. Рекомендую!",
        author: "Ірина Петренко",
        position: "Власниця салону краси"
    },
    {
        text: "Дуже задоволений роботою! Інтернет-магазин працює ідеально, клієнти залишають позитивні відгуки.",
        author: "Олександр Коваль",
        position: "Підприємець"
    },
    {
        text: "Професійний підхід, увага до деталей та відмінна підтримка після запуску. Дякую!",
        author: "Марія Шевченко",
        position: "Маркетолог"
    }
];

// Дані для FAQ
const faqItems = [
    {
        question: "Скільки часу займає створення сайту?",
        answer: "Терміни залежать від складності проєкту. Сайт-візитка — 5-7 днів, лендінг — 7-10 днів, інтернет-магазин — 14-21 день."
    },
    {
        question: "Чи допомагаєте з наповненням контентом?",
        answer: "Так, допомагаю з підбором зображень, написанням текстів та налаштуванням SEO."
    },
    {
        question: "Чи можна буде самостійно редагувати сайт?",
        answer: "Так, я навчаю клієнтів працювати з адмін-панеллю. Ви зможете самостійно змінювати тексти, фото та інше."
    },
    {
        question: "Яка гарантія на роботу?",
        answer: "Надаю гарантію 3 місяці на всі види робіт. Безкоштовно виправляю помилки, якщо вони виникли з моєї вини."
    },
    {
        question: "Чи робите техпідтримку після запуску?",
        answer: "Так, пропоную пакети техпідтримки: від щомісячних оновлень до повного адміністрування сайту."
    },
    {
        question: "Як відбувається оплата?",
        answer: "Передоплата 50% перед стартом робіт, решта — після завершення проєкту. Працюю офіційно з договором."
    }
];

// Соціальні мережі
const socialLinks = [
    { name: "Telegram", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "GitHub", url: "https://github.com/Kolya-f" },
    { name: "LinkedIn", url: "#" }
];

// Рендер сервісів
function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;
    container.innerHTML = services.map(service => `
        <div class="service-card">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <ul class="service-features">
                ${service.features.map(f => `<li>✓ ${f}</li>`).join('')}
            </ul>
            <div class="price">${service.price}</div>
            <a href="#contacts" class="btn">Замовити</a>
        </div>
    `).join('');
}

// Рендер портфоліо
function renderPortfolio(filter = "all") {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;
    const filtered = filter === "all" ? portfolioItems : portfolioItems.filter(item => item.category === filter);
    container.innerHTML = filtered.map(item => `
        <div class="portfolio-item">
            <div class="portfolio-image">${item.image}</div>
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="portfolio-tech">
                    ${item.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
                <a href="${item.link}" class="portfolio-link">Переглянути →</a>
            </div>
        </div>
    `).join('');
}

// Фільтри портфоліо
function setupFilters() {
    const filters = document.querySelectorAll('.filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', () => {
            filters.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolio(btn.dataset.filter);
        });
    });
}

// Рендер відгуків
function renderReviews() {
    const container = document.getElementById('reviewsGrid');
    if (!container) return;
    container.innerHTML = reviews.map(review => `
        <div class="review-card">
            <div class="review-text">“${review.text}”</div>
            <div class="review-author">${review.author}</div>
            <div class="review-position">${review.position}</div>
        </div>
    `).join('');
}

// Рендер FAQ
function renderFAQ() {
    const container = document.getElementById('faqGrid');
    if (!container) return;
    container.innerHTML = faqItems.map(faq => `
        <div class="faq-item">
            <div class="faq-question">❓ ${faq.question}</div>
            <div class="faq-answer">${faq.answer}</div>
        </div>
    `).join('');
}

// Рендер соціальних мереж
function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;
    container.innerHTML = socialLinks.map(link => `
        <a href="${link.url}" target="_blank">${link.name}</a>
    `).join('');
}

// Футер
function setCurrentYear() {
    const footer = document.getElementById('footerText');
    if (footer) footer.innerHTML = `© ${new Date().getFullYear()} Kolya-f | Створення сайтів під ключ`;
}

// Мобільне меню
function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');
    if (btn && nav) {
        btn.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderPortfolio();
    renderReviews();
    renderFAQ();
    renderSocialLinks();
    setCurrentYear();
    setupFilters();
    setupMobileMenu();
    
    // Додаємо стиль для мобільного меню
    const style = document.createElement('style');
    style.textContent = `
        .nav-links.show {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(10, 10, 15, 0.95);
            backdrop-filter: blur(12px);
            padding: 20px;
            gap: 16px;
            text-align: center;
        }
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('Сайт успішно завантажено!');
});
