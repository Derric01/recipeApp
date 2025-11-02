# 📱 Recipe PWA - Team Documentation

## 🎯 Project Overview

A **Progressive Web App (PWA)** for searching, viewing, and saving recipes. Built with React + Vite, fully optimized for mobile devices, and can be installed like a native app on iOS and Android.

**Live Demo**: [Add your Vercel URL here after deployment]

---

## 🏗️ Project Structure

```
recipe-app/
├── public/                          # Static assets
│   ├── icon.svg                     # App icon source
│   ├── pwa-*.png                    # Generated PWA icons
│   ├── apple-touch-icon-*.png       # iOS app icon
│   └── favicon.ico                  # Browser favicon
│
├── src/
│   ├── components/                  # Reusable React components
│   │   ├── RecipeCard.jsx           # Individual recipe card UI
│   │   ├── Sidebar.jsx              # Navigation sidebar (desktop + mobile)
│   │   └── ThemeSwitcher.jsx        # Theme dropdown (4 themes)
│   │
│   ├── pages/                       # Main application pages
│   │   ├── LandingPage.jsx          # Marketing/entry page (/)
│   │   ├── HomePage.jsx             # Recipe search page (/home)
│   │   └── FavoritesPage.jsx        # Saved recipes (/favorites)
│   │
│   ├── App.jsx                      # Main app component with routing
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles + animations
│
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── index.html                       # HTML entry point with PWA meta tags
├── package.json                     # Project dependencies
├── tailwind.config.js               # TailwindCSS + DaisyUI config
├── vite.config.js                   # Vite + PWA configuration
└── vercel.json                      # Vercel deployment config
```

---

## 🔧 Technical Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.2.0 |
| **Vite** | Build Tool & Dev Server | 5.2.12 |
| **TailwindCSS** | Utility-first CSS | 3.4.3 |
| **DaisyUI** | UI Components | 4.12.2 |
| **React Router** | Client-side routing | 6.23.1 |
| **Lucide React** | Icon library | Latest |
| **Vite PWA Plugin** | Service Worker & PWA | 1.1.0 |
| **Workbox** | Offline caching | Latest |

---

## 🎨 Features

### ✅ Core Features
- 🔍 **Recipe Search**: Search 2M+ recipes via EDAMAM API
- ❤️ **Favorites**: Save recipes locally (localStorage)
- 🎨 **4 Themes**: Light, Dark, Synthwave, Dracula
- 📱 **Fully Responsive**: Mobile-first design
- ⚡ **Rate Limiting**: 6-second delay between searches
- 🎯 **Optimized Results**: 5 recipes per search (to avoid API limits)

### 📱 PWA Features
- 🏠 **Installable**: Add to home screen (iOS/Android)
- 📴 **Offline Support**: Caches API responses for 24 hours
- 🔄 **Auto-updates**: Service worker updates automatically
- ⚡ **Fast Loading**: Assets cached for instant load
- 🎯 **Standalone Mode**: Runs like a native app

---

## 🔐 Environment Variables

### Required Variables (Add to Vercel):

```env
VITE_APP_ID=098860c2
VITE_APP_KEY=a070a4e3b089562569a89a7c5779b911
```

**Important**: These are **EDAMAM Recipe Search API v2** credentials.
- Free tier: 10 requests/minute, 10,000 requests/month
- App enforces 6-second delays to stay within limits

---

## 🚀 How It Works

### 1. Application Flow

```
User visits app
    ↓
Landing Page (/)
    ↓
Click "Get Started"
    ↓
Search Page (/home)
    ↓
Enter search term (e.g., "chicken")
    ↓
API Request to EDAMAM
    ↓
Display 5 recipes
    ↓
Click heart to save favorite
    ↓
View favorites (/favorites)
```

### 2. Data Flow

```javascript
// User searches for "pasta"
HomePage.jsx: handleSearchRecipes()
    ↓
Check rate limit (lastRequestTime + 6 seconds)
    ↓
Fetch: https://api.edamam.com/api/recipes/v2
    ?type=public
    &q=pasta
    &app_id=098860c2
    &app_key=a070a4e3...
    &from=0
    &to=5
    ↓
Service Worker caches response (24h)
    ↓
Display recipes in RecipeCard components
    ↓
User clicks ❤️ → Save to localStorage
```

### 3. Theme System

```javascript
// ThemeSwitcher.jsx
User clicks theme dropdown
    ↓
Select "synthwave"
    ↓
Update React state: setTheme("synthwave")
    ↓
useEffect runs:
    document.documentElement.setAttribute("data-theme", "synthwave")
    localStorage.setItem("theme", "synthwave")
    ↓
DaisyUI applies theme CSS globally
    ↓
All components update instantly
```

### 4. PWA Installation

