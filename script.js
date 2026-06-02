// Бібліотека різних кодів
const codeSamples = [
    {
        title: "developer@fipokzec:~/portfolio",
        code: `<span style="color:#fbbf24">&lt;!DOCTYPE html&gt;</span>\n<span style="color:#fbbf24">&lt;html&gt;</span>\n  <span style="color:#fbbf24">&lt;head&gt;</span>\n    <span style="color:#fbbf24">&lt;title&gt;</span><span style="color:#60a5fa">Сучасний Landing Page</span><span style="color:#fbbf24">&lt;/title&gt;</span>\n    <span style="color:#fbbf24">&lt;style&gt;</span>\n      <span style="color:#60a5fa">.hero</span> { <span style="color:#c084fc">background</span>: <span style="color:#60a5fa">linear-gradient(135deg, #667eea 0%, #764ba2 100%)</span>; }\n      <span style="color:#60a5fa">.btn</span> { <span style="color:#c084fc">transition</span>: <span style="color:#60a5fa">all 0.3s ease</span>; }\n    <span style="color:#fbbf24">&lt;/style&gt;</span>\n  <span style="color:#fbbf24">&lt;/head&gt;</span>\n  <span style="color:#fbbf24">&lt;body&gt;</span>\n    <span style="color:#fbbf24">&lt;div class="hero"&gt;</span>\n      <span style="color:#fbbf24">&lt;h1&gt;</span>Готовий до змін?<span style="color:#fbbf24">&lt;/h1&gt;</span>\n      <span style="color:#fbbf24">&lt;a href="#" class="btn"&gt;</span>Замовити зараз<span style="color:#fbbf24">&lt;/a&gt;</span>\n    <span style="color:#fbbf24">&lt;/div&gt;</span>\n  <span style="color:#fbbf24">&lt;/body&gt;</span>\n<span style="color:#fbbf24">&lt;/html&gt;</span>`
    },
    {
        title: "developer@fipokzec:~/react-app",
        code: `<span style="color:#fbbf24">import</span> React, { useState } <span style="color:#fbbf24">from</span> <span style="color:#60a5fa">'react'</span>;\n\n<span style="color:#fbbf24">const</span> <span style="color:#60a5fa">App</span> = () => {\n  <span style="color:#fbbf24">const</span> [count, setCount] = <span style="color:#60a5fa">useState</span>(<span style="color:#c084fc">0</span>);\n  \n  <span style="color:#fbbf24">return</span> (\n    <span style="color:#fbbf24">&lt;div&gt;</span>\n      <span style="color:#fbbf24">&lt;h1&gt;</span>Лічильник: {count}<span style="color:#fbbf24">&lt;/h1&gt;</span>\n      <span style="color:#fbbf24">&lt;button onClick={() => setCount(count + 1)}&gt;</span>+1<span style="color:#fbbf24">&lt;/button&gt;</span>\n    <span style="color:#fbbf24">&lt;/div&gt;</span>\n  );\n};\n\n<span style="color:#fbbf24">export default</span> App;`
    },
    {
        title: "developer@fipokzec:~/api-server",
        code: `<span style="color:#fbbf24">const</span> express = <span style="color:#60a5fa">require</span>(<span style="color:#60a5fa">'express'</span>);\n<span style="color:#fbbf24">const</span> app = <span style="color:#60a5fa">express</span>();\n\napp.<span style="color:#60a5fa">get</span>(<span style="color:#60a5fa">'/api/users'</span>, <span style="color:#fbbf24">async</span> (req, res) => {\n  <span style="color:#fbbf24">try</span> {\n    <span style="color:#fbbf24">const</span> users = <span style="color:#fbbf24">await</span> <span style="color:#60a5fa">User.find</span>();\n    res.<span style="color:#60a5fa">json</span>({ success: <span style="color:#fbbf24">true</span>, data: users });\n  } <span style="color:#fbbf24">catch</span>(error) {\n    res.<span style="color:#60a5fa">status</span>(<span style="color:#c084fc">500</span>).<span style="color:#60a5fa">json</span>({ error: error.message });\n  }\n});\n\napp.<span style="color:#60a5fa">listen</span>(<span style="color:#c084fc">3000</span>, () => {\n  console.<span style="color:#60a5fa">log</span>(<span style="color:#60a5fa">'Server running on port 3000'</span>);\n});`
    },
    {
        title: "developer@fipokzec:~/glassmorphism",
        code: `<span style="color:#fbbf24">&lt;style&gt;</span>\n  <span style="color:#60a5fa">.glass-card</span> {\n    <span style="color:#c084fc">background</span>: <span style="color:#60a5fa">rgba(255, 255, 255, 0.1)</span>;\n    <span style="color:#c084fc">backdrop-filter</span>: <span style="color:#60a5fa">blur(10px)</span>;\n    <span style="color:#c084fc">border-radius</span>: <span style="color:#60a5fa">24px</span>;\n    <span style="color:#c084fc">transition</span>: <span style="color:#60a5fa">transform 0.3s ease</span>;\n  }\n  <span style="color:#60a5fa">.glass-card:hover</span> {\n    <span style="color:#c084fc">transform</span>: <span style="color:#60a5fa">translateY(-10px)</span>;\n  }\n<span style="color:#fbbf24">&lt;/style&gt;</span>\n<span style="color:#fbbf24">&lt;div class="glass-card"&gt;</span>\n  <span style="color:#fbbf24">&lt;h2&gt;</span>Сучасний дизайн<span style="color:#fbbf24">&lt;/h2&gt;</span>\n  <span style="color:#fbbf24">&lt;p&gt;</span>Ефект скла та плавні анімації<span style="color:#fbbf24">&lt;/p&gt;</span>\n<span style="color:#fbbf24">&lt;/div&gt;</span>`
    }
];

