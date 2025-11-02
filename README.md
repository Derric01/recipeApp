# 📱 Recipe PWA - Mobile Recipe App# 📱 Recipe PWA - Mobile Recipe Search App# 🍳 Recipe Finder App



A Progressive Web App for searching and saving recipes. Fully optimized for mobile devices and can be installed like a native app.



![React](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.2.12-purple) ![PWA](https://img.shields.io/badge/PWA-Enabled-green)A modern **Progressive Web App (PWA)** for searching and saving recipes. Fully optimized for mobile devices and can be installed like a native app on iOS and Android.A beautiful, modern React web application for discovering and saving your favorite recipes from around the world. Built with React, Vite, TailwindCSS, and powered by the EDAMAM Recipe API.



## ✨ Features



- 🔍 **Search 2M+ Recipes** - Powered by EDAMAM API[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Derric01/recipeApp)![Demo App](/public/Screenshot_29.png)

- ❤️ **Save Favorites** - LocalStorage persistence

- 🎨 **4 Beautiful Themes** - Light, Dark, Synthwave, Dracula  

- 📱 **Install as App** - Works on iOS and Android

- 📴 **Offline Support** - Cached recipes work offline![React](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.2.12-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.3-cyan) ![PWA](https://img.shields.io/badge/PWA-Enabled-green)## ✨ Features

- ⚡ **Lightning Fast** - Optimized with Service Worker



## 🚀 Quick Start

---- 🔍 **Smart Recipe Search** - Find thousands of recipes instantly

### Clone & Install

```bash- ❤️ **Save Favorites** - Bookmark recipes for quick access

git clone https://github.com/Derric01/recipeApp.git

cd recipeApp## ✨ Features- 🎨 **Beautiful UI** - Modern gradient design with smooth animations

npm install

```- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop



### Environment Setup- 🔍 **Search 2M+ Recipes** - Powered by EDAMAM API- 🎥 **Video Tutorials** - One-click access to YouTube cooking videos

Create a `.env` file in the root directory with your EDAMAM API credentials:

- ❤️ **Save Favorites** - LocalStorage persistence  - 🏷️ **Health Labels** - View dietary information and health tags

```env

VITE_APP_ID=your_app_id_here- 🎨 **4 Beautiful Themes** - Light, Dark, Synthwave, Dracula- 🍽️ **Serving Sizes** - Get accurate serving information

VITE_APP_KEY=your_app_key_here

```- 📱 **Install as App** - Works on iOS and Android- 🌍 **Cuisine Types** - Explore recipes from different cuisines



**Get FREE API keys** at: https://developer.edamam.com/edamam-recipe-api- 📴 **Offline Support** - Cached recipes work offline- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance

- Sign up for free

- Choose "Recipe Search API"- ⚡ **Lightning Fast** - Optimized with Service Worker- 💾 **Local Storage** - Favorites persist across sessions

- Developer plan: 10 requests/min, 10,000/month (FREE)

- 🎯 **Mobile-First Design** - Fully responsive

### Run Development Server

```bash- 🔄 **Auto-Updates** - New versions deploy automatically## 🛠️ Tech Stack

npm run dev

```

Open [http://localhost:5173](http://localhost:5173)

---- **Frontend:** React 18.2.0

### Build for Production

```bash- **Build Tool:** Vite 5.2.0

npm run build

```## 🚀 Quick Start- **Styling:** TailwindCSS 3.4.3 + DaisyUI 4.12.2



## 📱 Deploy to Vercel- **Routing:** React Router DOM 6.23.1



### Quick Deploy### Clone & Install- **Icons:** Lucide React

1. Push code to GitHub

2. Go to [vercel.com](https://vercel.com)```bash- **API:** EDAMAM Recipe Search API v2

3. Sign in with GitHub

4. Click "Add New..." → "Project"git clone https://github.com/Derric01/recipeApp.git

5. Import `recipeApp` repository

6. Click "Deploy"cd recipeApp## 🔑 API Setup



### Add Environment Variables (IMPORTANT!)npm install

After deployment:

1. Go to Project Settings → Environment Variables```Get your free EDAMAM API credentials:

2. Add your EDAMAM credentials:

   - `VITE_APP_ID` = your app ID

   - `VITE_APP_KEY` = your app key

3. Select all environments (Production, Preview, Development)### Environment Setup1. Visit [EDAMAM Developer Portal](https://developer.edamam.com/)

4. Redeploy from Deployments tab

Create `.env` file:2. Sign up for a free account

## 🏗️ Tech Stack

```env3. Create a new application

- **Frontend**: React 18.2.0

- **Build Tool**: Vite 5.2.12VITE_APP_ID=098860c24. Select **"Recipe Search API"** (Important!)

- **Styling**: TailwindCSS + DaisyUI

- **Routing**: React Router DOMVITE_APP_KEY=a070a4e3b089562569a89a7c5779b9115. Choose **"Developer"** plan (FREE - 10 requests/min, 10,000/month)

- **PWA**: Vite PWA Plugin + Workbox

- **API**: EDAMAM Recipe Search API```6. Copy your Application ID and Application Key



## 📂 Project Structure



```### Run Development## 💻 Run Locally

recipeApp/

├── public/              # PWA icons & static assets```bash

├── src/

│   ├── components/      # RecipeCard, Sidebar, ThemeSwitchernpm run dev### Setup .env file

│   ├── pages/          # LandingPage, HomePage, FavoritesPage

│   ├── App.jsx         # Main app with routing```

│   └── main.jsx        # Entry point

├── .env.example        # Environment templateOpen [http://localhost:5173](http://localhost:5173)Create a `.env` file in the root directory:

└── vite.config.js      # Vite + PWA config

```



## 📱 Mobile Installation---```env



### iOS (Safari):VITE_APP_ID=your_edamam_app_id

1. Visit your deployed app URL

2. Tap **Share** button## 📱 Deploy to VercelVITE_APP_KEY=your_edamam_app_key

3. Tap **"Add to Home Screen"**

4. Tap **"Add"**```



### Android (Chrome):1. Push to GitHub

1. Visit your deployed app URL

2. Tap **Menu** (three dots)2. Go to [vercel.com](https://vercel.com)### Install dependencies

3. Tap **"Install app"**

4. Tap **"Install"**3. Import repository



## 🎨 Available Themes4. Add environment variables:```bash



- **Light** - Clean white theme   - `VITE_APP_ID` = `098860c2`npm install

- **Dark** - Dark mode

- **Synthwave** - Retro neon 80s vibe   - `VITE_APP_KEY` = `a070a4e3b089562569a89a7c5779b911````

- **Dracula** - Elegant purple dark theme

5. Deploy!

## 🛠️ Development

### Start the app

### Available Scripts

```bash**Detailed docs**: See [TEAM_DOCUMENTATION.md](./TEAM_DOCUMENTATION.md)

npm run dev      # Start dev server

npm run build    # Build for production```bash

npm run preview  # Preview production build

```---npm run dev



### Test PWA Locally```

```bash

npm run build## 🏗️ Tech Stack

npx serve dist -p 3000

```Open [http://localhost:5173](http://localhost:5173) in your browser.



Check PWA features in Chrome DevTools → Application tab- React 18.2.0



## 📊 Performance- Vite 5.2.12  ### Build for production



- Bundle Size: ~245 KB (gzipped)- TailwindCSS + DaisyUI

- Lighthouse Score: 90+ all metrics

- First Load: < 3 seconds- React Router```bash

- Offline Ready: ✅

- Vite PWA Pluginnpm run build

## 🔒 Security

- EDAMAM API```

- ✅ Environment variables not committed to Git

- ✅ HTTPS enforced (Vercel provides SSL)

- ✅ Rate limiting to prevent API abuse

- ✅ XSS protection (React sanitization)---## 🌐 Deployment Options



## 🐛 Troubleshooting



### API not working?## 📂 Project Structure### Vercel (Recommended)

- Verify environment variables are set correctly

- Check you're using Recipe Search API v2 (not Nutrition API)1. Push code to GitHub

- Free tier: 10 requests/minute max

```2. Import repository in Vercel

### PWA not installing?

- Must use HTTPS (Vercel provides this)recipe-app/3. Add environment variables (`VITE_APP_ID`, `VITE_APP_KEY`)

- Check Service Worker in DevTools

- Clear cache and try again├── src/4. Deploy!



### Build errors?│   ├── components/     # RecipeCard, Sidebar, ThemeSwitcher

```bash

rm -rf node_modules│   ├── pages/          # Landing, Home, Favorites### Netlify

npm install

npm run build│   └── App.jsx1. Connect GitHub repository

```

├── public/             # PWA icons2. Add environment variables in site settings

## 📄 License

└── vite.config.js      # PWA configuration3. Deploy!

Open source - MIT License

```

## 🙏 Acknowledgments

### GitHub Pages

- EDAMAM - Recipe API provider

- DaisyUI - UI components---- GitHub Actions workflow included in `.github/workflows/deploy.yml`

- Vite PWA - PWA plugin

- Add API secrets in repository settings → Secrets and variables → Actions

---

## 📱 Mobile Installation- Enable GitHub Pages in repository settings

**Made with ❤️ - Star ⭐ if you find this helpful!**

- Push to main branch to trigger deployment

### iOS: Safari → Share → "Add to Home Screen"

### Android: Chrome → Menu → "Install app"## 📁 Project Structure



---```

recipe-app/

## 📚 Documentation├── src/

│   ├── components/      # Reusable components

- 📖 [**Team Documentation**](./TEAM_DOCUMENTATION.md) - Complete technical guide│   │   ├── RecipeCard.jsx

- 🚀 [PWA Deployment Guide](./PWA_DEPLOYMENT.md)│   │   └── Sidebar.jsx

- 🎯 [Quick Deploy Guide](./QUICK_DEPLOY_GUIDE.md)│   ├── pages/           # Page components

│   │   ├── LandingPage.jsx

---│   │   ├── HomePage.jsx

│   │   └── FavoritesPage.jsx

## 🔐 Environment Variables for Vercel│   ├── lib/             # Utility functions

│   │   └── utils.js

```env│   ├── App.jsx          # Main app component

VITE_APP_ID=098860c2│   ├── main.jsx         # Entry point

VITE_APP_KEY=a070a4e3b089562569a89a7c5779b911│   └── index.css        # Global styles

```├── public/              # Static assets

├── .env                 # Environment variables (not committed)

Add these in Vercel → Settings → Environment Variables├── .env.example         # Example environment file

└── .github/workflows/   # GitHub Actions

---```



## 📊 Performance## 🎨 Key Features



- Bundle: ~245 KB (gzipped)### Landing Page

- Lighthouse: 90+ all metrics- Beautiful hero section with animated gradients

- Offline: ✅ Full support- Feature highlights

- Call-to-action buttons

---- Floating recipe card animations



**Made with ❤️ - Star ⭐ if you find this helpful!**### Recipe Search

- Real-time search with EDAMAM API
- Rate limiting protection (6 second delay between requests)
- Loading skeletons
- Error handling with clear messages

### Recipe Cards
- Hover animations and transitions
- Health labels and dietary information
- Cuisine type badges
- YouTube tutorial links
- One-click favorite toggle

### Favorites System
- LocalStorage persistence
- Beautiful empty state
- Quick access to saved recipes

## 🐛 Troubleshooting

**API 401 Unauthorized:**
- Verify your API credentials in `.env`
- Ensure you selected "Recipe Search API" (not Nutrition API)
- Check if your EDAMAM account email is verified

**API 429 Rate Limit:**
- Free tier: 10 requests per minute
- App includes 6-second delay between searches
- Wait 1 minute if you hit the limit

**Build Fails:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Favorites Not Saving:**
- Check if browser localStorage is enabled
- Disable private/incognito mode

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_APP_ID` | EDAMAM Application ID | Yes |
| `VITE_APP_KEY` | EDAMAM Application Key | Yes |

## 🚀 Deployment Checklist

- [ ] Get EDAMAM API credentials
- [ ] Configure `.env` file locally
- [ ] Test app locally
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Add API secrets to deployment platform
- [ ] Deploy and test production build
- [ ] Update README with live demo link

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Recipe data powered by [EDAMAM](https://www.edamam.com/)
- Icons by [Lucide](https://lucide.dev/)
- UI components by [DaisyUI](https://daisyui.com/)
- Built with [Vite](https://vitejs.dev/)
- Original tutorial: [YouTube](https://youtu.be/Z_AWfuJXXCI)

---

Made with ❤️ for food lovers everywhere

⭐ Star this repo if you found it helpful!