```
User visits site (HTTPS required)
    ↓
Browser detects manifest.webmanifest
    ↓
Service Worker registers (sw.js)
    ↓
"Install App" prompt appears
    ↓
User installs → Icon added to home screen
    ↓
App opens in standalone mode (no browser UI)
```

### 5. Offline Caching

```javascript
// vite.config.js - Workbox Configuration
Service Worker intercepts network requests
    ↓
Check cache first (CacheFirst strategy)
    ↓
If cached: Return from cache (instant load)
    ↓
If not cached:
    - Fetch from network
    - Cache response (max 100 entries, 24h expiration)
    - Return to user
```

---

## 📱 Mobile Optimization

### Responsive Design
- **Mobile-first approach**: All styles designed for mobile, then scaled up
- **Breakpoints**:
  - Mobile: < 768px (sidebar becomes bottom nav)
  - Tablet: 768px - 1024px
  - Desktop: > 1024px (sidebar on left)

### Touch Optimization
- Large tap targets (min 44x44px)
- Smooth scroll animations
- Touch-friendly dropdowns
- Swipe-friendly card layouts

### Performance
- **Lazy loading**: Images load on demand
- **Code splitting**: Routes split into chunks
- **Asset optimization**: Images compressed, CSS purged
- **Service Worker**: Caches assets for instant load

### Mobile-Specific Features
```css
/* Responsive sidebar in Sidebar.jsx */
Mobile (< 768px):
  - Fixed bottom navigation
  - 2 nav items (Home, Favorites)
  - Theme switcher in bottom right

Desktop (> 768px):
  - Fixed left sidebar
  - Full navigation
  - Theme switcher at bottom
```

---

## 🎨 Theming System

### Available Themes
1. **Light** - Clean white background, blue accents
2. **Dark** - Dark background, light text
3. **Synthwave** - Retro neon pink/purple (80s vibe)
4. **Dracula** - Dark purple theme (elegant dark mode)

### How Themes Work
```javascript
// DaisyUI uses CSS variables based on data-theme attribute
<html data-theme="synthwave">

// All components use DaisyUI classes:
bg-base-100      → Main background
bg-base-200      → Secondary background
bg-base-300      → Tertiary background
text-base-content → Text color
btn-primary      → Primary button
```

### Adding New Themes
1. Edit `tailwind.config.js`:
```javascript
daisyui: {
  themes: ["light", "dark", "synthwave", "dracula", "forest"], // Add "forest"
}
```

2. Edit `src/components/ThemeSwitcher.jsx`:
```javascript
const THEMES = ["light", "dark", "synthwave", "dracula", "forest"]; // Add "forest"
```

---

## 🔄 API Integration

### EDAMAM Recipe Search API

**Endpoint**: `https://api.edamam.com/api/recipes/v2`

**Parameters**:
- `type=public` - Public recipes only
- `q=chicken` - Search query
- `app_id=098860c2` - Your app ID
- `app_key=a070...` - Your API key
- `from=0&to=5` - Return 5 results (pagination)

**Rate Limits**:
- Free tier: 10 requests/minute
- Monthly: 10,000 requests
- App enforces 6-second delay between searches

**Response Structure**:
```json
{
  "hits": [
    {
      "recipe": {
        "label": "Chicken Pasta",
        "image": "https://...",
        "source": "BBC Good Food",
        "url": "https://...",
        "dietLabels": ["Low-Carb"],
        "healthLabels": ["Sugar-Conscious"],
        "ingredientLines": ["2 chicken breasts", "..."],
        "calories": 450.5,
        "cuisineType": ["italian"]
      }
    }
  ]
}
```

---

## 🚀 Deployment Instructions

### Prerequisites
1. GitHub account
2. Vercel account (free)
3. Project pushed to GitHub

### Step-by-Step Deployment

#### 1. Push to Your GitHub Repository
```powershell
cd "c:\Users\derric samson\OneDrive\Desktop\recipe\recipe-app"

# Remove old remote (if exists)
git remote remove origin

# Add your repository
git remote add origin https://github.com/Derric01/recipeApp.git

# Stage all changes
git add .

# Commit
git commit -m "Recipe PWA app with mobile optimization"

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 2. Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" with GitHub
3. Click "Add New..." → "Project"
4. Import `recipeApp` repository
5. Vercel auto-detects settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

#### 3. Add Environment Variables
After deployment:
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add these variables:
   ```
   VITE_APP_ID = 098860c2
   VITE_APP_KEY = a070a4e3b089562569a89a7c5779b911
   ```
4. Click "Save"
5. Go to "Deployments" tab
6. Click "Redeploy" on latest deployment

#### 4. Get Your URL
Your app will be live at:
```
https://recipe-app-[random].vercel.app
```

You can customize the domain in Vercel settings!

---

## 💻 Local Development

### Setup
```powershell
# Clone repository
git clone https://github.com/Derric01/recipeApp.git
cd recipeApp

