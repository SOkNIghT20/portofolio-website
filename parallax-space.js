// Depth Parallax Space Scene
// Multiple layers of stars/planets moving at different speeds

class ParallaxSpaceScene {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add('parallax-canvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Add canvas to body
        document.body.appendChild(this.canvas);
        
        // Mouse tracking
        this.mouseX = window.innerWidth / 2;
        this.mouseY = window.innerHeight / 2;
        this.targetX = this.mouseX;
        this.targetY = this.mouseY;
        
        // Parallax layers
        this.layers = [
            {
                name: 'distant-stars',
                speed: 0.1,
                stars: this.generateStars(50, 1, 2),
                color: '#ffffff'
            },
            {
                name: 'medium-stars',
                speed: 0.3,
                stars: this.generateStars(80, 2, 3),
                color: '#e0e0e0'
            },
            {
                name: 'near-stars',
                speed: 0.6,
                stars: this.generateStars(120, 3, 4),
                color: '#f0f0f0'
            },
            {
                name: 'planets',
                speed: 0.8,
                planets: this.generatePlanets(8),
                color: '#4a90e2'
            }
        ];
        
        this.setupEventListeners();
        this.resize();
        this.animate();
    }
    
    generateStars(count, minSize, maxSize) {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                size: Math.random() * (maxSize - minSize) + minSize,
                twinkle: Math.random() * Math.PI * 2,
                twinkleSpeed: Math.random() * 0.02 + 0.01
            });
        }
        return stars;
    }
    
    generatePlanets(count) {
        const planets = [];
        const colors = ['#4a90e2', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6', '#e67e22', '#3498db', '#1abc9c'];
        
        for (let i = 0; i < count; i++) {
            planets.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 20 + 10,
                color: colors[i % colors.length],
                orbitRadius: Math.random() * 50 + 30,
                orbitSpeed: Math.random() * 0.01 + 0.005,
                orbitAngle: Math.random() * Math.PI * 2
            });
        }
        return planets;
    }
    
    setupEventListeners() {
        // Mouse movement
        document.addEventListener('mousemove', (e) => {
            this.targetX = e.clientX;
            this.targetY = e.clientY;
        });
        
        // Window resize
        window.addEventListener('resize', () => {
            this.resize();
        });
        
        // Touch support for mobile
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            this.targetX = touch.clientX;
            this.targetY = touch.clientY;
        });
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Regenerate stars for new screen size
        this.layers.forEach(layer => {
            if (layer.stars) {
                layer.stars = this.generateStars(
                    layer.stars.length,
                    layer.stars[0]?.size || 1,
                    layer.stars[0]?.size || 2
                );
            }
            if (layer.planets) {
                layer.planets = this.generatePlanets(layer.planets.length);
            }
        });
    }
    
    updateMouse() {
        // Smooth mouse following
        this.mouseX += (this.targetX - this.mouseX) * 0.1;
        this.mouseY += (this.targetY - this.mouseY) * 0.1;
    }
    
    drawStars(layer) {
        this.ctx.fillStyle = layer.color;
        
        layer.stars.forEach(star => {
            // Calculate parallax movement
            const parallaxX = (this.mouseX - window.innerWidth / 2) * layer.speed;
            const parallaxY = (this.mouseY - window.innerHeight / 2) * layer.speed;
            
            // Update star position
            let x = star.x - parallaxX;
            let y = star.y - parallaxY;
            
            // Wrap around screen edges
            if (x < -10) x += window.innerWidth + 20;
            if (x > window.innerWidth + 10) x -= window.innerWidth + 20;
            if (y < -10) y += window.innerHeight + 20;
            if (y > window.innerHeight + 10) y -= window.innerHeight + 20;
            
            // Update star position
            star.x = x + parallaxX;
            star.y = y + parallaxY;
            
            // Twinkle effect
            star.twinkle += star.twinkleSpeed;
            const twinkle = Math.sin(star.twinkle) * 0.3 + 0.7;
            
            // Draw star
            this.ctx.globalAlpha = twinkle;
            this.ctx.beginPath();
            this.ctx.arc(x, y, star.size, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        this.ctx.globalAlpha = 1;
    }
    
    drawPlanets(layer) {
        layer.planets.forEach(planet => {
            // Calculate parallax movement
            const parallaxX = (this.mouseX - window.innerWidth / 2) * layer.speed;
            const parallaxY = (this.mouseY - window.innerHeight / 2) * layer.speed;
            
            // Update orbit
            planet.orbitAngle += planet.orbitSpeed;
            
            // Calculate position
            let x = planet.x - parallaxX + Math.cos(planet.orbitAngle) * planet.orbitRadius;
            let y = planet.y - parallaxY + Math.sin(planet.orbitAngle) * planet.orbitRadius;
            
            // Wrap around screen edges
            if (x < -planet.radius) x += window.innerWidth + planet.radius * 2;
            if (x > window.innerWidth + planet.radius) x -= window.innerWidth + planet.radius * 2;
            if (y < -planet.radius) y += window.innerHeight + planet.radius * 2;
            if (y > window.innerHeight + planet.radius) y -= window.innerHeight + planet.radius * 2;
            
            // Update planet position
            planet.x = x + parallaxX - Math.cos(planet.orbitAngle) * planet.orbitRadius;
            planet.y = y + parallaxY - Math.sin(planet.orbitAngle) * planet.orbitRadius;
            
            // Draw planet
            this.ctx.fillStyle = planet.color;
            this.ctx.beginPath();
            this.ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Add glow effect
            const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, planet.radius * 2);
            gradient.addColorStop(0, planet.color + '40');
            gradient.addColorStop(1, 'transparent');
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(x, y, planet.radius * 2, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }
    
    draw() {
        // Clear canvas with gradient background
        const gradient = this.ctx.createRadialGradient(
            window.innerWidth / 2, window.innerHeight / 2, 0,
            window.innerWidth / 2, window.innerHeight / 2, Math.max(window.innerWidth, window.innerHeight) / 2
        );
        gradient.addColorStop(0, '#0a0a0a');
        gradient.addColorStop(0.5, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw layers from back to front
        this.layers.forEach(layer => {
            if (layer.stars) {
                this.drawStars(layer);
            }
            if (layer.planets) {
                this.drawPlanets(layer);
            }
        });
    }
    
    animate() {
        this.updateMouse();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize the parallax space scene
document.addEventListener('DOMContentLoaded', () => {
    new ParallaxSpaceScene();
}); 