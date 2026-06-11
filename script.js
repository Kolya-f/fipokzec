const codeSamples = [
    { title: "developer@fipokzec:~/modern-website", lines: ['<span style="color:#c084fc">&lt;!DOCTYPE html&gt;</span>','<span style="color:#fbbf24">&lt;html&gt;</span>','  <span style="color:#fbbf24">&lt;head&gt;</span>','    <span style="color:#fbbf24">&lt;title&gt;</span><span style="color:#38bdf8">Сайт</span><span style="color:#fbbf24">&lt;/title&gt;</span>','  <span style="color:#fbbf24">&lt;/head&gt;</span>','<span style="color:#fbbf24">&lt;/html&gt;</span>'] },
    { title: "developer@fipokzec:~/react-app", lines: ['<span style="color:#c084fc">import</span> <span style="color:#38bdf8">React</span> <span style="color:#c084fc">from</span> <span style="color:#4ade80">\'react\'</span>;','<span style="color:#c084fc">const</span> <span style="color:#38bdf8">App</span> = () => {','  <span style="color:#c084fc">return</span> <span style="color:#fbbf24">&lt;div&gt;</span><span style="color:#38bdf8">Hello</span><span style="color:#fbbf24">&lt;/div&gt;</span>;','};'] }
];

let currentSampleIndex = 0, isTyping = false, currentLineIndex = 0, currentCharIndex = 0, currentLines = [], typingInterval = null;
const typingArea = document.getElementById('typingArea'), cursor = document.getElementById('cursor'), terminalTitle = document.getElementById('terminalTitle'), terminalBody = document.querySelector('.terminal-body');

function getNextCodeSample() { const sample = codeSamples[currentSampleIndex % codeSamples.length]; currentSampleIndex++; return sample; }
function stopTyping() { if (typingInterval) { clearInterval(typingInterval); typingInterval = null; } isTyping = false; }
function scrollToBottom() { if (terminalBody) { terminalBody.scrollTop = terminalBody.scrollHeight; } }

function startTypingLoop() {
    stopTyping();
    const sample = getNextCodeSample();
    if (terminalTitle) terminalTitle.innerHTML = sample.title;
    currentLines = [...sample.lines];
    currentLineIndex = 0; currentCharIndex = 0;
    if (typingArea) typingArea.innerHTML = '';
    isTyping = true;
    typeNextCharacter();
}

function typeNextCharacter() {
    if (!isTyping) return;
    if (currentLineIndex >= currentLines.length) { setTimeout(() => { startTypingLoop(); }, 3500); return; }
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

const services = [
    { title: "Сайт-візитка", description: "3-5 сторінок, форма зв'язку, адаптивний дизайн.", features: ["Адаптивний дизайн", "Форма зв'язку", "SEO-оптимізація"], price: "5 000 грн", videoId: "MuHXReJ6Ics", poster: "https://img.youtube.com/vi/MuHXReJ6Ics/hqdefault.jpg", projectName: "Сучасний сайт-візитка" },
    { title: "Лендінг", description: "Односторінковий сайт для запуску продукту.", features: ["Анімації", "Форма захоплення", "Інтеграція з CRM"], price: "6 000 грн", videoId: "T9JMvOT_Ktc", poster: "https://img.youtube.com/vi/T9JMvOT_Ktc/hqdefault.jpg", projectName: "Продаючий лендінг" },
    { title: "Інтернет-магазин", description: "Каталог, кошик, оплата.", features: ["Каталог товарів", "Кошик та оплата", "Адмін-панель"], price: "12 000 грн", videoId: "dxgCHMGTpts", poster: "https://img.youtube.com/vi/dxgCHMGTpts/hqdefault.jpg", projectName: "Повноцінний магазин" },
    { title: "Підтримка", description: "Щомісячне оновлення, бекапи.", features: ["Щомісячні оновлення", "Резервні копії", "Техпідтримка 24/7"], price: "1 000 грн/міс", videoId: "hs1JR-CL7og", poster: "https://img.youtube.com/vi/hs1JR-CL7og/hqdefault.jpg", projectName: "Техпідтримка 24/7" },
    { title: "Доробка сайту", description: "Додавання нових функцій.", features: ["Додавання сторінок", "Нові функції", "Інтеграції"], price: "2 000 грн", videoId: "-URdmYBsD9A", poster: "https://img.youtube.com/vi/-URdmYBsD9A/hqdefault.jpg", projectName: "Модернізація сайту" },
    { title: "Оновлення дизайну", description: "Рестайлінг, сучасний вигляд.", features: ["Новий дизайн", "Адаптація", "Покращення навігації"], price: "2 000 грн", videoId: "fVffOI0uHLQ", poster: "https://img.youtube.com/vi/fVffOI0uHLQ/hqdefault.jpg", projectName: "Сучасний редизайн" }
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
    if (container) {
        container.innerHTML = services.map(s => `
            <div class="flip-card" data-video-id="${s.videoId}">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>${s.title}</h3>
                        <p>${s.description}</p>
                        <ul class="service-features">${s.features.map(f => `<li>${f}</li>`).join('')}</ul>
                        <div class="price">${s.price}</div>
                        <a href="#contacts" class="btn">Замовити</a>
                    </div>
                    <div class="flip-card-back">
                        <img src="${s.poster}" alt="${s.title}">
                        <h4>${s.projectName}</h4>
                        <button class="watch-video-btn" data-video-id="${s.videoId}">🎬 Дивитись відео</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    document.querySelectorAll('.watch-video-btn').forEach(btn => {
        btn.addEventListener('click', (e) => { e.stopPropagation(); openFullscreenVideo(btn.dataset.videoId); });
    });
}

function openFullscreenVideo(videoId) {
    let modal = document.querySelector('.fullscreen-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'fullscreen-modal';
        modal.innerHTML = `<div class="modal-content"><span class="close-modal">&times;</span><div class="video-wrapper"><iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" allow="autoplay; fullscreen"></iframe></div></div>`;
        document.body.appendChild(modal);
        modal.querySelector('.close-modal').addEventListener('click', () => { modal.classList.remove('active'); setTimeout(() => modal.style.display = 'none', 400); });
        modal.addEventListener('click', (e) => { if (e.target === modal) modal.querySelector('.close-modal').click(); });
    }
    const iframe = modal.querySelector('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function renderFAQ() { const container = document.getElementById('faqGrid'); if (container) container.innerHTML = faqItems.map(f => `<div class="faq-item"><div class="faq-question">❓ ${f.question}</div><div class="faq-answer">${f.answer}</div></div>`).join(''); }
function renderSocialLinks() { const container = document.getElementById('socialLinks'); if (container) container.innerHTML = socialLinks.map(l => `<a href="${l.url}" target="_blank">${l.name}</a>`).join(''); }
function setCurrentYear() { const footer = document.getElementById('footerText'); if (footer) footer.innerHTML = `© ${new Date().getFullYear()} fipokzec.dev | Створення сайтів під ключ`; }

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

function animateMenu() {
    const menuItems = document.querySelectorAll('.nav-link');
    const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6];
    menuItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-15px)';
        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'translateY(0)'; }, delays[index] * 1000);
    });
}

// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAmzG0nez-WW03BktOEPHj8WLVOJ2a2R1M",
    authDomain: "fipokzec-reviews.firebaseapp.com",
    projectId: "fipokzec-reviews",
    storageBucket: "fipokzec-reviews.firebasestorage.app",
    messagingSenderId: "103768554550",
    appId: "1:103768554550:web:32375ba73049333b71ac97"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

async function loadReviewsFromFirebase() {
    try {
        const snapshot = await db.collection("reviews").orderBy("createdAt", "desc").get();
        const reviews = [];
        snapshot.forEach((doc) => reviews.push({ id: doc.id, ...doc.data() }));
        return reviews;
    } catch (error) { return []; }
}

async function displayReviews() {
    const reviewsGrid = document.getElementById('reviewsGrid');
    if (!reviewsGrid) return;
    reviewsGrid.innerHTML = '<div class="review-card" style="text-align:center; grid-column:1/-1;">📡 Завантаження відгуків...</div>';
    const reviews = await loadReviewsFromFirebase();
    if (reviews.length === 0) { reviewsGrid.innerHTML = '<div class="review-card" style="text-align:center; grid-column:1/-1;">✨ Поки що немає відгуків. Будьте першим!</div>'; return; }
    reviewsGrid.innerHTML = reviews.map(r => `<div class="review-card"><div class="review-stars">${'⭐'.repeat(r.rating || 5)}</div><div class="review-text">“${escapeHtml(r.text)}”</div><div class="review-author">${escapeHtml(r.author)}</div><div class="review-date">${formatDate(r.createdAt)}</div></div>`).join('');
}

function escapeHtml(text) { if (!text) return ''; const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }
function formatDate(dateString) { if (!dateString) return 'щойно'; try { return new Date(dateString).toLocaleDateString('uk-UA'); } catch { return 'нещодавно'; } }

function addReviewForm() {
    const reviewsSection = document.getElementById('reviews');
    if (!reviewsSection || document.getElementById('reviewFormContainer')) return;
    reviewsSection.insertAdjacentHTML('beforeend', `
        <div id="reviewFormContainer" style="max-width:600px; margin:40px auto 0; background:rgba(20,20,35,0.6); backdrop-filter:blur(8px); border-radius:24px; padding:28px; border:1px solid rgba(255,255,255,0.08);">
            <h3 style="margin-bottom:20px; text-align:center; color:white;">✍️ Написати відгук</h3>
            <form id="submitReviewForm">
                <input type="text" id="reviewName" placeholder="Ваше ім'я" required style="width:100%; padding:12px; margin-bottom:12px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:12px; color:white;">
                <textarea id="reviewText" placeholder="Ваш відгук..." rows="3" required style="width:100%; padding:12px; margin-bottom:12px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-radius:12px; color:white;"></textarea>
                <div style="display:flex; gap:10px; justify-content:space-between; align-items:center; flex-wrap:wrap;">
                    <div><span style="color:#ccc;">Оцінка:</span>${[1,2,3,4,5].map(i => `<span class="rating-star" data-rating="${i}" style="cursor:pointer; font-size:24px; color:${i<=5?'#fbbf24':'#444'};">★</span>`).join('')}</div>
                    <input type="hidden" id="reviewRating" value="5">
                    <button type="submit" class="btn">📨 Надіслати</button>
                </div>
            </form>
            <div id="reviewFormMessage" style="margin-top:15px; font-size:12px; text-align:center;"></div>
        </div>
    `);
    const stars = document.querySelectorAll('.rating-star'), ratingInput = document.getElementById('reviewRating');
    stars.forEach(star => { star.addEventListener('click', () => { const rating = parseInt(star.dataset.rating); ratingInput.value = rating; stars.forEach((s,i) => s.style.color = i < rating ? '#fbbf24' : '#444'); }); });
    const form = document.getElementById('submitReviewForm'), messageDiv = document.getElementById('reviewFormMessage');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('reviewName').value.trim(), text = document.getElementById('reviewText').value.trim(), rating = parseInt(ratingInput.value);
        if (!name || !text) { messageDiv.innerHTML = '<span style="color:#ff5f56;">❌ Заповніть всі поля!</span>'; setTimeout(() => messageDiv.innerHTML = '', 3000); return; }
        messageDiv.innerHTML = '<span style="color:#60a5fa;">📡 Відправка...</span>';
        try {
            await db.collection("reviews").add({ author: name, text: text, rating: rating, createdAt: new Date().toISOString(), timestamp: firebase.firestore.FieldValue.serverTimestamp() });
            messageDiv.innerHTML = '<span style="color:#4ade80;">✅ Дякуємо за відгук!</span>';
            document.getElementById('reviewName').value = ''; document.getElementById('reviewText').value = '';
            ratingInput.value = 5; stars.forEach((s,i) => s.style.color = i < 5 ? '#fbbf24' : '#444');
            displayReviews();
            setTimeout(() => messageDiv.innerHTML = '', 3000);
        } catch (error) { messageDiv.innerHTML = '<span style="color:#ff5f56;">❌ Помилка. Спробуйте пізніше.</span>'; setTimeout(() => messageDiv.innerHTML = '', 3000); }
    });
}

// АНІМАЦІЯ НАВИЧОК
function setupSkillsAnimation() {
    const skillCards = document.querySelectorAll('.skill-card');
    const statCards = document.querySelectorAll('.stat-card');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                card.classList.add('visible');
                const level = parseInt(card.getAttribute('data-level'));
                const fillBar = card.querySelector('.skill-bar-fill');
                const percentSpan = card.querySelector('.skill-percent');
                if (fillBar && percentSpan) {
                    let current = 0;
                    const interval = setInterval(() => { if (current >= level) clearInterval(interval); else { current++; fillBar.style.width = current + '%'; percentSpan.textContent = current + '%'; } }, 15);
                }
                skillsObserver.unobserve(card);
            }
        });
    }, { threshold: 0.2 });
    skillCards.forEach(card => skillsObserver.observe(card));
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); statsObserver.unobserve(entry.target); } });
    }, { threshold: 0.2 });
    statCards.forEach(card => statsObserver.observe(card));
    const hoursCount = document.getElementById('hoursCount'), experienceCount = document.getElementById('experienceCount'), clientsCount = document.getElementById('clientsCount'), countriesCount = document.getElementById('countriesCount');
    if (hoursCount && experienceCount) {
        const statsObserver2 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumber(hoursCount, 0, 1247, 2000);
                    animateNumber(experienceCount, 0, 2, 1500);
                    if (clientsCount) animateNumber(clientsCount, 0, 24, 1500);
                    if (countriesCount) animateNumber(countriesCount, 0, 5, 1500);
                    statsObserver2.disconnect();
                }
            });
        }, { threshold: 0.5 });
        const codeStats = document.querySelector('.code-stats');
        if (codeStats) statsObserver2.observe(codeStats);
    }
    function animateNumber(element, start, end, duration) {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current + (element.id === 'hoursCount' ? '+' : '');
            if (progress < 1) requestAnimationFrame(step);
            else element.textContent = end + (element.id === 'hoursCount' ? '+' : '');
        };
        requestAnimationFrame(step);
    }
}

