document.addEventListener('DOMContentLoaded', () => {

    /* ===== Dark/Light Mode Toggle ===== */
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const isDarkMode = localStorage.getItem('theme') === 'dark' || !localStorage.getItem('theme');
    
    if (!isDarkMode) {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');
        
        if (isLight) {
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    /* ===== Sticky Navbar & Active Link ===== */
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        // Sticky Navbar
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    /* ===== Mobile Menu Toggle ===== */
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = 'auto';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = hamburger.querySelector('i');
            icon.classList.replace('fa-times', 'fa-bars');
            document.body.style.overflow = 'auto';
        });
    });

    /* ===== Project Filtering ===== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.animation = 'none';
                        setTimeout(() => {
                            card.style.animation = '';
                        }, 10);
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    /* ===== QR Code Generation ===== */
    const qrInput = document.getElementById('qr-input');
    const qrGenerate = document.getElementById('qr-generate');
    const qrOutput = document.getElementById('qr-output');

    if (qrGenerate) {
        // Load QR code library dynamically
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
        document.head.appendChild(script);

        qrGenerate.addEventListener('click', () => {
            const text = qrInput.value.trim();
            if (text === '') {
                alert('Please enter text to generate QR code');
                return;
            }

            qrOutput.innerHTML = '';
            new QRCode(qrOutput, {
                text: text,
                width: 200,
                height: 200,
                colorDark: '#8b5cf6',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
            });
        });

        qrInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') qrGenerate.click();
        });
    }

    /* ===== Scroll Animations ===== */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appeared');

                if (entry.target.classList.contains('skills-column')) {
                    const progressBars = entry.target.querySelectorAll('.skill-progress');
                    progressBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 200);
                    });
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-center, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    /* ===== Form Submission Logic ===== */
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = contactForm.querySelector('button');
            const btnText = btn.querySelector('span');
            const originalText = btnText.innerHTML;

            btnText.innerHTML = 'Sending...';
            btn.innerHTML = `<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>`;
            btn.disabled = true;

            setTimeout(() => {
                formStatus.textContent = "Thank you! Your message has been sent successfully.";
                formStatus.className = 'form-status success';

                contactForm.reset();
                btn.innerHTML = `<span>${originalText}</span> <i class="fas fa-paper-plane"></i>`;
                btn.disabled = false;

                setTimeout(() => {
                    formStatus.textContent = '';
                }, 5000);
            }, 1500);
        });
    }

    /* ===== Typing Animation ===== */
    const typingText = document.querySelector('.typing-text span');
    if (typingText) {
        const words = ['premium web experiences', 'stunning interfaces', 'modern solutions', 'creative designs'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeAnimation() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeAnimation, 1500);
                return;
            }

            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(typeAnimation, speed);
        }

        typeAnimation();
    }

});
