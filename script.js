// ===== DATA STRUCTURE =====
const portfolioData = {
    skills: [
        {
            icon: '🧠',
            title: 'Machine Learning',
            skills: ['Scikit-learn', 'Feature Engineering', 'Model Optimization', 'Cross Validation']
        },
        {
            icon: '🔥',
            title: 'Deep Learning',
            skills: ['TensorFlow & Keras', 'LSTM Networks', 'Computer Vision', 'NLP']
        },
        {
            icon: '💻',
            title: 'Programming',
            skills: ['Python', 'Java', 'SQL', 'Git & GitHub']
        },
        {
            icon: '📊',
            title: 'Data Science',
            skills: ['NumPy & Pandas', 'Matplotlib', 'Data Preprocessing', 'MySQL']
        }
    ],
    
    projects: [
        {
            title: 'Fetal Health Classification',
            description: 'Achieved 97.7% accuracy using ensemble methods including Soft Voting, Stacking, and PSO Weighted Averaging. Applied SMOTEENN for class imbalance and Genetic Algorithm for feature selection.',
            technologies: ['SMOTEENN', 'Genetic Algorithm', 'Ensemble Methods', 'Flask', 'REST API'],
            demoLink: 'https://fetalhealthapp-shweta1511.streamlit.app/',
            githubLink: 'https://github.com/shweta-1511/Fetal_Health_Classification-using-Ensemble-Methods-',
            type: 'fetal'
        },
        {
            title: 'Stock Price Prediction',
            description: 'Built LSTM + SVR models for financial forecasting, achieving 85% accuracy. Applied feature engineering and time series analysis for preprocessing with comprehensive visualization.',
            technologies: ['LSTM', 'SVR', 'Deep Learning', 'Time Series', 'Matplotlib'],
            demoLink: 'https://github.com/shweta-1511/Stock-prediction-using-ML',
            githubLink: 'https://github.com/shweta-1511/Stock-prediction-using-ML',
            type: 'stock'
        }
    ],
    
    experience: [
        {
            title: 'Machine Learning Engineer Intern',
            company: 'Learning Folks, New Delhi',
            period: 'Aug 2023 – Oct 2023',
            description: 'Developed and deployed interactive EdTech platform features, improving learner engagement by 20%. Designed predictive analytics models for student performance, reducing analysis time by 40%.'
        },
        {
            title: 'AI/ML/DL Training Program',
            company: 'BVCOE, New Delhi',
            period: 'July 2023 – Aug 2023',
            description: 'Designed stock price prediction models using LSTM and SVR, achieving up to 85% accuracy. Led a team of 4 in developing end-to-end ML solutions.'
        }
    ],
    
    contact: [
        { icon: '📱', text: '+91 9310008572', link: 'tel:+919310008572' },
        { icon: '📧', text: 'shwetasp1511@gmail.com', link: 'mailto:shwetasp1511@gmail.com' },
        { icon: '💼', text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/shweta2002/' },
        { icon: '💻', text: 'GitHub Portfolio', link: 'https://github.com/shweta-1511' }
    ]
};

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    setupEventListeners();
    createNeuralNetwork();
    startTypingAnimation();
});

// ===== INITIALIZE PORTFOLIO =====
function initializePortfolio() {
    //renderSkills();
    renderProjects();
    renderExperience();
    renderContactInfo();
}

// ===== RENDER SKILLS =====
function renderSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;
    
    skillsGrid.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-card" data-aos="fade-up">
            <div class="skill-icon">${skill.icon}</div>
            <h3>${skill.title}</h3>
            <ul class="skill-list">
                ${skill.skills.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// ===== RENDER PROJECTS =====
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card" data-aos="fade-up">
            <h3 class="project-title">${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-actions">
                ${project.demoLink && project.demoLink !== '#' ? 
                    `<a href="${project.demoLink}" target="_blank" class="project-btn demo">Live Demo</a>` 
                    : ''
                }
                ${project.githubLink && project.githubLink !== '#' ? 
                    `<a href="${project.githubLink}" target="_blank" class="project-btn">GitHub</a>` 
                    : ''
                }
            </div>
        </div>
    `).join('');
}

// ===== RENDER EXPERIENCE =====
function renderExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    timeline.innerHTML = portfolioData.experience.map(exp => `
        <div class="timeline-item" data-aos="fade-up">
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <p><strong>${exp.company}</strong> | ${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        </div>
    `).join('');
}

// ===== RENDER CONTACT INFO =====
function renderContactInfo() {
    const contactInfo = document.querySelector('.contact-info');
    if (!contactInfo) return;
    
    contactInfo.innerHTML = portfolioData.contact.map(contact => `
        <a href="${contact.link}" class="contact-item" ${contact.link.includes('http') ? 'target="_blank"' : ''}>
            <span class="contact-icon">${contact.icon}</span>
            <span>${contact.text}</span>
        </a>
    `).join('');
}

// ===== NEURAL NETWORK ANIMATION =====
function createNeuralNetwork() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.3';
    canvas.style.pointerEvents='none';
    hero.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
    
    const nodes = [];
    const nodeCount = 50;
    
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 3 + 1
        });
    }
    
    function animateNodes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;
            if (node.x <= 0 || node.x >= canvas.width) node.vx = -node.vx;
            if (node.y <= 0 || node.y >= canvas.height) node.vy = -node.vy;
            
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#00d4ff';
            ctx.fill();
        });
        
        nodes.forEach((node, i) => {
            nodes.slice(i + 1).forEach(otherNode => {
                const distance = Math.sqrt(
                    Math.pow(node.x - otherNode.x, 2) + 
                    Math.pow(node.y - otherNode.y, 2)
                );
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${1 - distance / 100})`;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animateNodes);
    }
    
    animateNodes();
    
    window.addEventListener('resize', () => {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    });
}