let currentSampleIndex = 0;
let isTyping = false;
let currentLineIndex = 0;
let currentCharIndex = 0;
let currentLines = [];
let typingInterval = null;

const typingArea = document.getElementById('typingArea');
const cursor = document.getElementById('cursor');
const terminalTitle = document.getElementById('terminalTitle');

function getNextCodeSample() {
    const sample = codeSamples[currentSampleIndex % codeSamples.length];
    currentSampleIndex++;
    return sample;
}

function stopTyping() {
    if (typingInterval) { clearInterval(typingInterval); typingInterval = null; }
    isTyping = false;
}

function startTypingLoop() {
    stopTyping();
    const sample = getNextCodeSample();
    if (terminalTitle) terminalTitle.innerHTML = sample.title;
    const rawCode = sample.code;
    currentLines = rawCode.split(/(?=<span)/);
    currentLineIndex = 0;
    currentCharIndex = 0;
    if (typingArea) typingArea.innerHTML = '';
    isTyping = true;
    typeNextCharacter();
}

function typeNextCharacter() {
    if (!isTyping) return;
    if (currentLineIndex >= currentLines.length) {
        setTimeout(() => { startTypingLoop(); }, 4000);
        return;
    }
    const currentLine = currentLines[currentLineIndex];
    if (currentCharIndex < currentLine.length) {
        typingArea.innerHTML += currentLine[currentCharIndex];
        currentCharIndex++;
        typingInterval = setTimeout(typeNextCharacter, 15);
    } else {
        typingArea.innerHTML += '\n';
        currentLineIndex++;
        currentCharIndex = 0;
        typingInterval = setTimeout(typeNextCharacter, 30);
    }
}

// Послуги
const services = [
    { title: "Сайт-візитка", description: "3-5 сторінок, форма зв'язку, адаптивний дизайн.", features: ["Адаптивний дизайн", "Форма зв'язку", "SEO-оптимізація"], price: "5 000 грн" },
    { title: "Лендінг", description: "Односторінковий сайт для запуску продукту або акції.", features: ["Анімації", "Форма захоплення", "Аналітика"], price: "6 000 грн" },
    { title: "Інтернет-магазин", description: "Каталог, кошик, оплата. Повноцінна платформа для продажів.", features: ["Каталог товарів", "Кошик та оплата", "Адмін-панель"], price: "12 000 грн" },
    { title: "Підтримка", description: "Щомісячне оновлення, бекапи, технічний супровід.", features: ["Щомісячні оновлення", "Резервні копії", "Техпідтримка 24/7"], price: "1 000 грн/міс" },
    { title: "Доробка сайту", description: "Додавання нових функцій, сторінок, модулів до готового сайту.", features: ["Додавання сторінок", "Нові функції", "Інтеграції"], price: "2 000 грн" },
    { title: "Оновлення дизайну", description: "Рестайлінг, сучасний вигляд, покращення UX/UI.", features: ["Новий дизайн", "Адаптація", "Сучасні анімації"], price: "2 000 грн" }
];

const portfolioItems = [
    { title: "Стоматологія SmileCare", imageBg: "linear-gradient(135deg, #1e3a8a, #3b82f6)", tech: ["WordPress"], link: "#", category: "wordpress" },
    { title: "Beauty-бар LAVENDER", imageBg: "linear-gradient(135deg, #831843, #db2777)", tech: ["HTML/CSS", "JS"], link: "#", category: "landing" },
    { title: "Інтернет-магазин квітів", imageBg: "linear-gradient(135deg, #065f46, #10b981)", tech: ["WooCommerce"], link: "#", category: "ecommerce" },
    { title: "Фітнес-клуб Energy", imageBg: "linear-gradient(135deg, #92400e, #f59e0b)", tech: ["WordPress"], link: "#", category: "wordpress" }
];