# Install dependencies
npm install

# Create .env file
Copy .env.example to .env
Add your EDAMAM credentials

# Start development server
npm run dev
```

### Available Scripts
```json
{
  "dev": "vite",                    // Start dev server (http://localhost:5173)
  "build": "vite build",            // Build for production
  "preview": "vite preview",        // Preview production build
  "lint": "eslint ."                // Check code quality
}
```

### Development Workflow
1. Make changes to code
2. Vite hot-reloads automatically
3. Test on mobile: Use `--host` flag
   ```powershell
   npm run dev -- --host
   ```
4. Access from phone: `http://YOUR_IP:5173`

---

## 🧪 Testing PWA Locally

### Build and Serve
```powershell
# Build production version
npm run build

# Serve locally
npx serve dist -p 3000
```

### Test PWA Features
1. Open Chrome DevTools (F12)
2. Go to "Application" tab
3. Check:
   - **Manifest**: Should show app name, icons, theme
   - **Service Workers**: Should be "activated and running"
   - **Storage**: Check localStorage for favorites/theme
   - **Cache Storage**: Should show cached assets

### Test on Mobile
1. Build and deploy to Vercel
2. Visit URL on phone
3. **iOS**: Safari → Share → Add to Home Screen
4. **Android**: Chrome → Menu → Install app
5. Open from home screen (should open without browser UI)

---

## 🐛 Troubleshooting

### API Issues

**401 Unauthorized**
- Wrong API credentials
- Make sure you're using Recipe Search API v2 (not Nutrition API)
- Check environment variables in Vercel

**429 Rate Limit**
- Too many requests
- App enforces 6-second delay
- Free tier: 10/min, 10,000/month

### Build Issues

**Module not found**
```powershell
rm -rf node_modules
npm install
```

**Environment variables not working**
- Variables must start with `VITE_` prefix
- Restart dev server after adding .env
- Check vercel.json has correct values

### PWA Issues

**PWA not installing**
- Must use HTTPS (Vercel provides this)
- Check manifest in DevTools
- Verify Service Worker is registered

**Themes not working**
- Check browser console for errors
- Verify `data-theme` attribute on `<html>`
- Clear cache and hard reload (Ctrl+Shift+R)

---

## 📊 Performance Metrics

### Lighthouse Scores (Target)
- Performance: 90+ ⚡
- Accessibility: 95+ ♿
- Best Practices: 95+ ✅
- SEO: 90+ 🔍
- PWA: 100 📱

### Bundle Size
- Main JS: ~187 KB (gzipped: ~60 KB)
- CSS: ~58 KB (gzipped: ~10 KB)
- Total: ~245 KB (very optimized!)

### Loading Speed
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Fully loaded: < 4s

---

## 🔒 Security Best Practices

1. **API Keys**: Never commit .env to GitHub (already in .gitignore)
2. **HTTPS**: Always use HTTPS in production (Vercel provides)
3. **Rate Limiting**: Enforced to prevent API abuse
4. **XSS Protection**: React sanitizes inputs automatically
5. **CORS**: API calls only from your domain

---

## 📈 Future Enhancements

Potential features to add:
- [ ] User authentication (Firebase/Supabase)
- [ ] Recipe collections/folders
- [ ] Share recipes via link
- [ ] Print recipe function
- [ ] Meal planning calendar
- [ ] Shopping list generator
- [ ] Recipe ratings/reviews
- [ ] Multi-language support
- [ ] Dark mode auto-switch (based on system)
- [ ] Recipe import from URL

---

## 👥 Team Collaboration

### Git Workflow
```powershell
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push to GitHub
git push origin feature/new-feature

# Create Pull Request on GitHub
# After review, merge to main
# Vercel auto-deploys main branch
```

### Code Style
- Use functional components with hooks
- Follow ESLint rules
- Use TailwindCSS utility classes
- Keep components small and focused
- Add comments for complex logic

---

## 📞 Support & Resources

- **EDAMAM API Docs**: https://developer.edamam.com/edamam-docs-recipe-api
- **DaisyUI Themes**: https://daisyui.com/docs/themes/
- **Vite PWA Plugin**: https://vite-pwa-org.netlify.app/
- **React Router Docs**: https://reactrouter.com/
- **TailwindCSS Docs**: https://tailwindcss.com/docs

---

## ✅ Pre-Deployment Checklist

- [ ] .env added to .gitignore
- [ ] All changes committed to Git
- [ ] Pushed to GitHub repository
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Environment variables added to Vercel
- [ ] Deployment successful
- [ ] PWA installs on mobile
- [ ] API calls working
- [ ] Themes switching correctly
- [ ] Favorites saving locally

---

**Built with ❤️ by the Recipe App Team**

For questions, contact: [Your team contact info]

Last updated: November 2, 2025
