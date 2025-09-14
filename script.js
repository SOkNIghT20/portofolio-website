// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat, .about-content, .contact-content');
    animateElements.forEach(el => observer.observe(el));
});

// Contact form handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill item hover effects
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Utility function for smooth animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    initPerlinTerrain();
});

// Perlin Noise Terrain Mesh Effect
function initPerlinTerrain() {
    const canvas = document.getElementById('glitchCanvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Terrain variables
    let time = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    
    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Perlin noise implementation
    function noise(x, y) {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        const u = fade(x);
        const v = fade(y);
        const A = p[X] + Y;
        const B = p[X + 1] + Y;
        return lerp(v, lerp(u, grad(p[A], x, y), grad(p[B], x - 1, y)), lerp(u, grad(p[A + 1], x, y - 1), grad(p[B + 1], x - 1, y - 1)));
    }
    
    function fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }
    
    function lerp(t, a, b) {
        return a + t * (b - a);
    }
    
    function grad(hash, x, y) {
        const h = hash & 15;
        const grad_x = 1 + (h & 7);
        const grad_y = grad_x & 1 ? grad_x : -grad_x;
        return (grad_x * x + grad_y * y) * 0.7071067811865476;
    }
    
    // Permutation table
    const p = new Array(512);
    for (let i = 0; i < 256; i++) {
        p[i] = p[i + 256] = Math.floor(Math.random() * 256);
    }
    
    // Terrain configuration
    const terrainScale = 0.005;
    const terrainSpeed = 0.5;
    const terrainHeight = 100;
    const terrainSegments = 50;
    
    // Draw terrain mesh
    function drawTerrain() {
        const segmentWidth = canvas.width / terrainSegments;
        const segmentHeight = canvas.height / terrainSegments;
        
        // Create terrain height map
        const heights = [];
        for (let x = 0; x <= terrainSegments; x++) {
            heights[x] = [];
            for (let y = 0; y <= terrainSegments; y++) {
                const nx = x * terrainScale;
                const ny = y * terrainScale;
                const nz = time * terrainSpeed;
                
                // Multi-layered noise for more complex terrain
                const noise1 = noise(nx * 2, ny * 2, nz) * 0.5;
                const noise2 = noise(nx * 4, ny * 4, nz * 2) * 0.25;
                const noise3 = noise(nx * 8, ny * 8, nz * 4) * 0.125;
                
                heights[x][y] = (noise1 + noise2 + noise3) * terrainHeight;
            }
        }
        
        // Draw terrain mesh
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;
        
        // Draw horizontal lines
        for (let y = 0; y <= terrainSegments; y++) {
            ctx.beginPath();
            for (let x = 0; x <= terrainSegments; x++) {
                const screenX = x * segmentWidth;
                const screenY = y * segmentHeight + heights[x][y];
                
                if (x === 0) {
                    ctx.moveTo(screenX, screenY);
                } else {
                    ctx.lineTo(screenX, screenY);
                }
            }
            ctx.stroke();
        }
        
        // Draw vertical lines
        for (let x = 0; x <= terrainSegments; x++) {
            ctx.beginPath();
            for (let y = 0; y <= terrainSegments; y++) {
                const screenX = x * segmentWidth;
                const screenY = y * segmentHeight + heights[x][y];
                
                if (y === 0) {
                    ctx.moveTo(screenX, screenY);
                } else {
                    ctx.lineTo(screenX, screenY);
                }
            }
            ctx.stroke();
        }
        
        ctx.globalAlpha = 1;
    }
    
    // Draw terrain points
    function drawTerrainPoints() {
        const segmentWidth = canvas.width / terrainSegments;
        const segmentHeight = canvas.height / terrainSegments;
        
        ctx.fillStyle = '#000000';
        ctx.globalAlpha = 0.6;
        
        for (let x = 0; x <= terrainSegments; x++) {
            for (let y = 0; y <= terrainSegments; y++) {
                const nx = x * terrainScale;
                const ny = y * terrainScale;
                const nz = time * terrainSpeed;
                
                const noise1 = noise(nx * 2, ny * 2, nz) * 0.5;
                const noise2 = noise(nx * 4, ny * 4, nz * 2) * 0.25;
                const noise3 = noise(nx * 8, ny * 8, nz * 4) * 0.125;
                
                const height = (noise1 + noise2 + noise3) * terrainHeight;
                
                const screenX = x * segmentWidth;
                const screenY = y * segmentHeight + height;
                
                ctx.beginPath();
                ctx.arc(screenX, screenY, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        ctx.globalAlpha = 1;
    }
    
    // Add mouse influence
    function drawMouseInfluence() {
        const gradient = ctx.createRadialGradient(
            mouseX, mouseY, 0,
            mouseX, mouseY, 150
        );
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    // Add hover effects for interactive elements
    document.querySelectorAll('.btn, .project-card, .skill-item, .nav-link').forEach(element => {
        element.addEventListener('mouseenter', () => {
            // Increase terrain intensity
            ctx.globalAlpha = 0.5;
        });
        
        element.addEventListener('mouseleave', () => {
            ctx.globalAlpha = 0.3;
        });
    });
    
    // Animation loop
    function animate() {
        time += 0.016; // 60fps
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw terrain elements
        drawMouseInfluence();
        drawTerrain();
        drawTerrainPoints();
        
        requestAnimationFrame(animate);
    }
    
    animate();
} 