// ===== TYPING ANIMATION =====
function startTypingAnimation() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (!subtitle) return;
    
    const text = subtitle.textContent;
    subtitle.textContent = '';
    
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            subtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 1500);
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                if (navMenu) navMenu.classList.remove('active');
            }
        });
    });
    
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTop.classList.add('show');
            } else {
                scrollTop.classList.remove('show');
            }
        });
        
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
            }
        });
    }
    
    document.addEventListener('click', addClickEffect);
}

// ===== UTILITY FUNCTIONS =====
function addClickEffect(e) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.background = 'var(--primary-color)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.animation = 'clickEffect 0.6s ease-out forwards';
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 600);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.background = type === 'success' ? 'rgba(76, 205, 196, 0.9)' : 'rgba(0, 212, 255, 0.9)';
    notification.style.color = 'var(--bg-dark)';
    notification.style.padding = '1rem 2rem';
    notification.style.borderRadius = '10px';
    notification.style.zIndex = '3000';
    notification.style.transform = 'translateX(100%)';
    notification.style.transition = 'transform 0.3s ease';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ===== ADD MISSING CSS ANIMATIONS =====
const additionalStyles = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    @keyframes clickEffect {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(3); opacity: 0; }
    }
`;
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// ===== ADVANCED FEATURES =====

// Theme Switcher
function addThemeSwitcher() {
    const themeSwitcher = document.createElement('button');
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.innerHTML = '🌓';
    themeSwitcher.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid var(--primary-color);
        background: rgba(0, 0, 0, 0.8);
        color: var(--primary-color);
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    themeSwitcher.addEventListener('click', toggleTheme);
    document.body.appendChild(themeSwitcher);
}
function toggleTheme() {
    document.documentElement.classList.toggle('light-theme');
    const isLight = document.documentElement.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
    }, observerOptions);
    document.querySelectorAll('section, .skill-card, .project-card, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// Advanced Contact Form
function setupAdvancedContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });
    form.addEventListener('submit', handleAdvancedSubmit);
}
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;
    let message = '';
    clearError.call(field);
    switch(field.type) {
        case 'text':
            if (value.length < 2) { isValid = false; message = 'Name must be at least 2 characters'; }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) { isValid = false; message = 'Please enter a valid email address'; }
            break;
        case 'textarea':
            if (value.length < 10) { isValid = false; message = 'Message must be at least 10 characters'; }
            break;
    }
    if (!isValid) showFieldError(field, message);
    return isValid;
}
function showFieldError(field, message) {
    field.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = 'color: #ff6b6b; font-size: 0.8rem; margin-top: 0.25rem;';
    field.parentNode.appendChild(errorDiv);
}
function clearError() {
    this.classList.remove('error');
    const errorDiv = this.parentNode.querySelector('.field-error');
    if (errorDiv) errorDiv.remove();
}
function handleAdvancedSubmit(e) {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input, textarea');
    let isFormValid = true;
    inputs.forEach(input => { if (!validateField({ target: input })) isFormValid = false; });
    if (isFormValid) {
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...'; submitBtn.disabled = true;
        setTimeout(() => {
            showNotification('Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
            e.target.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    } else {
        showNotification('Please fix the errors above', 'error');
    }
}

// Project Filtering (fixed bug)
function addProjectFilters() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;
    const filterContainer = document.createElement('div');
    filterContainer.className = 'project-filters';
    filterContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    `;
    const filters = ['All', 'Machine Learning', 'Deep Learning', 'Web App'];
    filters.forEach(filter => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = filter;
        btn.onclick = () => filterProjects(filter, btn);
        btn.style.cssText = `
            padding: 0.5rem 1rem;
            border: 1px solid var(--primary-color);
            background: transparent;
            color: var(--primary-color);
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        if (filter === 'All') btn.classList.add('active');
        filterContainer.appendChild(btn);
    });
    const projectsGrid = projectsSection.querySelector('.projects-grid');
    projectsGrid.parentNode.insertBefore(filterContainer, projectsGrid);
}
function filterProjects(category, btn) {
    const projectCards = document.querySelectorAll('.project-card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(b => {
        b.classList.remove('active');
        b.style.background = 'transparent';
        b.style.color = 'var(--primary-color)';
    });
    btn.classList.add('active');
    btn.style.background = 'var(--primary-color)';
    btn.style.color = 'var(--bg-dark)';
    projectCards.forEach(card => {
        const shouldShow = category === 'All' || 
                          card.querySelector('.project-title').textContent.toLowerCase().includes(category.toLowerCase()) ||
                          Array.from(card.querySelectorAll('.tech-tag')).some(tag => 
                              tag.textContent.toLowerCase().includes(category.toLowerCase())
                          );
        card.style.display = shouldShow ? 'block' : 'none';
    });
}

// Skill Progress Animation
function animateSkillProgress() {
    const skillsData = {
        'Python': 90,
        'Machine Learning': 85,
        'Deep Learning': 80,
        'JavaScript': 75,
        'SQL': 70,
        'Java': 65
    };
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const skillTitle = card.querySelector('h3').textContent;
        if (skillsData[skillTitle]) {
            const progressBar = document.createElement('div');
            progressBar.className = 'skill-progress';
            progressBar.style.cssText = `
                width: 100%;
                height: 8px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 4px;
                margin-top: 1rem;
                overflow: hidden;
            `;
            const progressFill = document.createElement('div');
            progressFill.style.cssText = `
                height: 100%;
                background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
                border-radius: 4px;
                width: 0%;
                transition: width 1s ease;
            `;
            progressBar.appendChild(progressFill);
            card.appendChild(progressBar);
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => { progressFill.style.width = skillsData[skillTitle] + '%'; }, 200);
                    }
                });
            });
            observer.observe(card);
        }
    });
}

// Loading Screen
function addLoadingScreen() {
    const loader = document.createElement('div');
    loader.id = 'pageLoader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-gradient);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    loader.innerHTML = `
        <div style="width: 80px; height: 80px; border: 4px solid rgba(0, 212, 255, 0.3); border-top: 4px solid var(--primary-color); border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 2rem;"></div>
        <h2 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 1rem;">Loading AI Portfolio...</h2>
        <div style="width: 200px; height: 4px; background: rgba(0, 0, 0, 0.3); border-radius: 2px; overflow: hidden;">
            <div id="loadingBar" style="width: 0%; height: 100%; background: linear-gradient(90deg, var(--primary-color), var(--secondary-color)); border-radius: 2px; transition: width 0.3s ease;"></div>
        </div>
    `;
    document.body.appendChild(loader);
    let progress = 0;
    const loadingBar = document.getElementById('loadingBar');
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => { loader.remove(); }, 500);
            }, 500);
        }
        loadingBar.style.width = progress + '%';
    }, 200);
}

// Particle Background
function createParticleSystem() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particleCanvas';
    canvas.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
        opacity: 0.6;
    `;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles = [];
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx;
            if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
            ctx.fill();
            particles.slice(index + 1).forEach(otherParticle => {
                const distance = Math.sqrt((particle.x - otherParticle.x) ** 2 + (particle.y - otherParticle.y) ** 2);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 100)})`;
                    ctx.stroke();
                }
            });
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Resume Download
function enhancedResumeDownload() {
    const downloadBtn = document.querySelector('.download-resume');
    if (!downloadBtn) return;
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Resume download initiated');
        const resumeContent = `