const reviews = [
    { text: "Коля створив для нас сайт-візитку. Все зроблено якісно, швидко та за адекватною ціною.", author: "Ірина Петренко", position: "Власниця салону краси" },
    { text: "Дуже задоволений роботою! Інтернет-магазин працює ідеально.", author: "Олександр Коваль", position: "Підприємець" },
    { text: "Професійний підхід, увага до деталей та відмінна підтримка.", author: "Марія Шевченко", position: "Маркетолог" }
];

const faqItems = [
    { question: "Скільки часу займає створення сайту?", answer: "Сайт-візитка — 5-7 днів, лендінг — 7-10 днів, магазин — 14-21 день." },
    { question: "Чи можна буде самостійно редагувати сайт?", answer: "Так, я навчаю клієнтів працювати з адмін-панеллю." },
    { question: "Яка гарантія на роботу?", answer: "Надаю гарантію 3 місяці на всі види робіт." }
];

const socialLinks = [
    { name: "Telegram", url: "#" }, { name: "Instagram", url: "#" }, 
    { name: "GitHub", url: "https://github.com/Kolya-f" }, { name: "LinkedIn", url: "#" }
];

function renderServices() {
    const container = document.getElementById('servicesGrid');
    if (container) container.innerHTML = services.map(s => `
        <div class="service-card">
            <div class="service-icon">◆</div>
            <h3>${s.title}</h3>
            <p>${s.description}</p>
            <ul class="service-features">${s.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul>
            <div class="price">${s.price}</div>
            <a href="#contacts" class="btn">Замовити</a>
        </div>
    `).join('');
}

function renderPortfolio(filter = "all") {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;
    const filtered = filter === "all" ? portfolioItems : portfolioItems.filter(i => i.category === filter);
    container.innerHTML = filtered.map(i => `
        <div class="portfolio-item">
            <div class="portfolio-image" style="height:160px;background:${i.imageBg};display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;color:white">${i.title.charAt(0)}</div>
            <div class="portfolio-content">
                <h3>${i.title}</h3>
                <div style="display:flex;gap:8px;margin:12px 0">${i.tech.map(t => `<span style="background:rgba(251,191,36,0.2);padding:4px 12px;border-radius:40px;font-size:0.7rem">${t}</span>`).join('')}</div>
                <a href="${i.link}" style="color:#fbbf24">Переглянути →</a>
            </div>
        </div>
    `).join('');
}

function renderReviews() {
    const container = document.getElementById('reviewsGrid');
    if (container) container.innerHTML = reviews.map(r => `<div class="review-card"><div class="review-text">“${r.text}”</div><div class="review-author" style="color:#fbbf24;margin-top:12px">${r.author}</div><div class="review-position" style="color:#94a3b8">${r.position}</div></div>`).join('');
}

function renderFAQ() {
    const container = document.getElementById('faqGrid');
    if (container) container.innerHTML = faqItems.map(f => `<div class="faq-item"><div class="faq-question" style="color:#fbbf24;font-weight:700;margin-bottom:8px">❓ ${f.question}</div><div class="faq-answer" style="color:#94a3b8">${f.answer}</div></div>`).join('');
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
            if (scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
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

// Анімація меню: поява + райдужне переливання по черзі
function animateMenu() {
    const menuItems = document.querySelectorAll('.nav-link');
    const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
    
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${delays[index]}s`;
        setTimeout(() => {
            item.style.animation = 'menuAppear 0.4s ease forwards';
        }, 10);
    });
    
    setTimeout(() => {
        menuItems.forEach((item, idx) => {
            setTimeout(() => {
                item.style.animation = 'none';
                item.style.transition = 'all 0.3s ease';
                item.style.background = 'linear-gradient(135deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)';
                item.style.backgroundSize = '400% 100%';
                item.style.webkitBackgroundClip = 'text';
                item.style.backgroundClip = 'text';
                item.style.color = 'transparent';
                item.style.animation = 'rainbowMove 0.6s linear forwards';
                
                setTimeout(() => {
                    item.style.background = '';
                    item.style.webkitBackgroundClip = '';
                    item.style.backgroundClip = '';
                    item.style.color = '#e2e8f0';
                    item.style.animation = '';
                }, 600);
            }, idx * 100);
        });
    }, 800);
}

const styleRainbow = document.createElement('style');
styleRainbow.textContent = `
    @keyframes rainbowMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
    }
`;
document.head.appendChild(styleRainbow);

document.addEventListener('DOMContentLoaded', () => {
    renderServices(); renderPortfolio(); renderReviews(); renderFAQ(); renderSocialLinks(); setCurrentYear();
    setupFilters(); setupActiveMenu(); setupMobileMenu();
    animateMenu();
    setTimeout(() => { startTypingLoop(); }, 1500);
    console.log('Сайт fipokzec.dev успішно завантажено!');
});
