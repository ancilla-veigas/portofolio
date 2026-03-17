# Portfolio Customization Guide

## ⚙️ Quick Customization Steps

### 1. Update Your Name & Basic Info

**File:** `index.html`

Find and replace these sections:

```html
<!-- NAVBAR LOGO -->
<a href="#home" class="logo">Ancilla<span>.</span></a>
<!-- Change to your name -->

<!-- HERO SECTION -->
<h1>Hi, I'm <br><span class="gradient-text">Ancilla Veigas</span></h1>
<!-- Update your name -->

<h3 class="typing-text">I build <span>premium web experiences</span></h3>
<!-- Keep text as is or customize typing words in script.js -->

<!-- ABOUT SECTION -->
<span class="title">Name</span>
<span class="value">Ancilla Veigas</span>
<!-- Update your name and details -->

<span class="title">Email</span>
<span class="value">ancillaveigas941@gmail.com</span>
<!-- Update to your email -->

<span class="title">Location</span>
<span class="value">Mangalore, Karnataka</span>
<!-- Update your location -->

<!-- FOOTER -->
<div class="footer-logo">Ancilla<span class="gradient-text">.</span></div>
<!-- Update your name -->
```

### 2. Update Social Media Links

**File:** `index.html`

Search for these GitHub/LinkedIn links and update:

```html
<!-- HERO SECTION -->
<a href="https://github.com/" target="_blank">
<!-- Change to your GitHub -->

<a href="https://www.linkedin.com/in/ancilla-veigas">
<!-- Change to your LinkedIn -->

<!-- PROJECTS SECTION -->
<a href="https://github.com/ancillaveigas/attendance-system" target="_blank">
<!-- Update project repo links -->

<!-- FOOTER -->
<a href="https://github.com/ancillaveigas" target="_blank">
<!-- Update footer GitHub link -->
```

### 3. Add Your Profile Photo

**File:** Replace `25250113.jpg`

1. Prepare a professional photo (500x500px recommended)
2. Name it `25250113.jpg` or update the `src` in HTML:
   ```html
   <img src="your-image.jpg" alt="Your Name">
   ```
3. Place in portfolio root directory

### 4. Add Project Screenshots

**File:** Replace project images

For each project section:
1. `attendance.jpg` - Attendance System screenshot
2. `canteen.jpg` - Canteen System screenshot
3. `interntrack.jpg` - Internship Tracker screenshot

Update in `index.html`:
```html
<img src="attendance.jpg" alt="Project Name">
<!-- Change src to your image path -->
```

### 5. Update Project Details

**File:** `index.html`

For each project card:

```html
<!-- PROJECT CARD -->
<div class="project-card glass scale-in" data-category="web qr">
    <!-- Categories: web, qr, backend, etc. -->
    
    <div class="project-img">
        <img src="your-image.jpg" alt="Project Title">
    </div>
    
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description goes here...</p>
        
        <div class="project-tech">
            <span>Tech 1</span>
            <span>Tech 2</span>
            <span>Tech 3</span>
        </div>
        
        <div class="project-links">
            <a href="https://github.com/username/project" target="_blank" class="link-btn">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://live-demo-url.com" target="_blank" class="link-btn">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

### 6. Update Skills Section

**File:** `index.html`

Add or modify skills:

```html
<div class="skill-box">
    <div class="skill-info">
        <span>Skill Name</span>
        <span>85%</span>  <!-- Change percentage -->
    </div>
    <div class="skill-bar">
        <div class="skill-progress" data-width="85%"></div>
        <!-- data-width must match percentage above -->
    </div>
</div>
```

### 7. Update Certifications

**File:** `index.html`

Modify certification cards:

```html
<div class="cert-card glass scale-in">
    <div class="cert-icon"><i class="fas fa-icon"></i></div>
    <!-- Change icon here (see Font Awesome icons) -->
    
    <div class="cert-info">
        <h3>Certification Name</h3>
        <p class="cert-issuer">Issuing Organization</p>
    </div>
</div>
```

**Available Icons:** Visit [Font Awesome](https://fontawesome.com/icons)

### 8. Update Contact Information

**File:** `index.html`

```html
<!-- CONTACT CARDS -->
<div class="contact-card glass">
    <div class="icon-wrap"><i class="fas fa-envelope"></i></div>
    <h3>Email Me</h3>
    <p>your-email@gmail.com</p>
</div>

<div class="contact-card glass mt-3">
    <div class="icon-wrap"><i class="fas fa-map-marker-alt"></i></div>
    <h3>Location</h3>
    <p>Your City, Your State</p>
</div>
```

### 9. Add Resume Download

**Instructions:**

1. Prepare your resume as `resume.pdf`
2. Place in portfolio root directory
3. The download link in About section will work automatically

**Or** update the link in HTML:
```html
<a href="your-resume.pdf" download="your-resume.pdf" class="btn btn-primary mt-3">
    <i class="fas fa-download"></i> Download Resume