// АНІМАЦІЯ БРІФУ
let briefAnimationStarted = false;
document.getElementById('briefContainer').innerHTML = `<div style="background:linear-gradient(135deg,#0a0a0f,#0d0d14); border-radius:24px; padding:20px; border:1px solid rgba(127,119,221,0.3); box-shadow:0 20px 40px -15px rgba(0,0,0,0.5);"><div style="display:flex; justify-content:space-between; margin-bottom:15px;"><div style="display:flex; align-items:center; gap:8px;"><span style="width:8px; height:8px; background:#7F77DD; border-radius:50%; animation:pulseAnim 1.2s infinite;"></span><span style="font-size:10px; color:#7F77DD;">БРИФУВАННЯ</span></div><div style="font-size:10px; color:#555;" id="briefTimerAnim">00:00:00</div></div><div style="height:1px; background:linear-gradient(90deg,transparent,#7F77DD,transparent); margin-bottom:15px;"></div><div style="font-size:17px; margin-bottom:14px; background:linear-gradient(135deg,#fff,#9f97ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">📋 Бриф на розробку сайту</div><div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;"><div style="background:rgba(255,255,255,0.03); border:1px solid rgba(127,119,221,0.2); border-radius:10px; padding:8px;"><div style="font-size:8px; color:#534AB7;">НАЗВА ПРОЄКТУ</div><div style="font-size:11px; color:#ccc;" id="briefField1"></div></div><div style="background:rgba(255,255,255,0.03); border:1px solid rgba(127,119,221,0.2); border-radius:10px; padding:8px;"><div style="font-size:8px; color:#534AB7;">ТИП САЙТУ</div><div style="font-size:11px; color:#ccc;" id="briefField2"></div></div><div style="grid-column:1/-1; background:rgba(255,255,255,0.03); border:1px solid rgba(127,119,221,0.2); border-radius:10px; padding:8px;"><div style="font-size:8px; color:#534AB7;">ЦІЛЬОВА АУДИТОРІЯ</div><div style="font-size:11px; color:#ccc;" id="briefField3"></div></div><div style="grid-column:1/-1; background:rgba(255,255,255,0.03); border:1px solid rgba(127,119,221,0.2); border-radius:10px; padding:8px;"><div style="font-size:8px; color:#534AB7;">ГОЛОВНА МЕТА</div><div style="font-size:11px; color:#ccc;" id="briefField4"></div></div></div><div style="font-size:8px; color:#444; margin:10px 0 6px;">ПОБАЖАННЯ ДО ДИЗАЙНУ</div><div id="briefChecks" style="margin-bottom:12px;"></div><div style="font-size:8px; color:#444; margin:10px 0 6px;">ПРІОРИТЕТ ФУНКЦІЙ</div><div id="briefBars"></div><div style="margin-top:15px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between; align-items:center;"><div style="display:flex; align-items:center; gap:6px;"><div style="width:22px; height:22px; background:rgba(127,119,221,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px;">FP</div><span style="font-size:10px; color:#555;">Менеджер: fipokzec</span></div><div id="briefStatus" style="font-size:9px; padding:2px 10px; border-radius:99px; background:rgba(58,109,17,0.2); border:1px solid rgba(99,153,34,0.3); color:#7fc44a; display:flex; align-items:center; gap:5px; opacity:0;"><span style="width:4px; height:4px; background:#7fc44a; border-radius:50%; animation:pulseAnim 1.2s infinite;"></span>Бриф заповнено</div></div><div style="position:relative; margin-top:12px;"><div style="height:2px; background:rgba(255,255,255,0.05); border-radius:99px;"><div id="briefProgress" style="width:0%; height:100%; background:linear-gradient(90deg,#534AB7,#9f97ff); border-radius:99px;"></div></div></div></div>`;

