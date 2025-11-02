# 📱 Recipe PWA - Mobile Recipe Search App# 🍳 Recipe Finder App



A modern **Progressive Web App (PWA)** for searching and saving recipes. Fully optimized for mobile devices and can be installed like a native app on iOS and Android.A beautiful, modern React web application for discovering and saving your favorite recipes from around the world. Built with React, Vite, TailwindCSS, and powered by the EDAMAM Recipe API.



[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Derric01/recipeApp)![Demo App](/public/Screenshot_29.png)



![React](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.2.12-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.3-cyan) ![PWA](https://img.shields.io/badge/PWA-Enabled-green)## ✨ Features



---- 🔍 **Smart Recipe Search** - Find thousands of recipes instantly

- ❤️ **Save Favorites** - Bookmark recipes for quick access

## ✨ Features- 🎨 **Beautiful UI** - Modern gradient design with smooth animations

- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop

- 🔍 **Search 2M+ Recipes** - Powered by EDAMAM API- 🎥 **Video Tutorials** - One-click access to YouTube cooking videos

- ❤️ **Save Favorites** - LocalStorage persistence  - 🏷️ **Health Labels** - View dietary information and health tags

- 🎨 **4 Beautiful Themes** - Light, Dark, Synthwave, Dracula- 🍽️ **Serving Sizes** - Get accurate serving information

- 📱 **Install as App** - Works on iOS and Android- 🌍 **Cuisine Types** - Explore recipes from different cuisines

- 📴 **Offline Support** - Cached recipes work offline- ⚡ **Fast & Lightweight** - Built with Vite for optimal performance

- ⚡ **Lightning Fast** - Optimized with Service Worker- 💾 **Local Storage** - Favorites persist across sessions

- 🎯 **Mobile-First Design** - Fully responsive

- 🔄 **Auto-Updates** - New versions deploy automatically## 🛠️ Tech Stack



---- **Frontend:** React 18.2.0

- **Build Tool:** Vite 5.2.0

## 🚀 Quick Start- **Styling:** TailwindCSS 3.4.3 + DaisyUI 4.12.2

- **Routing:** React Router DOM 6.23.1

### Clone & Install- **Icons:** Lucide React

```bash- **API:** EDAMAM Recipe Search API v2

git clone https://github.com/Derric01/recipeApp.git

cd recipeApp## 🔑 API Setup

npm install

```Get your free EDAMAM API credentials:



### Environment Setup1. Visit [EDAMAM Developer Portal](https://developer.edamam.com/)

Create `.env` file:2. Sign up for a free account

```env3. Create a new application

VITE_APP_ID=098860c24. Select **"Recipe Search API"** (Important!)

VITE_APP_KEY=a070a4e3b089562569a89a7c5779b9115. Choose **"Developer"** plan (FREE - 10 requests/min, 10,000/month)

```6. Copy your Application ID and Application Key



### Run Development## 💻 Run Locally

```bash

npm run dev### Setup .env file

```

Open [http://localhost:5173](http://localhost:5173)Create a `.env` file in the root directory:



---```env

VITE_APP_ID=your_edamam_app_id

## 📱 Deploy to VercelVITE_APP_KEY=your_edamam_app_key

```

1. Push to GitHub

2. Go to [vercel.com](https://vercel.com)### Install dependencies

3. Import repository

4. Add environment variables:```bash

   - `VITE_APP_ID` = `098860c2`npm install

   - `VITE_APP_KEY` = `a070a4e3b089562569a89a7c5779b911````

5. Deploy!

### Start the app

**Detailed docs**: See [TEAM_DOCUMENTATION.md](./TEAM_DOCUMENTATION.md)

```bash

---npm run dev

```

## 🏗️ Tech Stack

Open [http://localhost:5173](http://localhost:5173) in your browser.

- React 18.2.0

- Vite 5.2.12  ### Build for production

- TailwindCSS + DaisyUI

- React Router```bash

- Vite PWA Pluginnpm run build

- EDAMAM API```



---## 🌐 Deployment Options



## 📂 Project Structure### Vercel (Recommended)

1. Push code to GitHub

```2. Import repository in Vercel

recipe-app/3. Add environment variables (`VITE_APP_ID`, `VITE_APP_KEY`)

├── src/4. Deploy!

│   ├── components/     # RecipeCard, Sidebar, ThemeSwitcher

│   ├── pages/          # Landing, Home, Favorites### Netlify

│   └── App.jsx1. Connect GitHub repository

├── public/             # PWA icons2. Add environment variables in site settings

└── vite.config.js      # PWA configuration3. Deploy!

```

### GitHub Pages

---- GitHub Actions workflow included in `.github/workflows/deploy.yml`

- Add API secrets in repository settings → Secrets and variables → Actions

## 📱 Mobile Installation- Enable GitHub Pages in repository settings

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
