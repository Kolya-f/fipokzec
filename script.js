// Бібліотека різних кодів (HTML, CSS, JS приклади)
const codeSamples = [
    {
        title: "developer@fipokzec:~/portfolio",
        code: `<span style="color:#7c3aed">&lt;!DOCTYPE html&gt;</span>
<span style="color:#7c3aed">&lt;html&gt;</span>
  <span style="color:#7c3aed">&lt;head&gt;</span>
    <span style="color:#7c3aed">&lt;title&gt;</span><span style="color:#fbbf24">Сучасний Landing Page</span><span style="color:#7c3aed">&lt;/title&gt;</span>
    <span style="color:#7c3aed">&lt;style&gt;</span>
      <span style="color:#60a5fa">.hero</span> { <span style="color:#c084fc">background</span>: <span style="color:#fbbf24">linear-gradient(135deg, #667eea 0%, #764ba2 100%)</span>; }
      <span style="color:#60a5fa">.btn</span> { <span style="color:#c084fc">transition</span>: <span style="color:#fbbf24">all 0.3s ease</span>; }
      <span style="color:#60a5fa">.btn:hover</span> { <span style="color:#c084fc">transform</span>: <span style="color:#fbbf24">scale(1.05)</span>; }
    <span style="color:#7c3aed">&lt;/style&gt;</span>
  <span style="color:#7c3aed">&lt;/head&gt;</span>
  <span style="color:#7c3aed">&lt;body&gt;</span>
    <span style="color:#7c3aed">&lt;div class="hero"&gt;</span>
      <span style="color:#7c3aed">&lt;h1&gt;</span>Готовий до змін?<span style="color:#7c3aed">&lt;/h1&gt;</span>
      <span style="color:#7c3aed">&lt;a href="#" class="btn"&gt;</span>Замовити зараз<span style="color:#7c3aed">&lt;/a&gt;</span>
    <span style="color:#7c3aed">&lt;/div&gt;</span>
  <span style="color:#7c3aed">&lt;/body&gt;</span>
<span style="color:#7c3aed">&lt;/html&gt;</span>`
    },
    {
        title: "developer@fipokzec:~/react-app",
        code: `<span style="color:#7c3aed">import</span> React, { useState } <span style="color:#7c3aed">from</span> <span style="color:#fbbf24">'react'</span>;

<span style="color:#7c3aed">const</span> <span style="color:#60a5fa">App</span> = () => {
  <span style="color:#7c3aed">const</span> [count, setCount] = <span style="color:#60a5fa">useState</span>(<span style="color:#fbbf24">0</span>);
  
  <span style="color:#7c3aed">return</span> (
    <span style="color:#7c3aed">&lt;div&gt;</span>
      <span style="color:#7c3aed">&lt;h1&gt;</span>Лічильник: {count}<span style="color:#7c3aed">&lt;/h1&gt;</span>
      <span style="color:#7c3aed">&lt;button onClick={() => setCount(count + 1)}&gt;</span>
        +1
      <span style="color:#7c3aed">&lt;/button&gt;</span>
    <span style="color:#7c3aed">&lt;/div&gt;</span>
  );
};

<span style="color:#7c3aed">export default</span> App;`
    },
    {
        title: "developer@fipokzec:~/fullstack-api",
        code: `<span style="color:#7c3aed">const</span> express = <span style="color:#60a5fa">require</span>(<span style="color:#fbbf24">'express'</span>);
<span style="color:#7c3aed">const</span> app = <span style="color:#60a5fa">express</span>();

app.<span style="color:#60a5fa">get</span>(<span style="color:#fbbf24">'/api/users'</span>, <span style="color:#7c3aed">async</span> (req, res) => {
  <span style="color:#7c3aed">try</span> {
    <span style="color:#7c3aed">const</span> users = <span style="color:#7c3aed">await</span> <span style="color:#60a5fa">User.find</span>();
    res.<span style="color:#60a5fa">json</span>({ success: <span style="color:#7c3aed">true</span>, data: users });
  } <span style="color:#7c3aed">catch</span>(error) {
    res.<span style="color:#60a5fa">status</span>(<span style="color:#fbbf24">500</span>).<span style="color:#60a5fa">json</span>({ error: error.message });
  }
});

app.<span style="color:#60a5fa">listen</span>(<span style="color:#fbbf24">3000</span>, () => {
  console.<span style="color:#60a5fa">log</span>(<span style="color:#fbbf24">'Server running on port 3000'</span>);
});`
    },
    {
        title: "developer@fipokzec:~/modern-design",
        code: `<span style="color:#7c3aed">&lt;style&gt;</span>
  <span style="color:#60a5fa">.glass-card</span> {
    <span style="color:#c084fc">background</span>: <span style="color:#fbbf24">rgba(255, 255, 255, 0.1)</span>;
    <span style="color:#c084fc">backdrop-filter</span>: <span style="color:#fbbf24">blur(10px)</span>;
    <span style="color:#c084fc">border-radius</span>: <span style="color:#fbbf24">24px</span>;
    <span style="color:#c084fc">border</span>: <span style="color:#fbbf24">1px solid rgba(255,255,255,0.2)</span>;
    <span style="color:#c084fc">transition</span>: <span style="color:#fbbf24">transform 0.3s ease</span>;
  }
  <span style="color:#60a5fa">.glass-card:hover</span> {
    <span style="color:#c084fc">transform</span>: <span style="color:#fbbf24">translateY(-10px)</span>;
  }
<span style="color:#7c3aed">&lt;/style&gt;</span>
<span style="color:#7c3aed">&lt;div class="glass-card"&gt;</span>
  <span style="color:#7c3aed">&lt;h2&gt;</span>Сучасний дизайн<span style="color:#7c3aed">&lt;/h2&gt;</span>
  <span style="color:#7c3aed">&lt;p&gt;</span>Ефект скла та плавні анімації<span style="color:#7c3aed">&lt;/p&gt;</span>
<span style="color:#7c3aed">&lt;/div&gt;</span>`
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
    if (typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
    }
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
        setTimeout(() => {
            startTypingLoop();
        }, 4000);
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

const services = [
    { icon: "🌐", title: "Сайт-візитка", description: "3-5 сторінок, форма зв'язку.", features: ["Адаптивний дизайн", "Форма зв'язку", "SEO"], price: "від 3 000 грн" },
    { icon: "🚀", title: "Лендінг", description: "Односторінковий для запуску продукту.", features: ["Анімації", "Форма захоплення", "Аналітика"], price: "від 4 500 грн" },
    { icon: "🏪", title: "Інтернет-магазин", description: "Каталог, кошик, оплата.", features: ["Каталог", "Кошик", "Адмін-панель"], price: "від 12 000 грн" },
    { icon: "⚙️", title: "Підтримка", description: "Оновлення, бекапи, супровід.", features: ["Оновлення", "Бекапи", "Підтримка 24/7"], price: "від 1 000 грн/міс" }
];

const portfolioItems = [
    { title: "Стоматологія SmileCare", image: "🏥", tech: ["WordPress"], link: "#", category: "wordpress" },
    { title: "Beauty-бар LAVENDER", image: "💅", tech: ["HTML/CSS", "JS"], link: "#", category: "landing" },
    { title: "Інтернет-магазин квітів", image: "🌸", tech: ["WooCommerce"], link: "#", category: "ecommerce" },
    { title: "Фітнес-клуб Energy", image: "💪", tech: ["WordPress"], link: "#", category: "wordpress" },
    { title: "Архітектурне бюро", image: "🏛️", tech: ["HTML/CSS"], link: "#", category: "landing" },
    { title: "Магазин меблів", image: "🛋️", tech: ["WooCommerce"], link: "#", category: "ecommerce" }
];

const reviews = [
    { text: "Коля створив для нас сайт-візитку. Все зроблено якісно, швидко.", author: "Ірина Петренко", position: "Власниця салону" },
    { text: "Дуже задоволений роботою! Інтернет-магазин працює ідеально.", author: "Олександр Коваль", position: "Підприємець" },
    { text: "Професійний підхід та відмінна підтримка після запуску.", author: "Марія Шевченко", position: "Маркетолог" }
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
    if (container) container.innerHTML = services.map(s => `<div class="service-card"><div class="service-icon">${s.icon}</div><h3>${s.title}</h3><p>${s.description}</p><ul style="list-style:none;padding-left:0">${s.features.map(f => `<li>✓ ${f}</li>`).join('')}</ul><div class="price">${s.price}</div><a href="#contacts" class="btn">Замовити</a></div>`).join('');
}
function renderPortfolio(filter = "all") {
    const container = document.getElementById('portfolioGrid');
    if (!container) return;
    const filtered = filter === "all" ? portfolioItems : portfolioItems.filter(i => i.category === filter);
    container.innerHTML = filtered.map(i => `<div class="portfolio-item"><div class="portfolio-image" style="height:160px;background:linear-gradient(135deg,#3b82f6,#8b5cf6);display:flex;align-items:center;justify-content:center;font-size:3rem">${i.image}</div><div class="portfolio-content"><h3>${i.title}</h3><div style="display:flex;gap:8px;margin:12px 0">${i.tech.map(t => `<span style="background:rgba(251,191,36,0.2);padding:4px 12px;border-radius:40px;font-size:0.7rem">${t}</span>`).join('')}</div><a href="${i.link}" style="color:#fbbf24">Переглянути →</a></div></div>`).join('');
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
        sections.forEach(section => { if (scrollY >= section.offsetTop - 100) current = section.getAttribute('id'); });
        navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === `#${current}`) link.classList.add('active'); });
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
function animateLogoAndMenu() {
    const logo = document.querySelector('.logo');
    const menuItems = document.querySelectorAll('.nav-link');
    if (logo) logo.classList.add('gradient-text');
    menuItems.forEach((item, index) => {
        setTimeout(() => { item.classList.add('gradient-menu'); }, index * 100);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderServices(); renderPortfolio(); renderReviews(); renderFAQ(); renderSocialLinks(); setCurrentYear();
    setupFilters(); setupActiveMenu(); setupMobileMenu(); animateLogoAndMenu();
    setTimeout(() => { startTypingLoop(); }, 500);
    console.log('Сайт fipokzec.dev успішно завантажено!');
});