function startBriefAnimation() {
    if (briefAnimationStarted) return;
    briefAnimationStarted = true;
    const fields = ['Fipokzec Web Studio', 'Сайт-візитка + Портфоліо', 'Малий бізнес, фрілансери, 25–45 років', 'Залучення клієнтів через органічний пошук'];
    const checks = ['Мінімалістичний стиль', 'Темна кольорова схема', 'Анімації та плавні переходи', 'Адаптивний дизайн'];
    const bars = [{ name: 'UX / Зручність', target: 92 }, { name: 'Швидкість завантаження', target: 80 }, { name: 'SEO-оптимізація', target: 65 }];
    let delay = 500;
    fields.forEach((text, i) => {
        setTimeout(() => {
            let el = document.getElementById(`briefField${i+1}`);
            if (el) { let chars = text.split(''), j = 0; let iv = setInterval(() => { if (el) el.textContent += chars[j++]; if (j >= chars.length) clearInterval(iv); }, 40); }
        }, delay);
        delay += 800;
    });
    setTimeout(() => {
        let checksHtml = '';
        checks.forEach((c, i) => { checksHtml += `<div id="ch${i}" style="display:flex; align-items:center; gap:8px; font-size:11px; color:#666; margin-bottom:5px; opacity:0; transform:translateX(-5px); transition:all 0.35s;"><div style="width:14px; height:14px; border:1px solid rgba(127,119,221,0.3); border-radius:3px;"></div>${c}</div>`; });
        document.getElementById('briefChecks').innerHTML = checksHtml;
        for (let i = 0; i < 4; i++) {
            setTimeout(() => {
                let ch = document.getElementById(`ch${i}`);
                if (ch) {
                    ch.style.opacity = '1'; ch.style.transform = 'translateX(0)';
                    setTimeout(() => { let box = ch.querySelector('div'); if (box) { box.style.background = 'rgba(127,119,221,0.2)'; box.style.borderColor = '#7F77DD'; box.innerHTML = '✓'; box.style.display = 'flex'; box.style.alignItems = 'center'; box.style.justifyContent = 'center'; box.style.fontSize = '9px'; box.style.color = '#9f97ff'; ch.style.color = '#888'; } }, 300);
                }
            }, 1700 + i * 350);
        }
    }, 2800);
    setTimeout(() => {
        let barsHtml = '';
        bars.forEach((b, i) => { barsHtml += `<div style="margin-bottom:8px;"><div style="display:flex; justify-content:space-between; margin-bottom:3px;"><span style="font-size:10px; color:#555;">${b.name}</span><span id="pct${i}" style="font-size:10px; color:#7F77DD;">0%</span></div><div style="height:2px; background:rgba(255,255,255,0.05); border-radius:99px;"><div id="bar${i}" style="width:0%; height:100%; background:linear-gradient(90deg,#534AB7,#9f97ff); border-radius:99px;"></div></div></div>`; });
        document.getElementById('briefBars').innerHTML = barsHtml;
        bars.forEach((b, i) => {
            setTimeout(() => {
                let bar = document.getElementById(`bar${i}`), pct = document.getElementById(`pct${i}`);
                if (bar) bar.style.width = b.target + '%';
                let n = 0; let iv = setInterval(() => { n = Math.min(n + 3, b.target); if (pct) pct.textContent = n + '%'; if (n >= b.target) clearInterval(iv); }, 30);
            }, 4000 + i * 400);
        });
    }, 3500);
    setTimeout(() => { let status = document.getElementById('briefStatus'); if (status) status.style.opacity = '1'; }, 5500);
    let startTime = Date.now();
    let briefInterval = setInterval(() => {
        let elapsed = Date.now() - startTime, s = Math.floor(elapsed / 1000) % 60, m = Math.floor(elapsed / 60000) % 60;
        let timer = document.getElementById('briefTimerAnim'); if (timer) timer.textContent = `00:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        let prog = document.getElementById('briefProgress'); if (prog) prog.style.width = Math.min(elapsed / 8000 * 100, 100) + '%';
        if (elapsed >= 8000) clearInterval(briefInterval);
    }, 200);
}

// АНІМАЦІЯ FIGMA
let figmaAnimationStarted = false;
document.getElementById('figmaContainer').innerHTML = `<div class="anim-box"><div class="anim-header"><div class="dot-pulse" style="display:inline-block; width:8px; height:8px; background:#7F77DD; border-radius:50%; animation:pulseAnim 1.2s infinite;"></div><span style="font-size:10px; color:#7F77DD;">ПРОТОТИПУВАННЯ</span><div class="anim-timer" id="timerFigma" style="margin-left:auto; font-size:10px; color:#555;">00:00:00</div></div><div class="divider" style="height:1px; background:linear-gradient(90deg,transparent,#7F77DD,transparent); margin-bottom:15px;"></div><div class="anim-title" style="font-size:17px; margin-bottom:14px; background:linear-gradient(135deg,#fff,#9f97ff); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">🎨 Прототип та дизайн у Figma</div><div class="figma-canvas" id="figmaCanvas" style="position:relative; background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.06); border-radius:12px; height:100px; margin-bottom:10px; overflow:hidden;"><div class="figma-cursor" id="figmaCursor" style="position:absolute; left:50%; top:50%; transition:left 0.8s, top 0.8s;"><svg viewBox="0 0 16 16" width="16" height="16"><path d="M2 2l10 4-5 2-2 5-3-11z" fill="#fbbf24" stroke="#0a0a0a" stroke-width="0.5"/></svg></div></div><div class="section-label" style="font-size:8px; color:#444; margin:10px 0 6px;">ШАР: СТРУКТУРА МАКЕТУ</div><div class="figma-layers" id="figmaLayers"></div><div class="section-label" style="font-size:8px; color:#444; margin:10px 0 6px;">УЗГОДЖЕННЯ КОМПОНЕНТІВ</div><div id="figmaChecks"></div><div class="foot" style="margin-top:14px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between; align-items:center;"><div class="ava-row" style="display:flex; align-items:center; gap:6px;"><div class="ava" style="width:22px; height:22px; background:rgba(127,119,221,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px;">FP</div><span class="ava-name" style="font-size:10px; color:#555;">Дизайнер: fipokzec</span></div><div class="status-pill status-blue" id="figmaStatus" style="font-size:9px; padding:2px 10px; border-radius:99px; background:rgba(59,130,246,0.15); border:1px solid rgba(99,152,246,0.3); color:#60a5fa; display:flex; align-items:center; gap:5px; opacity:0;"><span style="width:4px;height:4px;background:#60a5fa;border-radius:50%;animation:pulseAnim 1.2s infinite"></span>Макет узгоджено</div></div><div class="progress-bar" style="height:2px; background:rgba(255,255,255,0.05); border-radius:99px; margin-top:12px;"><div class="progress-fill" id="figmaProgress" style="height:100%; background:linear-gradient(90deg,#534AB7,#9f97ff); border-radius:99px; width:0%; transition:width 0.3s;"></div></div></div>`;

function startFigmaAnimation() {
    if (figmaAnimationStarted) return;
    figmaAnimationStarted = true;
    let startTimerFn = (id) => { let start = Date.now(); return setInterval(() => { let e = Date.now()-start, s=Math.floor(e/1000)%60, m=Math.floor(e/60000)%60, el=document.getElementById(id); if(el) el.textContent=`00:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }, 200); };
    let animProgress = (id, duration) => { let el=document.getElementById(id), start=Date.now(), iv=setInterval(()=>{ let pct=Math.min((Date.now()-start)/duration*100,100); if(el) el.style.width=pct+'%'; if(pct>=100) clearInterval(iv); },100); };
    startTimerFn('timerFigma'); animProgress('figmaProgress', 9000);
    const canvas = document.getElementById('figmaCanvas'), cursor = document.getElementById('figmaCursor');
    const frames = [{ style:'left:10px;top:10px;width:120px;height:80px;', delay:400 },{ style:'left:140px;top:10px;width:60px;height:80px;', delay:900 },{ style:'left:10px;top:30px;width:80px;height:8px;background:rgba(251,191,36,0.25);', delay:1400 },{ style:'left:10px;top:46px;width:55px;height:8px;background:rgba(127,119,221,0.2);', delay:1700 },{ style:'left:10px;top:62px;width:40px;height:14px;background:rgba(127,119,221,0.3);border-radius:7px;', delay:2000 }];
    const cPositions = [{l:'15%',t:'15%'},{l:'55%',t:'20%'},{l:'30%',t:'60%'},{l:'70%',t:'50%'},{l:'20%',t:'75%'}];
    frames.forEach((f,i)=>{ setTimeout(()=>{ let div=document.createElement('div'); div.className='figma-frame figma-block'; div.setAttribute('style',f.style); canvas.insertBefore(div,cursor); if(cPositions[i]){ cursor.style.left=cPositions[i].l; cursor.style.top=cPositions[i].t; } }, f.delay); });
    const layers = [{ icon:'▢', name:'Header / Navigation', col:'#c084fc' },{ icon:'▢', name:'Hero Section', col:'#38bdf8' },{ icon:'▢', name:'Services Grid', col:'#fbbf24' },{ icon:'◯', name:'CTA Button', col:'#4ade80' }];
    const layersEl = document.getElementById('figmaLayers');
    layers.forEach((l,i)=>{ let div=document.createElement('div'); div.className='layer-item'; div.innerHTML=`<span style="color:${l.col};font-size:12px">${l.icon}</span><span style="color:#999">${l.name}</span>`; layersEl.appendChild(div); setTimeout(()=>{ div.style.opacity='1'; div.style.transform='translateX(0)'; }, 2400+i*300); });
    const fChecks = ['Кольорова палітра узгоджена','Типографіка обрана','Компоненти задокументовані','Адаптивні брейкпоінти'];
    const fcEl = document.getElementById('figmaChecks');
    fChecks.forEach((c,i)=>{ let div=document.createElement('div'); div.className='check-row'; div.innerHTML=`<div class="check-box" id="fcb${i}"></div>${c}`; fcEl.appendChild(div); setTimeout(()=>{ div.style.opacity='1'; div.style.transform='translateX(0)'; setTimeout(()=>{ let box=document.getElementById(`fcb${i}`); if(box){ box.style.background='rgba(127,119,221,0.2)'; box.style.borderColor='#7F77DD'; box.innerHTML='✓'; box.style.color='#9f97ff'; div.style.color='#888'; } },350); }, 3800+i*400); });
    setTimeout(()=>{ let s=document.getElementById('figmaStatus'); if(s) s.style.opacity='1'; }, 7000);
}

