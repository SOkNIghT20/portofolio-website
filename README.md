# Personal Portfolio Website

> **🚧 Work in Progress** - This portfolio is continuously being updated with new projects, features, and improvements. Check back regularly for updates!

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design, smooth animations, and mobile-first approach.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Smooth animations and transitions
- 🧭 Interactive navigation
- 📧 Contact form with validation
- 🎯 Project showcase section
- 💼 Skills and technologies display
- 🌟 Hero section with call-to-action buttons

## Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Customize** the content to match your personal information

## Customization Guide

### Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Sonit Sai Penchala</span>
</h1>
<p class="hero-subtitle">Aspiring Product Manager & Creative Problem Solver</p>
```

#### About Section
```html
<p>
   Bridging the gap between users, technology, and design with strategy, empathy, and a cosmic obsession for problem-solving.
</p>
```

#### Contact Information
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>spencha1@asu.edu</span>
</div>
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <span>+1</span>
</div>
<div class="contact-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Arizona, USA</span>
</div>
```

### Projects Section

Replace the example projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-placeholder">
            <i class="fas fa-laptop-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project and what it does.</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link"><i class="fab fa-github"></i> Code</a>
            <a href="your-live-link" class="project-link"><i class="fas fa-external-link-alt"></i> Live</a>
        </div>
    </div>
</div>
```

### Skills Section

Update the skills to match your expertise:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

### Social Links

Update the footer social links:

```html
<div class="footer-social">
    <a href="your-github" class="social-link"><i class="fab fa-github"></i></a>
    <a href="your-linkedin" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter" class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="your-instagram" class="social-link"><i class="fab fa-instagram"></i></a>
</div>
```

### Styling Customization

#### Colors
Edit the CSS variables in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --text-color: #333;
    --background-color: #f8fafc;
}
```

#### Fonts
Change the font family by updating the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in `styles.css`:

```css
body {
    font-family: 'Your-Font', sans-serif;
}
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized images and assets
- Smooth scrolling navigation
- Lazy loading animations
- Mobile-first responsive design
- Minimal JavaScript footprint

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload your portfolio files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your portfolio will be available at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your portfolio folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain or use the provided Netlify URL

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your site
3. Get a custom domain or use the provided Vercel URL

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

---

**Happy coding! 🚀** 