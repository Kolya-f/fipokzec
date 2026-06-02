const services = [
    { icon: "🌐", title: "Сайт-візитка", description: "3-5 сторінок, форма зв'язку, адаптивний дизайн.", features: ["Адаптивний дизайн", "Форма зв'язку", "SEO-оптимізація"], price: "від 3 000 грн" },
    { icon: "🚀", title: "Лендінг", description: "Односторінковий сайт для запуску продукту.", features: ["Анімації", "Форма захоплення", "Аналітика"], price: "від 4 500 грн" },
    { icon: "🏪", title: "Інтернет-магазин", description: "Каталог, кошик, оплата. Повноцінна платформа для продажів.", features: ["Каталог товарів", "Кошик та оплата", "Адмін-панель"], price: "від 12 000 грн" },
    { icon: "⚙️", title: "Підтримка", description: "Щомісячне оновлення, бекапи, технічний супровід.", features: ["Оновлення", "Бекапи", "Техпідтримка 24/7"], price: "від 1 000 грн/міс" }
];
const portfolioItems = [
    { title: "Стоматологія SmileCare", image: "🏥", tech: ["WordPress"], link: "#", category: "wordpress" },
    { title: "Beauty-бар LAVENDER", image: "💅", tech: ["HTML/CSS", "JS"], link: "#", category: "landing" },
    { title: "Інтернет-магазин квітів", image: "🌸", tech: ["WooCommerce"], link: "#", category: "ecommerce" },
    { title: "Фітнес-клуб Energy", image: "💪", tech: ["WordPress"], link: "#", category: "wordpress" }
];
const reviews = [
    { text: "Коля створив для нас сайт-візитку. Все зроблено якісно, швидко.", author: "Ірина Петренко", position: "Власниця салону" },
    { text: "Дуже задоволений роботою! Інтернет-магазин працює ідеально.", author: "Олександр Коваль", position: "Підприємець" }
];
const faqItems = [
    { question: "Скільки часу займає створення сайту?", answer: "Сайт-візитка — 5-7 днів, лендінг — 7-10 днів, магазин — 14-21 день." },
    { question: "Чи можна буде самостійно редагувати сайт?", answer: "Так, я навчаю клієнтів працювати з адмін-панеллю." }
];
const socialLinks = [
    { name: "Telegram", url: "#" }, { name: "Instagram", url: "#" }, 
    { name: "GitHub", url: "https://github.com/Kolya-f" }, { name: "LinkedIn", url: "#" }
];

function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (!container) return;
    container.innerHTML = services.map(s => `
        <div class="service-card fade-up"><div class="service-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.description}</p><ul class="service-features" style="list-style:none;padding-left:0">${s.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul><div class="price">${s.price}</div><a href="#contacts" class="btn">Замовити</a></div>
    `).join('');
}
function renderPortfolio(filter = "all") {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;
    const filtered = filter === "all" ? portfolioItems : portfolioItems.filter(i => i.category === filter);
    container.innerHTML = filtered.map(i => `
        <div class="portfolio-item fade-up"><div class="portfolio-image" style="height:160px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:3rem">${i.image}</div><div class="portfolio-content"><h3>${i.title}</h3><div class="portfolio-tech" style="display:flex;gap:8px;margin:12px 0">${i.tech.map(t => `<span class="tech-badge" style="background:rgba(139,92,246,0.2);padding:4px 12px;border-radius:40px;font-size:0.7rem">${t}</span>`).join('')}</div><a href="${i.link}" class="portfolio-link" style="color:#fbbf24">Переглянути →</a></div></div>
    `).join('');
}
function renderReviews() {
    const container = document.getElementById('reviewsGrid');
    if (container) container.innerHTML = reviews.map(r => `<div class="review-card fade-up"><div class="review-text">“${r.text}”</div><div class="review-author" style="color:#fbbf24;margin-top:12px">${r.author}</div><div class="review-position" style="color:#94a3b8">${r.position}</div></div>`).join('');
}
function renderFAQ() {
    const container = document.getElementById('faqGrid');
    if (container) container.innerHTML = faqItems.map(f => `<div class="faq-item fade-up"><div class="faq-question" style="color:#fbbf24;font-weight:700;margin-bottom:8px">❓ ${f.question}</div><div class="faq-answer" style="color:#94a3b8">${f.answer}</div></div>`).join('');
}
function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    if (container) container.innerHTML = socialLinks.map(l => `<a href="${l.url}" target="_blank">${l.name}</a>`).join('');
}
function setCurrentYear() {
    const footer = document.getElementById('footerText');
    if (footer) footer.innerHTML = `© ${new Date().getFullYear()} fipokzec.dev | Створення сайтів під ключ`;
}

function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolio(btn.dataset.filter);
        });
    });
}
function setupActiveMenu() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });
}
function setupMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav-links');
    if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('show'));
    const style = document.createElement('style');
    style.textContent = `.nav-links.show { display: flex !important; flex-direction: column; position: absolute; top: 80px; left: 0; right: 0; background: rgba(10,10,15,0.95); backdrop-filter: blur(12px); padding: 20px; text-align: center; } @media (max-width: 768px) { .nav-links { display: none; } }`;
    document.head.appendChild(style);
}

// Анімація друку коду
function initCodeTyping() {
    const titleText = "Ваш сайт";
    const bodyText = "    Чудовий дизайн";
    let titleIndex = 0, bodyIndex = 0;
    const titleSpan = document.getElementById('typingCode');
    const bodySpan = document.getElementById('typingBody');
    const cursor = document.getElementById('cursor');
    if (!titleSpan || !bodySpan || !cursor) return;
    function typeTitle() {
        if (titleIndex < titleText.length) {
            titleSpan.textContent += titleText[titleIndex];
            titleIndex++;
            setTimeout(typeTitle, 100);
        } else {
            setTimeout(typeBody, 300);
        }
    }
    function typeBody() {
        if (bodyIndex < bodyText.length) {
            bodySpan.textContent += bodyText[bodyIndex];
            bodyIndex++;
            setTimeout(typeBody, 80);
        } else {
            cursor.style.opacity = '1';
            setInterval(() => {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }, 500);
        }
    }
    typeTitle();
}

document.addEventListener('DOMContentLoaded', () => {
    renderServices(); renderPortfolio(); renderReviews(); renderFAQ(); renderSocialLinks(); setCurrentYear();
    setupFilters(); setupActiveMenu(); setupMobileMenu(); initCodeTyping();
    console.log('Сайт fipokzec.dev успішно завантажено!');
});