// АНІМАЦІЯ КОДУ
let codeAnimationStarted = false;
document.getElementById('codeContainer').innerHTML = `<div class="anim-box" style="background:linear-gradient(135deg,#0a0a0f,#0d0d14); border-radius:24px; padding:20px; border:1px solid rgba(56,189,248,0.3); box-shadow:0 20px 40px -15px rgba(0,0,0,0.5);"><div class="anim-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;"><div class="anim-badge" style="display:flex; align-items:center; gap:8px;"><div class="dot-pulse" style="width:8px; height:8px; background:#38bdf8; border-radius:50%; animation:pulseAnim 1.2s infinite;"></div><span style="font-size:10px; color:#38bdf8;">ВЕРСТКА ТА РОЗРОБКА</span></div><div class="anim-timer" id="timerCode" style="font-size:10px; color:#555;">00:00:00</div></div><div class="divider" style="height:1px; background:linear-gradient(90deg,transparent,#38bdf8,transparent); margin-bottom:15px;"></div><div class="anim-title" style="font-size:17px; margin-bottom:14px; background:linear-gradient(135deg,#fff,#38bdf8); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">💻 Адаптивна верстка та код</div><div class="code-editor" id="codeEditor" style="background:rgba(10,10,20,0.8); border-radius:12px; padding:12px; font-family:'Courier New', monospace; font-size:10px; line-height:1.6; color:#e2e8f0; margin-bottom:10px; min-height:90px;"></div><div class="section-label" style="font-size:8px; color:#444; margin:10px 0 6px;">АДАПТИВНІСТЬ</div><div class="device-row" id="deviceRow" style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:6px; margin-bottom:10px;"><div class="device-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(127,119,221,0.15); border-radius:8px; padding:8px; text-align:center;"><div class="device-icon" style="font-size:18px;">🖥</div><div class="device-name" style="font-size:9px; color:#555;">Desktop</div><div class="device-status" id="devD" style="font-size:9px; color:#555;">—</div></div><div class="device-card"><div class="device-icon">📱</div><div class="device-name">Mobile</div><div class="device-status" id="devM" style="color:#555">—</div></div><div class="device-card"><div class="device-icon">📟</div><div class="device-name">Tablet</div><div class="device-status" id="devT" style="color:#555">—</div></div></div><div class="section-label" style="font-size:8px; color:#444; margin:10px 0 6px;">ПРОГРЕС ФУНКЦІЙ</div><div id="codeBars"></div><div class="foot" style="margin-top:14px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between; align-items:center;"><div class="ava-row" style="display:flex; align-items:center; gap:6px;"><div class="ava" style="width:22px; height:22px; background:rgba(56,189,248,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; color:#38bdf8;">FP</div><span class="ava-name" style="font-size:10px; color:#555;">Розробник: fipokzec</span></div><div class="status-pill status-blue" id="codeStatus" style="font-size:9px; padding:2px 10px; border-radius:99px; background:rgba(56,189,248,0.1); border:1px solid rgba(56,189,248,0.3); color:#38bdf8; display:flex; align-items:center; gap:5px; opacity:0;"><span style="width:4px;height:4px;background:#38bdf8;border-radius:50%;animation:pulseAnim 1.2s infinite"></span>Код готовий</div></div><div class="progress-bar" style="height:2px; background:rgba(56,189,248,0.1); border-radius:99px; margin-top:12px;"><div class="progress-fill" id="codeProgress" style="height:100%; background:linear-gradient(90deg,#0284c7,#38bdf8); border-radius:99px; width:0%; transition:width 0.3s;"></div></div></div>`;

