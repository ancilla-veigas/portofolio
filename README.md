# Ancilla Veigas - Modern Portfolio Website

A stunning, fully responsive personal portfolio website built with **vanilla HTML, CSS, and JavaScript** featuring glassmorphism design, dark/light mode toggle, project filtering, and interactive elements.

## 🌟 Features

### 1. **Modern UI/UX Design**
- Glassmorphism design with blur effects
- Smooth animations and transitions
- Professional dark theme (with light mode toggle)
- Responsive gradient backgrounds

### 2. **Navigation & Sections**
- Sticky navbar with smooth scrolling
- Mobile hamburger menu
- Seven main sections:
  - Hero Section
  - About Me
  - Skills
  - Certifications
  - Projects
  - Unique Features
  - Contact

### 3. **Dark/Light Mode Toggle**
- Seamless theme switching
- Persistent theme preference (localStorage)
- Beautiful light mode styling
- Toggle button in navbar

### 4. **Interactive Features**

#### QR Code Generator
- Generate QR codes dynamically
- Integrated with project demo showcase
- Uses QRCode.js library

#### Project Filtering
- Filter projects by category:
  - All Projects
  - Web Development
  - QR Code & Geolocation
  - .NET & Backend
- Smooth filtering animations

#### Typing Animation
- Dynamic typing effect in hero section
- Auto-cycling through predefined words
- Smooth character animation

### 5. **Showcase Projects**

1. **Attendance Management System**
   - QR code scanning
   - Geolocation tracking
   - Twilio SMS integration
   - Tech: JavaScript, PHP, MySQL, QR API

2. **Canteen Order System**
   - Digital ordering platform
   - Payment processing
   - Admin dashboard
   - Tech: C#, .NET, SQL Server

3. **Internship Tracking App**
   - Mobile application
   - Progress tracking
   - Mentor communication
   - Tech: Kotlin, Android, Firebase

### 6. **Comprehensive Skills Section**
- **Frontend:** HTML5, CSS3, JavaScript (ES6+), React.js
- **Backend:** PHP, MySQL
- **Tools:** Git, GitHub, VS Code
- **Professional:** UI/UX Design, Responsive Layouts, Problem Solving
- Animated progress bars with scroll triggers

### 7. **Certifications Section**
- Oracle Data Platform Certificate
- Advanced MERN Development
- Cloud Computing Fundamentals
- Graphic Designing
- Cybersecurity Introduction
- AI Fundamentals

### 8. **AI Tool Usage Disclosure**
- Transparent disclosure of AI assistance
- Clear explanation of AI's role
- Emphasis on personal technical understanding
- Shows responsible AI usage in development

### 9. **Contact Section**
- Contact form with validation
- Email and location information
- Social media links
- Success/error notifications

### 10. **Additional Features**
- Scroll-triggered animations
- Hover effects on all interactive elements
- Smooth page transitions
- Optimized performance
- Cross-browser compatible
- WCAG accessibility standards

## 🛠️ Technologies Used

**Frontend:**
- HTML5
- CSS3 (Glassmorphism, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)

**Libraries:**
- QRCode.js (for QR code generation)
- Intersection Observer API (for scroll animations)

**Tools:**
- Git/GitHub
- VS Code

## 📱 Responsive Design

- **Desktop:** Full-featured experience with all animations
- **Tablet:** Optimized grid layouts
- **Mobile:** Touch-friendly navigation with hamburger menu
- Breakpoints: 992px, 768px

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server-side requirements for deployment

### Local Development

1. **Clone the repository:**
```bash
git clone https://github.com/ancillaveigas/portfolio.git
cd portfolio
```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server
```

3. **Access the site:**
   - Open `http://localhost:8000` in your browser

## �配置

### Dark/Light Mode Preference
The theme preference is automatically saved in browser's localStorage. Users can toggle between modes using the moon/sun icon in the navbar.

### Updating Projects
To add or modify projects, edit the `projects-grid` section in `index.html`:

```html
<div class="project-card glass scale-in" data-category="web qr">
    <div class="project-img">
        <img src="your-image.jpg" alt="Project Name">
        <!-- ... -->
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Description...</p>
        <div class="project-tech">
            <span>Tech Stack</span>
            <!-- ... -->
        </div>
        <div class="project-links">
            <a href="github-link" target="_blank" class="link-btn"><i class="fab fa-github"></i> GitHub</a>
            <a href="demo-link" target="_blank" class="link-btn"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        </div>
    </div>
</div>
```

### Customizing Skills
Edit the skills section in `index.html` to add or remove skills:

```html
<div class="skill-box">
    <div class="skill-info"><span>Skill Name</span><span>Progress %</span></div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85%"></div>
    </div>
</div>
```

## 🌐 Deployment

### Option 1: GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose `main`
4. Select the root folder
5. Your site will be live at `https://username.github.io/portfolio`

### Option 2: Netlify
1. Drag and drop the project folder to Netlify
2. Or connect your GitHub repository
3. Automatic deployment on push
4. Get a free `.netlify.app` domain

### Option 3: Vercel
1. Connect your GitHub repository to Vercel
2. Vercel automatically detects the project
3. Automatic deployment on push
4. Get a free domain under `vercel.app`

### Option 4: Host on Your Own Server
1. Upload all files to your hosting server
2. Ensure `.htaccess` (for Apache) or equivalent routing is configured
3. Set up SSL/TLS certificate for HTTPS
4. Configure domain DNS settings

## 📊 Performance Optimization

- Lazy loading for images
- Optimized CSS with minification
- Efficient JavaScript with vanilla implementation
- Smooth scrolling without heavy libraries
- Minimal external dependencies

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels where necessary
- Keyboard navigation support
- Color contrast ratios following WCAG guidelines
- Alt text on all images

## 🔒 Security

- No sensitive data stored in frontend
- Form submission handled safely
- Content Security Policy ready
- No third-party cookie tracking

## 📈 SEO Optimization

- Semantic HTML tags
- Meta descriptions
- Open Graph tags (ready to customize)
- Structured data support
- Optimized for search engines

## 🐛 Troubleshooting

### QR Code Not Generating
- Check browser console for errors
- Ensure QRCode.js library is loaded from CDN
- Verify JavaScript is enabled

### Animations Not Playing
- Check browser support (modern browsers recommended)
- Ensure CSS transitions are enabled
- Clear browser cache and reload

### Theme Toggle Not Working
- Check localStorage is enabled in browser
- Verify JavaScript is running
- Check browser console for errors

### Mobile Menu Not Closing
- Ensure click event listeners are attached
- Check for JavaScript conflicts
- Test on different mobile browsers

## 📄 Files Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Comprehensive styling
├── js/
│   └── script.js      # All JavaScript functionality
├── README.md          # This file
└── resume.pdf         # Resume file (add your own)
```

## 🎓 AI Tool Usage Disclosure

This portfolio was developed with the assistance of AI tools for:
- UI/UX design brainstorming
- Code debugging and optimization
- Best practices guidance
- Quality assurance testing

**However**, all core concepts, project implementations, and technical solutions are entirely the developer's own work. AI was used as a productivity tool, similar to frameworks or libraries.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📞 Contact

- **Email:** ancillaveigas941@gmail.com
- **GitHub:** https://github.com/ancillaveigas
- **LinkedIn:** https://www.linkedin.com/in/ancilla-veigas-4a106b31a

---

**Made with ❤️ by Ancilla Veigas**

Last Updated: March 2026

