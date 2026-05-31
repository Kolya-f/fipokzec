// Дані для сервісів
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

// Дані для портфоліо
const portfolioItems = [
    {
        icon: "🏢",
        title: "Сайт клініки",
        description: "Сучасний сайт із записом онлайн, переліком послуг та галереєю.",
        category: "Медицина"
    },
    {
        icon: "🌿",
        title: "Лендінг для салону краси",
        description: "Атмосферний дизайн, інтеграція з Instagram, форма бронювання.",
        category: "Beauty"
    },
    {
        icon: "📦",
        title: "Інтернет-магазин квітів",
        description: "Каталог, кошик, оплата карткою та доставка.",
        category: "E-commerce"
    }
];

// Дані для соціальних мереж
const socialLinks = [
    { name: "Telegram", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "GitHub", url: "https://github.com/Kolya-f" }
];

// Функція для рендеру сервісів
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

// Функція для рендеру портфоліо
function renderPortfolio() {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;
    
    container.innerHTML = portfolioItems.map(item => `
        <div class="portfolio-item">
            <div class="portfolio-placeholder">${item.icon} ${item.category}</div>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}

// Функція для рендеру соціальних мереж
function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (!container) return;
    
    container.innerHTML = socialLinks.map(social => `
        <a href="${social.url}" target="_blank">${social.name}</a>
    `).join('');
}

// Функція для встановлення поточного року у футері
function setCurrentYear() {
    const footerText = document.getElementById('footerText');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `© ${currentYear} Kolya-f | Створення сайтів під ключ`;
    }
}

// Функція для тексту в контактах
function setContactText() {
    const contactText = document.getElementById('contactText');
    if (contactText) {
        contactText.innerHTML = 'Готові до співпраці? Просто напишіть – обговоримо ваш проєкт.';
    }
}

// Плавний скрол для навігації
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

// Запуск всіх функцій після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderPortfolio();
    renderSocialLinks();
    setCurrentYear();
    setContactText();
    setupSmoothScroll();
    
    // Можна додати console.log для перевірки
    console.log('Сайт успішно завантажено!');
});
