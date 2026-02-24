# 3D Portfolio Website - Darsh

A stunning, creative 3D portfolio website built with modern web technologies.

## 🚀 Features

- **3D Graphics**: Three.js powered 3D icosahedron and sphere animations
- **Particle System**: Custom canvas-based particle background with connections
- **Interactive Elements**: 
  - Custom cursor with follower
  - 3D tilt effects on project cards
  - Flip card animation for about section
  - Glitch text effect
- **Smooth Animations**:
  - Loading screen with rotating cube
  - Typing text animation
  - Stats counter animation
  - Smooth scroll navigation
- **Responsive Design**: Mobile-friendly with hamburger menu
- **Contact Form**: Ready for backend integration (saves to CSV)

## 🎨 Design

- **Color Scheme**: Cyan (#00f7ff) and Magenta (#ff00ff) neon accents
- **Theme**: Dark futuristic design
- **Fonts**: Orbitron (headings) + Poppins (body)
- **Icons**: Font Awesome 6

## 📁 Project Structure

```
portfolio-3d/
├── index.html          # Main HTML structure
├── styles.css          # All styling with 3D effects
├── script.js           # Three.js, particles, interactions
├── README.md           # This file
└── assets/
    └── images/         # (Optional) Local images
```

## 🛠️ Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Advanced animations, 3D transforms
- **JavaScript (Vanilla)** - No framework dependencies
- **Three.js** - 3D graphics rendering
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

## 🚀 Quick Start

### Option 1: GitHub Pages (Recommended)

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select `main` branch as source
4. Your site will be live at: `https://yourusername.github.io/portfolio-3d`

### Option 2: Local Development

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio-3d

# Open index.html in browser
# Or use a local server:
npx http-server -p 8000

# Visit: http://localhost:8000
```

## 📝 Customization

### Update Personal Information

Edit `index.html`:
- Name, title, and bio in the Hero and About sections
- Skills in the Skills section
- Projects in the Projects section
- Work experience in the Experience section
- Contact information

### Change Colors

Edit `styles.css` CSS variables:
```css
:root {
    --primary-color: #00f7ff;      /* Cyan */
    --secondary-color: #ff00ff;    /* Magenta */
    --accent-color: #7b2cbf;       /* Purple */
}
```

### Modify 3D Scene

Edit `script.js` in the Three.js section:
- Change geometry (icosahedron, sphere, etc.)
- Adjust colors, rotation speed
- Add more 3D objects

## 📧 Contact Form Setup

The contact form currently simulates submission. For production:

### Option 1: Formspree (Easy)
1. Sign up at [formspree.io](https://formspree.io)
2. Replace form action with your Formspree endpoint
3. Receive emails directly

### Option 2: Custom Backend (CSV Storage)
Create a simple Node.js/Python backend to:
1. Receive form data
2. Append to CSV file
3. Send email notification

Example CSV format:
```csv
name,email,subject,message,timestamp
John Doe,john@example.com,Project Inquiry,Message content,2026-02-24T12:00:00Z
```

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Lazy Loading**: Add loading="lazy" to images
3. **Minify**: Minify CSS and JS for production
4. **CDN**: Use CDN for Three.js and Font Awesome

## 📱 Browser Support

- Chrome (Recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🌟 Features to Add (Future)

- [ ] Backend API for contact form
- [ ] Blog section
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Downloadable resume
- [ ] Testimonials section
- [ ] Live chat integration

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Darsh**
- GitHub: [@todarsh002](https://github.com/todarsh002)
- LinkedIn: [Darsh](https://linkedin.com/in/todarsh002)

---

**Built with ❤️ and lots of ☕**

*Last Updated: February 2026*