=== SHWETA - AI/ML ENGINEER ===
Email: shwetasp1511@gmail.com
Phone: +91 9310008572
CGPA: 8.75

EXPERIENCE:
- ML Engineer Intern at Learning Folks (Aug 2023 - Oct 2023)
- AI/ML Training Program at BVCOE (July 2023 - Aug 2023)

PROJECTS:
- Fetal Health Classification (97.7% accuracy)
- Stock Prediction (LSTM + SVR, 85% accuracy)  
- Smart Board Innovation (SIH 2023 Finalist)

SKILLS:
- Python, Java, SQL
- TensorFlow, Keras, OpenCV
- Machine Learning, Deep Learning, NLP
        `;
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Shweta_Resume_AI_ML_Engineer.txt';
        a.click();
        URL.revokeObjectURL(url);
        showNotification('Resume downloaded! 📄 (Demo version - text format)', 'success');
    });
}

// Init Advanced Features
function initAdvancedFeatures() {
    addLoadingScreen();
    addThemeSwitcher();
    setupScrollAnimations();
    setupAdvancedContactForm();
    addProjectFilters();
    animateSkillProgress();
    createParticleSystem();
    enhancedResumeDownload();
}
// Skills Nav + Progress Animation
const navLinks = document.querySelectorAll('.skills-nav .nav-link');
const skillCategories = document.querySelectorAll('.skill-category');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    skillCategories.forEach(category => category.classList.remove('active'));
    const categoryId = link.dataset.category;
    document.getElementById(categoryId).classList.add('active');
  });
});

// === Keep the last init listener ===
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initAdvancedFeatures, 100);
});
