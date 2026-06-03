// Бібліотека кодів (спрощена, без складних HTML-тегів у рядках)
const codeSamples = [
    {
        title: "developer@fipokzec:~/website",
        lines: [
            '<span style="color:#c084fc">&lt;!DOCTYPE html&gt;</span>',
            '<span style="color:#fbbf24">&lt;html&gt;</span>',
            '  <span style="color:#fbbf24">&lt;head&gt;</span>',
            '    <span style="color:#fbbf24">&lt;title&gt;</span><span style="color:#e2e8f0">Мій перший сайт</span><span style="color:#fbbf24">&lt;/title&gt;</span>',
            '  <span style="color:#fbbf24">&lt;/head&gt;</span>',
            '  <span style="color:#fbbf24">&lt;body&gt;</span>',
            '    <span style="color:#fbbf24">&lt;h1&gt;</span>Вітаю!<span style="color:#fbbf24">&lt;/h1&gt;</span>',
            '    <span style="color:#fbbf24">&lt;p&gt;</span>Це мій сайт, створений з нуля<span style="color:#fbbf24">&lt;/p&gt;</span>',
            '  <span style="color:#fbbf24">&lt;/body&gt;</span>',
            '<span style="color:#fbbf24">&lt;/html&gt;</span>'
        ]
    },
    {
        title: "developer@fipokzec:~/react-app",
        lines: [
            '<span style="color:#c084fc">import</span> React, { useState } <span style="color:#c084fc">from</span> <span style="color:#fbbf24">\'react\'</span>;',
            '',
            '<span style="color:#c084fc">const</span> <span style="color:#60a5fa">App</span> = () => {',
            '  <span style="color:#c084fc">const</span> [count, setCount] = <span style="color:#60a5fa">useState</span>(<span style="color:#fbbf24">0</span>);',
            '  ',
            '  <span style="color:#c084fc">return</span> (',
            '    <span style="color:#fbbf24">&lt;div&gt;</span>',
            '      <span style="color:#fbbf24">&lt;h1&gt;</span>Лічильник: {count}<span style="color:#fbbf24">&lt;/h1&gt;</span>',
            '      <span style="color:#fbbf24">&lt;button</span> <span style="color:#60a5fa">onClick</span>=<span style="color:#e2e8f0">{() => setCount(count + 1)}</span><span style="color:#fbbf24">&gt;</span>+1<span style="color:#fbbf24">&lt;/button&gt;</span>',
            '    <span style="color:#fbbf24">&lt;/div&gt;</span>',
            '  );',
            '};',
            '',
            '<span style="color:#c084fc">export default</span> App;'
        ]
    },
    {
        title: "developer@fipokzec:~/api-server",
        lines: [
            '<span style="color:#c084fc">const</span> express = <span style="color:#60a5fa">require</span>(<span style="color:#fbbf24">\'express\'</span>);',
            '<span style="color:#c084fc">const</span> app = <span style="color:#60a5fa">express</span>();',
            '',
            'app.<span style="color:#60a5fa">get</span>(<span style="color:#fbbf24">\'/api/users\'</span>, (req, res) => {',
            '  res.<span style="color:#60a5fa">json</span>({',
            '    <span style="color:#60a5fa">success</span>: <span style="color:#fbbf24">true</span>,',
            '    <span style="color:#60a5fa">users</span>: [',
            '      { <span style="color:#60a5fa">id</span>: <span style="color:#fbbf24">1</span>, <span style="color:#60a5fa">name</span>: <span style="color:#fbbf24">\'Анна\'</span> },',
            '      { <span style="color:#60a5fa">id</span>: <span style="color:#fbbf24">2</span>, <span style="color:#60a5fa">name</span>: <span style="color:#fbbf24">\'Максим\'</span> }',
            '    ]',
            '  });',
            '});',
            '',
            'app.<span style="color:#60a5fa">listen</span>(<span style="color:#fbbf24">3000</span>, () => {',
            '  console.<span style="color:#60a5fa">log</span>(<span style="color:#fbbf24">\'Server started on port 3000\'</span>);',
            '});'
        ]
    },
    {
        title: "developer@fipokzec:~/styles",
        lines: [
            '<span style="color:#c084fc">.container</span> {',
            '  <span style="color:#c084fc">max-width</span>: <span style="color:#fbbf24">1200px</span>;',
            '  <span style="color:#c084fc">margin</span>: <span style="color:#fbbf24">0 auto</span>;',
            '  <span style="color:#c084fc">padding</span>: <span style="color:#fbbf24">0 20px</span>;',
            '}',
            '',
            '<span style="color:#c084fc">.btn</span> {',
            '  <span style="color:#c084fc">display</span>: <span style="color:#fbbf24">inline-block</span>;',
            '  <span style="color:#c084fc">background</span>: <span style="color:#fbbf24">linear-gradient(135deg, #3b82f6, #8b5cf6)</span>;',
            '  <span style="color:#c084fc">padding</span>: <span style="color:#fbbf24">12px 28px</span>;',
            '  <span style="color:#c084fc">border-radius</span>: <span style="color:#fbbf24">40px</span>;',
            '  <span style="color:#c084fc">transition</span>: <span style="color:#fbbf24">transform 0.2s</span>;',
            '}',
            '',
            '<span style="color:#c084fc">.btn:hover</span> {',
            '  <span style="color:#c084fc">transform</span>: <span style="color:#fbbf24">scale(1.05)</span>;',
            '}'
        ]
    },
    {
        title: "developer@fipokzec:~/database",
        lines: [
            '<span style="color:#c084fc">CREATE TABLE</span> <span style="color:#e2e8f0">users</span> (',
            '  <span style="color:#60a5fa">id</span> <span style="color:#c084fc">SERIAL PRIMARY KEY</span>,',
            '  <span style="color:#60a5fa">username</span> <span style="color:#c084fc">VARCHAR(50) NOT NULL</span>,',
            '  <span style="color:#60a5fa">email</span> <span style="color:#c084fc">VARCHAR(100) UNIQUE</span>,',
            '  <span style="color:#60a5fa">created_at</span> <span style="color:#c084fc">TIMESTAMP DEFAULT NOW()</span>',
            ');',
            '',
            '<span style="color:#c084fc">CREATE INDEX</span> idx_users_email <span style="color:#c084fc">ON</span> users(email);',
            '',
            '<span style="color:#c084fc">INSERT INTO</span> users (username, email)',
            '<span style="color:#c084fc">VALUES</span>',
            '  (<span style="color:#fbbf24">\'john_doe\'</span>, <span style="color:#fbbf24">\'john@example.com\'</span>),',
            '  (<span style="color:#fbbf24">\'jane_smith\'</span>, <span style="color:#fbbf24">\'jane@example.com\'</span>);'
        ]
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
const terminalBody = document.querySelector('.terminal-body');

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

function scrollToBottom() {
    if (terminalBody) {
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
}

function startTypingLoop() {
    stopTyping();
    const sample = getNextCodeSample();
    if (terminalTitle) terminalTitle.innerHTML = sample.title;
    currentLines = [...sample.lines];
    currentLineIndex = 0;
    currentCharIndex = 0;
    if (typingArea) typingArea.innerHTML = '';
    isTyping = true;
    typeNextCharacter();
}

function typeNextCharacter() {
    if (!isTyping) return;
    
    if (currentLineIndex >= currentLines.length) {
        // Закінчили друкувати код, чекаємо 3 секунди і починаємо новий
        setTimeout(() => {
            startTypingLoop();
        }, 3000);
        return;
    }
    
    const currentLine = currentLines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
        // Додаємо один символ
        typingArea.innerHTML += currentLine[currentCharIndex];
        currentCharIndex++;
        scrollToBottom();
        typingInterval = setTimeout(typeNextCharacter, 25);
    } else {
        // Переходимо на наступний рядок
        typingArea.innerHTML += '\n';
        currentLineIndex++;
        currentCharIndex = 0;
        scrollToBottom();
        typingInterval = setTimeout(typeNextCharacter, 50);
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
    { question: "Яка гарантія на роботу?", answer: "Надаю гарантію 3 місяці на всі види робіт." },
    { question: "Чи робите техпідтримку після запуску?", answer: "Так, пропоную пакети техпідтримки: від щомісячних оновлень до повного адміністрування." }
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

function animateMenu() {
    const menuItems = document.querySelectorAll('.nav-link');
    const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
    
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-15px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, delays[index] * 1000);
    });
    
    setTimeout(() => {
        menuItems.forEach((item, idx) => {
            setTimeout(() => {
                item.style.transition = 'all 0.3s ease';
                item.style.background = 'linear-gradient(135deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)';
                item.style.backgroundSize = '400% 100%';
                item.style.webkitBackgroundClip = 'text';
                item.style.backgroundClip = 'text';
                item.style.color = 'transparent';
                item.style.animation = 'rainbowMove 2s linear forwards';
                
                setTimeout(() => {
                    item.style.background = '';
                    item.style.webkitBackgroundClip = '';
                    item.style.backgroundClip = '';
                    item.style.color = '#e2e8f0';
                    item.style.animation = '';
                }, 2000);
            }, idx * 100);
        });
    }, 1700);
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
    renderServices(); 
    renderPortfolio(); 
    renderReviews(); 
    renderFAQ(); 
    renderSocialLinks(); 
    setCurrentYear();
    setupFilters(); 
    setupActiveMenu(); 
    setupMobileMenu();
    animateMenu();
    setTimeout(() => { 
        startTypingLoop(); 
    }, 2000);
    console.log('Сайт fipokzec.dev успішно завантажено!');
});