function startCodeAnimation() {
    if (codeAnimationStarted) return;
    codeAnimationStarted = true;
    let startTimerFn = (id) => { let start = Date.now(); return setInterval(() => { let e = Date.now()-start, s=Math.floor(e/1000)%60, m=Math.floor(e/60000)%60, el=document.getElementById(id); if(el) el.textContent=`00:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }, 200); };
    let animProgress = (id, duration) => { let el=document.getElementById(id), start=Date.now(), iv=setInterval(()=>{ let pct=Math.min((Date.now()-start)/duration*100,100); if(el) el.style.width=pct+'%'; if(pct>=100) clearInterval(iv); },100); };
    startTimerFn('timerCode'); animProgress('codeProgress', 10000);
    const codeLines = [{ html:'<span class="c-gray">/* Верстка компонента */</span>', delay:300 },{ html:'<span class="c-purple">@media</span> <span class="c-yellow">(max-width: 768px)</span> {', delay:600 },{ html:'  <span class="c-blue">.hero-grid</span> {', delay:900 },{ html:'    <span class="c-green">flex-direction</span>: column;', delay:1100 },{ html:'    <span class="c-green">gap</span>: 24px;', delay:1300 },{ html:'  }', delay:1500 },{ html:'}', delay:1700 },{ html:'<span class="c-purple">const</span> <span class="c-blue">initAnimations</span> = () => {', delay:2200 },{ html:'  <span class="c-blue">gsap</span>.<span class="c-yellow">from</span>(<span class="c-green">\'.hero\'</span>, {', delay:2500 },{ html:'    <span class="c-green">opacity</span>: 0, <span class="c-green">y</span>: 30', delay:2700 },{ html:'  });', delay:2900 },{ html:'};', delay:3100 }];
    const editor = document.getElementById('codeEditor');
    codeLines.forEach(l=>{ setTimeout(()=>{ let span=document.createElement('span'); span.className='code-line'; span.innerHTML=l.html; editor.appendChild(span); }, l.delay); });
    const devices = [{ id:'devD', text:'✓ ОК', color:'#4ade80', delay:3800 },{ id:'devM', text:'✓ ОК', color:'#4ade80', delay:4400 },{ id:'devT', text:'✓ ОК', color:'#4ade80', delay:5000 }];
    devices.forEach(d=>{ setTimeout(()=>{ let el=document.getElementById(d.id); if(el){ el.textContent=d.text; el.style.color=d.color; } }, d.delay); });
    const cbars = [{ name:'HTML / CSS верстка', target:100 },{ name:'JavaScript анімації', target:88 },{ name:'CMS інтеграція', target:72 }];
    const cbarsEl = document.getElementById('codeBars');
    cbars.forEach((b,i)=>{ let div=document.createElement('div'); div.className='bar-row'; div.innerHTML=`<div class="bar-top"><span class="bar-name" style="font-size:10px; color:#555;">${b.name}</span><span class="bar-pct" id="cpct${i}" style="font-size:10px; color:#7F77DD;">0%</span></div><div class="bar-track" style="height:2px; background:rgba(255,255,255,0.05); border-radius:99px;"><div class="bar-fill" id="cbar${i}" style="height:100%; background:linear-gradient(90deg,#534AB7,#9f97ff); border-radius:99px; width:0%; transition:width 1.2s cubic-bezier(0.4,0,0.2,1);"></div></div></div>`; cbarsEl.appendChild(div);
        setTimeout(()=>{ let bar=document.getElementById(`cbar${i}`); if(bar) bar.style.width=b.target+'%'; let n=0; let iv=setInterval(()=>{ n=Math.min(n+3,b.target); let p=document.getElementById(`cpct${i}`); if(p) p.textContent=n+'%'; if(n>=b.target) clearInterval(iv); },30); }, 5500+i*400);
    });
    setTimeout(()=>{ let s=document.getElementById('codeStatus'); if(s) s.style.opacity='1'; }, 8000);
}

// АНІМАЦІЯ ЗАПУСКУ
let launchAnimationStarted = false;
document.getElementById('launchContainer').innerHTML = `<div class="anim-box" style="background:linear-gradient(135deg,#0a0a0f,#0d0d14); border-radius:24px; padding:20px; border:1px solid rgba(251,191,36,0.3); box-shadow:0 20px 40px -15px rgba(0,0,0,0.5);"><div class="anim-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;"><div class="anim-badge" style="display:flex; align-items:center; gap:8px;"><div class="dot-pulse" style="width:8px; height:8px; background:#fbbf24; border-radius:50%; animation:pulseAnim 1.2s infinite;"></div><span style="font-size:10px; color:#fbbf24;">ТЕСТУВАННЯ ТА ЗАПУСК</span></div><div class="anim-timer" id="timerLaunch" style="font-size:10px; color:#555;">00:00:00</div></div><div class="divider" style="height:1px; background:linear-gradient(90deg,transparent,#fbbf24,transparent); margin-bottom:15px;"></div><div class="anim-title" style="font-size:17px; margin-bottom:14px; background:linear-gradient(135deg,#fff,#fbbf24); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">🚀 Тестування, SEO та деплой</div><div class="launch-score" id="launchScore" style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:10px;"><div class="score-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(127,119,221,0.15); border-radius:10px; padding:8px; text-align:center;"><div class="score-num" id="scorePerf" style="font-size:20px; font-weight:700; background:linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">0</div><div class="score-label" style="font-size:9px; color:#555;">Performance</div></div><div class="score-card"><div class="score-num" id="scoreSeo" style="font-size:20px; font-weight:700; background:linear-gradient(135deg,#fbbf24,#f59e0b); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">0</div><div class="score-label">SEO</div></div></div><div class="section-label" style="font-size:8px; color:#444; margin:10px 0 6px;">ЛОГ ДЕПЛОЮ</div><div class="deploy-log" id="deployLog" style="background:rgba(10,10,20,0.8); border-radius:10px; padding:10px; font-family:'Courier New', monospace; font-size:9px; color:#94a3b8; min-height:60px; margin-bottom:10px;"></div><div class="section-label" style="font-size:8px; color:#444; margin:10px 0 6px;">ЧЕКЛИСТ ПЕРЕВІРКИ</div><div class="launch-checklist" id="launchList" style="display:flex; flex-direction:column; gap:5px; margin-bottom:10px;"></div><div class="foot" style="margin-top:14px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between; align-items:center;"><div class="ava-row" style="display:flex; align-items:center; gap:6px;"><div class="ava" style="width:22px; height:22px; background:rgba(251,191,36,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; color:#fbbf24;">FP</div><span class="ava-name" style="font-size:10px; color:#555;">DevOps: fipokzec</span></div><div class="status-pill" id="launchStatus" style="font-size:9px; padding:2px 10px; border-radius:99px; background:rgba(251,191,36,0.1); border:1px solid rgba(251,191,36,0.3); color:#fbbf24; display:flex; align-items:center; gap:5px; opacity:0;"><span style="width:4px;height:4px;background:#fbbf24;border-radius:50%;animation:pulseAnim 1.2s infinite"></span>Сайт запущено!</div></div><div class="progress-bar" style="height:2px; background:rgba(251,191,36,0.1); border-radius:99px; margin-top:12px;"><div class="progress-fill" id="launchProgress" style="height:100%; background:linear-gradient(90deg,#d97706,#fbbf24); border-radius:99px; width:0%; transition:width 0.3s;"></div></div></div>`;

function startLaunchAnimation() {
    if (launchAnimationStarted) return;
    launchAnimationStarted = true;
    let startTimerFn = (id) => { let start = Date.now(); return setInterval(() => { let e = Date.now()-start, s=Math.floor(e/1000)%60, m=Math.floor(e/60000)%60, el=document.getElementById(id); if(el) el.textContent=`00:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }, 200); };
    let animProgress = (id, duration) => { let el=document.getElementById(id), start=Date.now(), iv=setInterval(()=>{ let pct=Math.min((Date.now()-start)/duration*100,100); if(el) el.style.width=pct+'%'; if(pct>=100) clearInterval(iv); },100); };
    startTimerFn('timerLaunch'); animProgress('launchProgress', 9500);
    const logLines = [{ text:'$ npm run build', cl:'log-info', delay:400 },{ text:'✓ Оптимізація зображень...', cl:'log-ok', delay:900 },{ text:'✓ Мінімізація CSS/JS...', cl:'log-ok', delay:1400 },{ text:'⚡ Розмір бандлу: 142kb', cl:'log-warn', delay:1900 },{ text:'$ rsync → server:/var/www/', cl:'log-info', delay:2600 },{ text:'✓ Deploy successful!', cl:'log-ok', delay:3200 },{ text:'✓ SSL сертифікат активовано', cl:'log-ok', delay:3800 }];
    const logEl = document.getElementById('deployLog');
    logLines.forEach(l=>{ setTimeout(()=>{ let span=document.createElement('span'); span.className=`log-line ${l.cl}`; span.textContent=l.text; logEl.appendChild(span); }, l.delay); });
    let perfVal=0, seoVal=0;
    setTimeout(()=>{ let iv1=setInterval(()=>{ perfVal=Math.min(perfVal+2,97); let el=document.getElementById('scorePerf'); if(el) el.textContent=perfVal; if(perfVal>=97) clearInterval(iv1); },25); },4200);
    setTimeout(()=>{ let iv2=setInterval(()=>{ seoVal=Math.min(seoVal+2,94); let el=document.getElementById('scoreSeo'); if(el) el.textContent=seoVal; if(seoVal>=94) clearInterval(iv2); },28); },4800);
    const launchItems = [{ icon:'🔒', text:'HTTPS / SSL налаштовано' },{ icon:'⚡', text:'PageSpeed > 90 балів' },{ icon:'🔍', text:'Meta теги та sitemap.xml' },{ icon:'📱', text:'Mobile-first перевірено' },{ icon:'🛡️', text:'Захист від спаму (форми)' }];
    const listEl = document.getElementById('launchList');
    launchItems.forEach((item,i)=>{ let div=document.createElement('div'); div.className='launch-item'; div.innerHTML=`<span class="launch-icon">${item.icon}</span><span>${item.text}</span>`; listEl.appendChild(div); setTimeout(()=>{ div.style.opacity='1'; div.style.transform='translateX(0)'; div.style.color='#4ade80'; div.style.borderColor='rgba(74,222,128,0.15)'; div.style.background='rgba(74,222,128,0.04)'; }, 5500+i*350); });
    setTimeout(()=>{ let s=document.getElementById('launchStatus'); if(s) s.style.opacity='1'; }, 8200);
}

// АНІМАЦІЯ ПІДТРИМКИ
let supportAnimationStarted = false;
document.getElementById('supportContainer').innerHTML = `<div class="sw-wrap" style="width:100%"><div class="sw-box" style="background:linear-gradient(135deg,#0a0a0f,#0d0d14); border-radius:24px; padding:20px; border:1px solid rgba(29,200,117,0.3); box-shadow:0 20px 40px -15px rgba(0,0,0,0.5);"><div class="sw-header" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;"><div class="sw-badge" style="display:flex; align-items:center; gap:8px;"><div class="dot-g" style="width:8px; height:8px; background:#1dc875; border-radius:50%; animation:pulseG 1.2s infinite;"></div><span style="font-size:10px; color:#1dc875;">ПІДТРИМКА ТА НАВЧАННЯ</span></div><div class="sw-timer" id="swTimer" style="font-size:10px; color:#555;">00:00:00</div></div><div class="divider-g" style="height:1px; background:linear-gradient(90deg,transparent,#1dc875,transparent); margin-bottom:15px;"></div><div class="sw-title" style="font-size:17px; margin-bottom:14px; background:linear-gradient(135deg,#fff,#5eead4); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">🛠️ Адмін-панель та техпідтримка 24/7</div><div class="section-lbl" style="font-size:8px; color:#444; margin:10px 0 6px;">ЧАТ ПІДТРИМКИ — ОНЛАЙН</div><div class="chat-window" id="chatWin" style="background:rgba(10,10,20,0.8); border:1px solid rgba(29,200,117,0.15); border-radius:14px; padding:10px; margin-bottom:10px; min-height:110px;"></div><div class="section-lbl" style="font-size:8px; color:#444; margin:10px 0 6px;">НАВЧАННЯ: АДМІН-ПАНЕЛЬ</div><div class="admin-wrapper"><div class="admin-screen" id="adminScreen" style="background:rgba(15,15,25,0.9); border:1px solid rgba(255,255,255,0.07); border-radius:12px; overflow:hidden; margin-bottom:10px;"><div class="admin-bar" style="background:rgba(30,30,45,0.9); padding:7px 12px; display:flex; align-items:center; gap:8px;"><div class="admin-bar-dot" style="width:7px; height:7px; border-radius:50%; background:#ff5f56;"></div><div class="admin-bar-dot" style="width:7px; height:7px; border-radius:50%; background:#ffbd2e;"></div><div class="admin-bar-dot" style="width:7px; height:7px; border-radius:50%; background:#27c93f;"></div><div class="admin-bar-url" style="font-size:9px; color:#555; margin-left:6px; font-family:monospace;">site.com/wp-admin/</div></div><div class="admin-body" style="display:flex; height:90px;"><div class="admin-sidebar" style="width:80px; background:rgba(20,20,35,0.9); border-right:1px solid rgba(255,255,255,0.05); padding:8px 0;"><div class="admin-menu-item" id="mi0" style="font-size:9px; color:#555; padding:5px 10px; display:flex; align-items:center; gap:5px;">📄 Сторінки</div><div class="admin-menu-item" id="mi1">📝 Записи</div><div class="admin-menu-item" id="mi2">🖼 Медіа</div><div class="admin-menu-item" id="mi3">⚙️ Налаш.</div></div><div class="admin-content" id="adminContent" style="flex:1; padding:10px;"><div class="admin-row" style="height:10px; background:rgba(255,255,255,0.04); border-radius:4px; margin-bottom:6px; width:80%"></div><div class="admin-row" style="width:60%"></div><div class="admin-row admin-highlight" id="adminHL" style="width:90%;height:14px;background:rgba(29,200,117,0.15);border:1px solid rgba(29,200,117,0.3);border-radius:6px;opacity:0"></div><div class="admin-row" style="width:45%"></div></div></div></div></div><div class="section-lbl" style="font-size:8px; color:#444; margin:10px 0 6px;">АПТАЙМ ОСТАННІ 30 ДНІВ</div><div class="uptime-dots" id="uptimeDots" style="display:flex; gap:3px; margin-bottom:10px; flex-wrap:wrap;"></div><div class="resp-grid" style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:6px; margin-bottom:10px;"><div class="resp-card" style="background:rgba(255,255,255,0.03); border:1px solid rgba(29,200,117,0.15); border-radius:10px; padding:8px; text-align:center;"><div class="resp-num" id="rTime" style="font-size:18px; font-weight:700; background:linear-gradient(135deg,#1dc875,#5eead4); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">—</div><div class="resp-label" style="font-size:9px; color:#555;">Час відповіді</div></div><div class="resp-card"><div class="resp-num" id="rUptime">—</div><div class="resp-label">Аптайм</div></div><div class="resp-card"><div class="resp-num" id="rTickets">—</div><div class="resp-label">Закрито тікетів</div></div></div><div class="section-lbl" style="font-size:8px; color:#444; margin:10px 0 6px;">НАВЧАННЯ КЛІЄНТА — ПРОГРЕС</div><div id="swBars"></div><div class="foot" style="margin-top:14px; padding-top:10px; border-top:1px solid rgba(255,255,255,0.05); display:flex; justify-content:space-between; align-items:center;"><div class="ava-row" style="display:flex; align-items:center; gap:6px;"><div class="ava" style="width:22px; height:22px; background:rgba(29,200,117,0.2); border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; color:#1dc875;">FP</div><span class="ava-name" style="font-size:10px; color:#555;">Підтримка: fipokzec 24/7</span></div><div class="status-pill" id="swStatus" style="font-size:9px; padding:2px 10px; border-radius:99px; background:rgba(29,200,117,0.1); border:1px solid rgba(29,200,117,0.3); color:#1dc875; display:flex; align-items:center; gap:5px; opacity:0;"><span style="width:4px;height:4px;background:#1dc875;border-radius:50%;animation:pulseG 1.2s infinite"></span>Клієнт навчений ✓</div></div><div class="progress-bar" style="height:2px; background:rgba(29,200,117,0.1); border-radius:99px; margin-top:12px;"><div class="progress-fill" id="swProgress" style="height:100%; background:linear-gradient(90deg,#0d6b46,#1dc875); border-radius:99px; width:0%; transition:width 0.3s;"></div></div></div></div>`;

function startSupportAnimation() {
    if (supportAnimationStarted) return;
    supportAnimationStarted = true;
    const startSw = Date.now();
    setInterval(() => { const e = Date.now()-startSw, s=Math.floor(e/1000)%60, m=Math.floor(e/60000)%60; const el=document.getElementById('swTimer'); if(el) el.textContent=`00:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }, 200);
    const progElSw = document.getElementById('swProgress'), pStartSw = Date.now();
    setInterval(() => { const pct = Math.min((Date.now()-pStartSw)/10000*100,100); if(progElSw) progElSw.style.width=pct+'%'; }, 100);
    const msgs = [{ from:'client', text:'Привіт! Як додати новий пост?', delay:400 },{ from:'dev', text:'Зараз покажу! Заходьте в Записи → Додати новий', delay:1800 },{ from:'client', text:'Знайшов, але де змінити зображення?', delay:3200 },{ from:'dev', text:'Медіа → Завантажити — просто перетягніть файл 🖼', delay:4600 },{ from:'client', text:'Супер! Дякую, все зрозуміло 🙌', delay:6000 }];
    const chatWin = document.getElementById('chatWin');
    msgs.forEach(m => {
        setTimeout(() => { const isClient = m.from === 'client'; const div = document.createElement('div'); div.className = `msg${isClient ? ' from-client' : ''}`; div.innerHTML = `<div class="msg-ava ${isClient ? 'ava-client' : 'ava-dev'}">${isClient ? 'КЛ' : 'FP'}</div><div class="msg-bubble ${isClient ? 'bubble-client' : 'bubble-dev'}">${m.text}</div>`; chatWin.appendChild(div); chatWin.scrollTop = chatWin.scrollHeight; }, m.delay);
        if (m.from === 'dev') { setTimeout(() => { const typing = document.createElement('div'); typing.className = 'msg'; typing.id = `typ${m.delay}`; typing.innerHTML = `<div class="msg-ava ava-dev">FP</div><div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`; chatWin.appendChild(typing); chatWin.scrollTop = chatWin.scrollHeight; setTimeout(() => { const t = document.getElementById(`typ${m.delay}`); if(t) t.remove(); }, 1300); }, m.delay - 1350); }
    });
    const menuItems = ['mi0','mi1','mi2','mi3']; let curMenu = 0;
    setInterval(() => { menuItems.forEach((id,i) => { const el = document.getElementById(id); if(el) el.classList.toggle('active', i===curMenu); }); curMenu = (curMenu+1)%4; const hl = document.getElementById('adminHL'); if(hl) { hl.style.opacity='1'; setTimeout(() => { if(hl) hl.style.opacity='0'; }, 800); } }, 1800);
    const dotsEl = document.getElementById('uptimeDots');
    for(let i=0;i<30;i++) { const d = document.createElement('div'); d.className = 'up-dot'; d.id = `ud${i}`; dotsEl.appendChild(d); setTimeout(() => { const roll = Math.random(); d.classList.add(roll > 0.07 ? 'ok' : 'warn'); }, 500 + i*80); }
    setTimeout(() => { let n=0; const iv=setInterval(()=>{ n=Math.min(n+1,15); const el=document.getElementById('rTime'); if(el) el.textContent=n+'хв'; if(n>=15) clearInterval(iv); },40); },3000);
    setTimeout(() => { let n=0; const iv=setInterval(()=>{ n=Math.min(n+1,99); const el=document.getElementById('rUptime'); if(el) el.textContent=n+'%'; if(n>=99) clearInterval(iv); },25); },3600);
    setTimeout(() => { let n=0; const iv=setInterval(()=>{ n=Math.min(n+1,47); const el=document.getElementById('rTickets'); if(el) el.textContent=n; if(n>=47) clearInterval(iv); },35); },4200);
    const barsSw = [{ name:'Публікація матеріалів', target:100 },{ name:'Управління медіафайлами', target:95 },{ name:'Налаштування плагінів', target:80 },{ name:'Базове SEO у CMS', target:70 }];
    const barsElSw = document.getElementById('swBars');
    barsSw.forEach((b,i) => { const div = document.createElement('div'); div.className = 'bar-row'; div.innerHTML = `<div class="bar-top"><span class="bar-name" style="font-size:10px; color:#555;">${b.name}</span><span class="bar-pct" id="spct${i}" style="font-size:10px; color:#1dc875;">0%</span></div><div class="bar-track" style="height:2px; background:rgba(255,255,255,0.05); border-radius:99px;"><div class="bar-fill" id="sbar${i}" style="height:100%; background:linear-gradient(90deg,#0d6b46,#1dc875); border-radius:99px; width:0%; transition:width 1.2s cubic-bezier(0.4,0,0.2,1);"></div></div></div>`; barsElSw.appendChild(div);
        setTimeout(() => { const bar=document.getElementById(`sbar${i}`); if(bar) bar.style.width=b.target+'%'; let n=0; const iv=setInterval(() => { n=Math.min(n+2,b.target); const p=document.getElementById(`spct${i}`); if(p) p.textContent=n+'%'; if(n>=b.target) clearInterval(iv); }, 25); }, 5000+i*400);
    });
    setTimeout(() => { const s=document.getElementById('swStatus'); if(s) s.style.opacity='1'; }, 8500);
}

function setupScrollAnimation() {
    const elementsToAnimate = [
        { element: document.querySelector('#briefContainer'), callback: startBriefAnimation },
        { element: document.querySelector('#figmaContainer'), callback: startFigmaAnimation },
        { element: document.querySelector('#codeContainer'), callback: startCodeAnimation },
        { element: document.querySelector('#launchContainer'), callback: startLaunchAnimation },
        { element: document.querySelector('#supportContainer'), callback: startSupportAnimation }
    ];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const data = elementsToAnimate.find(e => e.element === entry.target);
                if (data && data.callback) data.callback();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
    elementsToAnimate.forEach(item => { if (item.element) observer.observe(item.element); });
}

document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    displayReviews();
    addReviewForm();
    renderFAQ();
    renderSocialLinks();
    setCurrentYear();
    setupActiveMenu();
    setupMobileMenu();
    animateMenu();
    setTimeout(() => { startTypingLoop(); }, 1000);
    setTimeout(() => { setupSkillsAnimation(); }, 500);
    setupScrollAnimation();
    console.log('Сайт fipokzec.dev успішно завантажено!');
});
