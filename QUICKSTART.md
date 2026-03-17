# 🚀 Quick Start Guide

## 5-Minute Setup

### Step 1: View Your Portfolio Locally
```bash
# Option A: Open directly in browser
Open index.html file in your web browser

# Option B: Run local server
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Step 2: Customize (Essential)
Edit `index.html` and replace:
1. Your name: "Ancilla Veigas" → "Your Name"
2. Your email: "ancillaveigas941@gmail.com" → "Your Email"
3. Your location: "Mangalore, Karnataka" → "Your Location"
4. GitHub link: https://github.com/ancillaveigas → Your GitHub
5. LinkedIn link: Your LinkedIn URL

### Step 3: Add Your Images
1. `25250113.jpg` → Your profile photo
2. `attendance.jpg` → Attendance system screenshot
3. `canteen.jpg` → Canteen system screenshot
4. `interntrack.jpg` → Internship tracker screenshot
5. `resume.pdf` → Your resume

### Step 4: Update Projects
Edit project cards in the Projects section:
- Project title
- Project description
- Tech stack
- GitHub links
- Live demo links

### Step 5: Deploy
Choose one:
- **GitHub Pages** (Free) - [See DEPLOYMENT.md](#github-pages)
- **Netlify** (Free) - [See DEPLOYMENT.md](#netlify)
- **Vercel** (Free) - [See DEPLOYMENT.md](#vercel)

---

## 📁 File Structure

```
portfolio/
├── index.html              ← Main file (edit here)
├── css/style.css          ← Styling (advanced edits)
├── js/script.js           ← Animations (rarely edit)
├── README.md              ← Full documentation
├── DEPLOYMENT.md          ← How to deploy
├── CUSTOMIZE.md           ← How to customize
├── FEATURES.md            ← Feature reference
├── SUMMARY.md             ← Project summary
└── resume.pdf             ← Add your resume
```

---

## 🎯 What to Edit First

### Priority 1: Personal Information
**File:** `index.html`
- Find and replace all instances of "Ancilla Veigas"
- Update email address
- Update location
- Update social media links

**Search for:**
- "Ancilla Veigas" (appears ~8 times)
- "ancillaveigas941@gmail.com"
- "Mangalore, Karnataka"
- GitHub URLs
- LinkedIn URLs

### Priority 2: Add Your Images
Place these files in the portfolio root directory:
- `25250113.jpg` (500x500px recommended)
- `attendance.jpg` (project screenshot)
- `canteen.jpg` (project screenshot)
- `interntrack.jpg` (project screenshot)
- `resume.pdf` (your resume)

### Priority 3: Update Projects
Edit each project card with:
- Your project title
- Your project description
- Your tech stack
- Your GitHub link
- Your live demo link

### Priority 4: Update Skills
Edit skills percentages if needed:
```html
<span>Skill Name</span>
<span>85%</span>  ← Change this
```

---

## 🌐 Testing Checklist

Before deploying, test:
- [ ] **Dark/Light Mode:** Click moon icon in navbar
- [ ] **Navigation:** Click all nav links, should scroll smoothly
- [ ] **Mobile Menu:** Toggle hamburger on mobile
- [ ] **QR Generator:** Enter text and generate QR code
- [ ] **Project Filters:** Test all filter buttons
- [ ] **Contact Form:** Submit test message
- [ ] **Images:** All images load correctly
- [ ] **Links:** All URLs work (GitHub, LinkedIn, email)
- [ ] **Responsive:** Test on mobile, tablet, desktop
- [ ] **Animations:** Scroll page, see smooth animations

---

## 🎨 Quick Customizations

### Change Primary Color
**File:** `css/style.css`

Find this section:
```css
:root {
    --primary: #8b5cf6;  ← Change this color
}
```

Use a color picker: https://coolors.co

### Change Font
**File:** `css/style.css`

```css
* {
    font-family: 'Inter', sans-serif;  ← Change font name
}
```

### Change Typing Words
**File:** `js/script.js`

Find:
```javascript
const words = [
    'premium web experiences',  ← Change these
    'stunning interfaces',
    'modern solutions',
    'creative designs'
];
```

---

## 🚀 Deployment (Choose One)

### GitHub Pages (Recommended for Students)
1. Create GitHub repo named `username.github.io`
2. Upload portfolio files
3. Push to GitHub
4. Your site goes live at `https://username.github.io`

### Netlify (Very Easy)
1. Go to netlify.com
2. Drag & drop your portfolio folder
3. Done! Get instant URL

### Vercel (Fast)
1. Go to vercel.com
2. Import GitHub repo or upload folder
3. Click Deploy
4. Live automatically

[Full deployment guide: See DEPLOYMENT.md]

---

## ❗ Common Issues

### Images Not Showing
- Ensure images are in root portfolio folder
- Check file names match exactly
- Verify file extensions (.jpg, .pdf)

### Dark/Light Mode Not Working
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh page
- Check browser console for errors

### QR Code Not Generating
- Ensure JavaScript is enabled
- Check browser compatibility
- Verify input text before clicking Generate

### Links Not Working
- Double-check URLs are complete
- Ensure target="_blank" is present
- Test links in different browsers

---

## 📱 Mobile Testing

Test on these viewport sizes:
- **Mobile:** 375px wide
- **Tablet:** 768px wide
- **Desktop:** 1200px+ wide

Use browser dev tools (F12) for testing.

---

## 💾 Making Changes

### To Edit HTML (Content)
1. Open `index.html` in a text editor
2. Find the section you want to change
3. Edit the text
4. Save file
5. Refresh browser to see changes

### To Edit CSS (Styling)
1. Open `css/style.css` in a text editor
2. Find the CSS class or element
3. Modify the properties
4. Save file
5. Hard refresh browser (Ctrl+F5)

### To Edit JavaScript (Functionality)
1. Open `js/script.js` in a text editor
2. Find the relevant function
3. Make changes carefully
4. Save file
5. Refresh browser

---

## 📚 Need More Help?

- **How to customize:** See [CUSTOMIZE.md](CUSTOMIZE.md)
- **How to deploy:** See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Feature explanations:** See [FEATURES.md](FEATURES.md)
- **Full documentation:** See [README.md](README.md)

---

## ✨ Pro Tips

1. **Test locally first** before deploying
2. **Keep backups** of your original files
3. **Optimize images** before adding (reduce file size)
4. **Update regularly** with new projects
5. **Monitor analytics** after deployment
6. **Test on real devices** not just browsers

---

## 🎯 Next Steps

1. [ ] Customize personal information
2. [ ] Add your images
3. [ ] Update projects
4. [ ] Update skills
5. [ ] Test everything
6. [ ] Deploy to GitHub Pages
7. [ ] Share your portfolio!

---

**Your portfolio is ready to customize.** Start with Step 1 above! 🚀

Questions? Refer to the detailed guides in the documentation files.
