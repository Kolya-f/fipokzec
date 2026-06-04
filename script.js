// Бібліотека кодів для терміналу
const codeSamples = [
    {
        title: "developer@fipokzec:~/modern-website",
        lines: [
            '<span style="color:#c084fc; font-weight:bold">&lt;!DOCTYPE html&gt;</span>',
            '<span style="color:#fbbf24">&lt;html</span> <span style="color:#60a5fa">lang</span>=<span style="color:#4ade80">"uk"</span><span style="color:#fbbf24">&gt;</span>',
            '  <span style="color:#fbbf24">&lt;head&gt;</span>',
            '    <span style="color:#fbbf24">&lt;title&gt;</span><span style="color:#38bdf8">Сучасний Landing Page</span><span style="color:#fbbf24">&lt;/title&gt;</span>',
            '  <span style="color:#fbbf24">&lt;/head&gt;</span>',
            '  <span style="color:#fbbf24">&lt;body&gt;</span>',
            '    <span style="color:#fbbf24">&lt;h1&gt;</span><span style="color:#38bdf8">Готовий до змін?</span><span style="color:#fbbf24">&lt;/h1&gt;</span>',
            '    <span style="color:#fbbf24">&lt;a</span> <span style="color:#60a5fa">href</span>=<span style="color:#4ade80">"#contact"</span><span style="color:#fbbf24">&gt;</span><span style="color:#38bdf8">Почати</span><span style="color:#fbbf24">&lt;/a&gt;</span>',
            '  <span style="color:#fbbf24">&lt;/body&gt;</span>',
            '<span style="color:#fbbf24">&lt;/html&gt;</span>'
        ]
    },
    {
        title: "developer@fipokzec:~/react-app",
        lines: [
            '<span style="color:#c084fc; font-weight:bold">import</span> <span style="color:#38bdf8">React, { useState }</span> <span style="color:#c084fc; font-weight:bold">from</span> <span style="color:#4ade80">\'react\'</span>;',
            '<span style="color:#c084fc; font-weight:bold">const</span> <span style="color:#38bdf8">App</span> = () => {',
            '  <span style="color:#c084fc; font-weight:bold">const</span> [<span style="color:#38bdf8">count</span>, <span style="color:#38bdf8">setCount</span>] = <span style="color:#38bdf8">useState</span>(<span style="color:#fbbf24">0</span>);',
            '  <span style="color:#c084fc; font-weight:bold">return</span> (',
            '    <span style="color:#fbbf24">&lt;div&gt;</span>',
            '      <span style="color:#fbbf24">&lt;h1&gt;</span>{count}<span style="color:#fbbf24">&lt;/h1&gt;</span>',
            '      <span style="color:#fbbf24">&lt;button</span> <span style="color:#60a5fa">onClick</span>=<span style="color:#e2e8f0">{() => setCount(count + 1)}</span><span style="color:#fbbf24">&gt;</span>+1<span style="color:#fbbf24">&lt;/button&gt;</span>',
            '    <span style="color:#fbbf24">&lt;/div&gt;</span>',
            '  );',
            '};',
            '<span style="color:#c084fc; font-weight:bold">export default</span> <span style="color:#38bdf8">App</span>;'
        ]
    },
    {
        title: "developer@fipokzec:~/api-server",
        lines: [
            '<span style="color:#c084fc; font-weight:bold">const</span> <span style="color:#38bdf8">express</span> = <span style="color:#38bdf8">require</span>(<span style="color:#4ade80">\'express\'</span>);',
            '<span style="color:#c084fc; font-weight:bold">const</span> <span style="color:#38bdf8">app</span> = <span style="color:#38bdf8">express</span>();',
            'app.<span style="color:#38bdf8">get</span>(<span style="color:#4ade80">\'/api/users\'</span>, (req, res) => {',
            '  res.<span style="color:#38bdf8">json</span>({ <span style="color:#60a5fa">users</span>: [{ <span style="color:#60a5fa">id</span>: <span style="color:#fbbf24">1</span>, <span style="color:#60a5fa">name</span>: <span style="color:#4ade80">\'Anna\'</span> }] });',
            '});',
            'app.<span style="color:#38bdf8">listen</span>(<span style="color:#fbbf24">3000</span>);'
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
    if (typingInterval) { clearInterval(typingInterval); typingInterval = null; }
    isTyping = false;
}

function scrollToBottom() {
    if (terminalBody) { terminalBody.scrollTop = terminalBody.scrollHeight; }
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
        setTimeout(() => { startTypingLoop(); }, 3500);
        return;
    }
    const currentLine = currentLines[currentLineIndex];
    if (currentCharIndex < currentLine.length) {
        typingArea.innerHTML += currentLine[currentCharIndex];
        currentCharIndex++;
        scrollToBottom();
        typingInterval = setTimeout(typeNextCharacter, 20);
    } else {
        typingArea.innerHTML += '\n';
        currentLineIndex++;
        currentCharIndex = 0;
        scrollToBottom();
        typingInterval = setTimeout(typeNextCharacter, 40);
    }
}

// ========== ОНОВЛЕНІ ПОСЛУГИ З ВІДЕО ТА УНІКАЛЬНИМИ ЕФЕКТАМИ ==========
const services = [
    { 
        title: "Сайт-візитка", 
        description: "3-5 сторінок, форма зв'язку, адаптивний дизайн. Ідеально для малого бізнесу.", 
        features: ["Адаптивний дизайн", "Форма зв'язку", "SEO-оптимізація", "Карта Google"], 
        price: "5 000 грн",
        videoId: "MuHXReJ6Ics",
        poster: "https://img.youtube.com/vi/MuHXReJ6Ics/hqdefault.jpg",
        demoLink: "https://youtu.be/MuHXReJ6Ics",
        projectName: "Сучасний сайт-візитка",
        effect: "slide-from-right"
    },
    { 
        title: "Лендінг", 
        description: "Односторінковий сайт для запуску продукту або акції. Висока конверсія.", 
        features: ["Анімації", "Форма захоплення", "Інтеграція з CRM", "Аналітика"], 
        price: "6 000 грн",
        videoId: "T9JMvOT_Ktc",
        poster: "https://img.youtube.com/vi/T9JMvOT_Ktc/hqdefault.jpg",
        demoLink: "https://youtu.be/T9JMvOT_Ktc",
        projectName: "Продаючий лендінг",
        effect: "scale-up"
    },
    { 
        title: "Інтернет-магазин", 
        description: "Каталог, кошик, оплата. Повноцінна платформа для продажів.", 
        features: ["Каталог товарів", "Кошик та оплата", "Адмін-панель", "Звіти"], 
        price: "12 000 грн",
        videoId: "dxgCHMGTpts",
        poster: "https://img.youtube.com/vi/dxgCHMGTpts/hqdefault.jpg",
        demoLink: "https://youtu.be/dxgCHMGTpts",
        projectName: "Повноцінний магазин",
        effect: "bounce"
    },
    { 
        title: "Підтримка", 
        description: "Щомісячне оновлення, бекапи, технічний супровід вашого сайту.", 
        features: ["Щомісячні оновлення", "Резервні копії", "Техпідтримка 24/7", "Безпека"], 
        price: "1 000 грн/міс",
        videoId: "hs1JR-CL7og",
        poster: "https://img.youtube.com/vi/hs1JR-CL7og/hqdefault.jpg",
        demoLink: "https://youtu.be/hs1JR-CL7og",
        projectName: "Техпідтримка 24/7",
        effect: "wave"
    },
    { 
        title: "Доробка сайту", 
        description: "Додавання нових функцій, сторінок, модулів до готового сайту.", 
        features: ["Додавання сторінок", "Нові функції", "Інтеграції", "Оптимізація"], 
        price: "2 000 грн",
        videoId: "-URdmYBsD9A",
        poster: "https://img.youtube.com/vi/-URdmYBsD9A/hqdefault.jpg",
        demoLink: "https://youtu.be/-URdmYBsD9A",
        projectName: "Модернізація сайту",
        effect: "slide-from-left"
    },
    { 
        title: "Оновлення дизайну", 
        description: "Рестайлінг, сучасний вигляд, покращення UX/UI вашого сайту.", 
        features: ["Новий дизайн", "Адаптація", "Покращення навігації", "Сучасні анімації"], 
        price: "2 000 грн",
        videoId: "fVffOI0uHLQ",
        poster: "https://img.youtube.com/vi/fVffOI0uHLQ/hqdefault.jpg",
        demoLink: "https://youtu.be/fVffOI0uHLQ",
        projectName: "Сучасний редизайн",
        effect: "drop"
    }
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
    if (container) {
        container.innerHTML = services.map((s, index) => {
            // Унікальний ефект для кожної картки
            const effectClass = `flip-card-effect-${index + 1} ${s.effect}`;
            return `
                <div class="flip-card ${effectClass}" data-video-id="${s.videoId}" data-effect="${s.effect}">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <h3>${s.title}</h3>
                            <p>${s.description}</p>
                            <ul class="service-features">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
                            <div class="price">${s.price}</div>
                            <a href="#contacts" class="btn">Замовити</a>
                        </div>
                        <div class="flip-card-back">
                            <img src="${s.poster}" alt="${s.title}" style="width:100%; border-radius:16px; margin-bottom:16px;">
                            <h4>${s.projectName}</h4>
                            <p style="font-size:0.8rem; margin-bottom:12px;">🎬 Відео-огляд проєкту</p>
                            <button class="watch-video-btn" data-video-id="${s.videoId}">🎬 Дивитись відео</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Автоматичне відкриття при наведенні (як було)
    document.querySelectorAll('.flip-card[data-video-id]').forEach(card => {
        const videoId = card.dataset.videoId;
        let autoPlayTimeout = null;
        let isVideoOpened = false;

        const observer = new MutationObserver(() => {
            if (card.matches(':hover') && !isVideoOpened) {
                if (!autoPlayTimeout) {
                    autoPlayTimeout = setTimeout(() => {
                        if (card.matches(':hover')) {
                            isVideoOpened = true;
                            openFullscreenVideo(videoId);
                        }
                        autoPlayTimeout = null;
                    }, 1000);
                }
            } else {
                if (autoPlayTimeout) {
                    clearTimeout(autoPlayTimeout);
                    autoPlayTimeout = null;
                }
            }
        });
        observer.observe(card, { attributes: true });
        
        card.addEventListener('mouseenter', () => {
            if (!isVideoOpened && !autoPlayTimeout) {
                autoPlayTimeout = setTimeout(() => {
                    if (card.matches(':hover')) {
                        isVideoOpened = true;
                        openFullscreenVideo(videoId);
                    }
                    autoPlayTimeout = null;
                }, 1000);
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (autoPlayTimeout) {
                clearTimeout(autoPlayTimeout);
                autoPlayTimeout = null;
            }
        });
    });

    // Кнопки ручного відкриття
    document.querySelectorAll('.watch-video-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const videoId = btn.dataset.videoId;
            openFullscreenVideo(videoId);
        });
    });
}

function openFullscreenVideo(videoId) {
    let modal = document.querySelector('.fullscreen-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'fullscreen-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="video-wrapper">
                    <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1" allow="autoplay; fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        modal.querySelector('.close-modal').addEventListener('click', () => {
            closeFullscreenVideo(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeFullscreenVideo(modal);
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeFullscreenVideo(modal);
            }
        });
    }
    
    const iframe = modal.querySelector('iframe');
    if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1`;
    }
    
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

function closeFullscreenVideo(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        const iframe = modal.querySelector('iframe');
        if (iframe) {
            iframe.src = '';
        }
    }, 400);
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
                <div class="portfolio-tech">${i.tech.map(t => `<span>${t}</span>`).join('')}</div>
                <a href="${i.link}" class="portfolio-link">Переглянути →</a>
            </div>
        </div>
    `).join('');
}

function renderReviews() {
    const container = document.getElementById('reviewsGrid');
    if (container) container.innerHTML = reviews.map(r => `<div class="review-card"><div class="review-text">“${r.text}”</div><div class="review-author">${r.author}</div><div class="review-position">${r.position}</div></div>`).join('');
}

function renderFAQ() {
    const container = document.getElementById('faqGrid');
    if (container) container.innerHTML = faqItems.map(f => `<div class="faq-item"><div class="faq-question">❓ ${f.question}</div><div class="faq-answer">${f.answer}</div></div>`).join('');
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
styleRainbow.textContent = `@keyframes rainbowMove { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }`;
document.head.appendChild(styleRainbow);

// ========== ДОДАЄМО РІЗНІ ЕФЕКТИ ЗАВАНТАЖЕННЯ ДЛЯ КАРТОК ==========
const effectStyles = document.createElement('style');
effectStyles.textContent = `
    /* Ефект 1: Виліт справа */
    .flip-card.slide-from-right {
        animation: slideFromRight 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
    @keyframes slideFromRight {
        0% { opacity: 0; transform: translateX(100px) rotate(5deg); }
        100% { opacity: 1; transform: translateX(0) rotate(0deg); }
    }
    
    /* Ефект 2: Збільшення */
    .flip-card.scale-up {
        animation: scaleUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
    @keyframes scaleUp {
        0% { opacity: 0; transform: scale(0.3) rotate(-5deg); }
        80% { transform: scale(1.02); }
        100% { opacity: 1; transform: scale(1) rotate(0deg); }
    }
    
    /* Ефект 3: Підстрибування */
    .flip-card.bounce {
        animation: bounce 0.8s ease forwards;
    }
    @keyframes bounce {
        0% { opacity: 0; transform: translateY(100px) rotate(10deg); }
        60% { transform: translateY(-15px) rotate(-2deg); }
        80% { transform: translateY(5px) rotate(1deg); }
        100% { opacity: 1; transform: translateY(0) rotate(0deg); }
    }
    
    /* Ефект 4: Хвиля */
    .flip-card.wave {
        animation: wave 0.7s ease forwards;
    }
    @keyframes wave {
        0% { opacity: 0; transform: translateX(-50px) rotate(-10deg); }
        50% { transform: translateX(20px) rotate(5deg); }
        100% { opacity: 1; transform: translateX(0) rotate(0deg); }
    }
    
    /* Ефект 5: Виліт зліва */
    .flip-card.slide-from-left {
        animation: slideFromLeft 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
    @keyframes slideFromLeft {
        0% { opacity: 0; transform: translateX(-100px) rotate(-5deg); }
        100% { opacity: 1; transform: translateX(0) rotate(0deg); }
    }
    
    /* Ефект 6: Падіння */
    .flip-card.drop {
        animation: drop 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
    @keyframes drop {
        0% { opacity: 0; transform: translateY(-80px) rotate(-8deg); }
        70% { transform: translateY(10px) rotate(3deg); }
        100% { opacity: 1; transform: translateY(0) rotate(0deg); }
    }
    
    /* Затримки для кожної картки */
    .flip-card:nth-child(1) { animation-delay: 0s; }
    .flip-card:nth-child(2) { animation-delay: 0.1s; }
    .flip-card:nth-child(3) { animation-delay: 0.2s; }
    .flip-card:nth-child(4) { animation-delay: 0.3s; }
    .flip-card:nth-child(5) { animation-delay: 0.4s; }
    .flip-card:nth-child(6) { animation-delay: 0.5s; }
    
    /* Приховуємо картки до появи анімації */
    .flip-card {
        opacity: 0;
    }
`;
document.head.appendChild(effectStyles);

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
    setTimeout(() => { startTypingLoop(); }, 2000);
    console.log('Сайт fipokzec.dev успішно завантажено!');
});