</a>
```

### 10. Customize Typing Animation

**File:** `js/script.js`

Find the typing animation section:

```javascript
/* ===== Typing Animation ===== */
const typingText = document.querySelector('.typing-text span');
if (typingText) {
    const words = [
        'premium web experiences',  // Change words
        'stunning interfaces',
        'modern solutions',
        'creative designs'
    ];
    // ... rest of animation code
}
```

Replace the `words` array with your own phrases.

## 🎨 Customizing Colors

### Change Color Palette

**File:** `css/style.css`

Find the `:root` section:

```css
:root {
    --bg-color: #0B0F19;          /* Background */
    --primary: #8b5cf6;           /* Main purple */
    --primary-hover: #a78bfa;     /* Hover purple */
    --secondary: #3b82f6;         /* Blue */
    --accent: #22d3ee;            /* Cyan */
    --text-main: #f8fafc;         /* Main text */
    --text-muted: #94a3b8;        /* Muted text */
}
```

**Customize:**
1. Use color picker tools (Coolors.co, Color Picker)
2. Replace hex colors
3. Update all related hover colors

### Update Light Mode Colors

Still in `:root`, find:

```css
body.light-mode {
    --bg-color: #f8f9fa;          /* Light background */
    --surface: rgba(255, 255, 255, 0.8);
    --surface-border: rgba(0, 0, 0, 0.08);
    --text-main: #1a202c;         /* Dark text */
    --text-muted: #718096;
}
```

Adjust colors for light mode theme.

## 🔤 Change Fonts

**File:** `css/style.css` and `index.html`

### Add Different Google Font

In `index.html` `<head>`:

```html
<!-- Replace the Google Fonts link -->
<link href="https://fonts.googleapis.com/css2?family=FONT-NAME:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

Then update CSS:

```css
* {
    font-family: 'YOUR-FONT-NAME', sans-serif;
}
```

## 📐 Change Layout Sizes

### Section Padding

**File:** `css/style.css`

```css
section {
    padding: 7rem 0;  /* Change this value */
}
```

### Container Max Width

```css
.container {
    max-width: 1200px;  /* Change grid max width */
}
```

### Button Sizes

```css
.btn {
    padding: 0.8rem 2.2rem;  /* Change padding */
    font-size: 1rem;         /* Change font size */
    border-radius: 30px;     /* Change border radius */
}
```

## 🎬 Modify Animations

### Animation Duration

**File:** `css/style.css`

```css
.fade-in {
    transition: opacity 0.8s ..., transform 0.8s ...;
    /* Change 0.8s to higher/lower value */
}
```

### Animation Delay

```css
.delay-1 { transition-delay: 0.2s; }  /* Change delay */
.delay-2 { transition-delay: 0.4s; }
```

### Scroll Trigger Threshold

**File:** `js/script.js`

```javascript
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1  /* Change trigger point (0-1) */
};
```

- Lower values trigger earlier
- Higher values trigger later

## 📱 Change Responsive Breakpoints

**File:** `css/style.css`

Find media queries:

```css
@media screen and (max-width: 992px) {
    /* Changes for tablets and below */
}

@media screen and (max-width: 768px) {
    /* Changes for mobile phones */
}
```

Change the pixel values to adjust breakpoints.

## 🔐 Security Customization

### Update Form Handling

**File:** `js/script.js`

Currently uses client-side simulation. For real emails:

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2: Basin**
```html
<form action="https://usebasin.com/f/YOUR_ID" method="POST">
```

## 🎯 Advanced Customizations

### Add New Section

1. Create HTML section with appropriate classes:
```html
<section id="new-section" class="relative">
    <div class="container section-title">
        <h2 class="fade-in">Section <span class="gradient-text">Name</span></h2>
    </div>
    <!-- Content -->
</section>
```

2. Add to navigation:
```html
<li><a href="#new-section">New Section</a></li>
```

3. Add CSS styling
4. Add to projects-filter if needed

### Add New Project Category

1. In HTML, add to filter buttons:
```html
<button class="filter-btn" data-filter="new-category">New Category</button>
```

2. Update project cards:
```html
<div class="project-card" data-category="new-category">
```

3. JavaScript automatically handles filtering

### Customize QR Code Generator

**File:** `js/script.js`

```javascript
new QRCode(qrOutput, {
    text: text,
    width: 200,      /* Change QR size */
    height: 200,
    colorDark: '#8b5cf6',      /* Change QR color */
    colorLight: '#ffffff',     /* Change background */
    correctLevel: QRCode.CorrectLevel.H  /* Error correction level */
});
```

## 📊 SEO Customization

### Update Meta Tags

**File:** `index.html` `<head>`

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords, here">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name">
<meta property="og:description" content="Your description">
<meta property="og:image" content="your-image.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

## ✅ Before Deploying Checklist

- [ ] All names and emails updated
- [ ] All links verified working
- [ ] Images added and optimized
- [ ] Resume PDF in place
- [ ] Social media links correct
- [ ] Projects descriptions updated
- [ ] Tested on mobile
- [ ] Tested dark/light modes
- [ ] QR generator works
- [ ] Projects filter works
- [ ] Contact form displays
- [ ] All animations smooth
- [ ] No broken images
- [ ] No console errors

---

**Your portfolio is customized and ready to deploy!** 🚀
