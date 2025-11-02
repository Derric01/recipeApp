# 🚀 PWA Deployment Guide

Your Recipe App is now a **Progressive Web App (PWA)** that can be installed on mobile devices!

## ✅ What's Been Added:

- 📱 **Installable**: Users can add the app to their home screen
- 🔄 **Auto-updates**: App updates automatically
- 🎨 **App Icons**: Custom icons for different devices (192x192, 512x512)
- 📴 **Offline Support**: Caches API responses for offline access
- ⚡ **Fast Loading**: Service worker caches assets

---

## 🌐 Deploy to Vercel (Recommended)

### Step 1: Install Vercel CLI
```powershell
npm install -g vercel
```

### Step 2: Login to Vercel
```powershell
vercel login
```

### Step 3: Deploy
```powershell
cd "c:\Users\derric samson\OneDrive\Desktop\recipe\recipe-app"
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Choose your account
- Link to existing project? **No**
- What's your project's name? **recipe-app**
- In which directory is your code located? **./** (press Enter)
- Want to modify settings? **Yes**
- Build Command: **npm run build**
- Output Directory: **dist**
- Development Command: **npm run dev**

### Step 4: Add Environment Variables
After deployment, go to your Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add these variables:
   - `VITE_APP_ID` = `098860c2`
   - `VITE_APP_KEY` = `a070a4e3b089562569a89a7c5779b911`

### Step 5: Redeploy
```powershell
vercel --prod
```

---

## 🎯 Alternative: Deploy to Netlify

### Step 1: Install Netlify CLI
```powershell
npm install -g netlify-cli
```

### Step 2: Login and Deploy
```powershell
cd "c:\Users\derric samson\OneDrive\Desktop\recipe\recipe-app"
netlify login
netlify deploy
```

Follow the prompts:
- Create & configure a new site? **Yes**
- Team: Choose your team
- Site name: **recipe-app** (or leave blank for random)
- Publish directory: **dist**

### Step 3: Add Environment Variables
```powershell
netlify env:set VITE_APP_ID "098860c2"
netlify env:set VITE_APP_KEY "a070a4e3b089562569a89a7c5779b911"
```

### Step 4: Deploy to Production
```powershell
netlify deploy --prod
```

---

## 📱 How Users Install the PWA on Mobile:

### iOS (Safari):
1. Visit your deployed app URL
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

### Android (Chrome):
1. Visit your deployed app URL
2. Tap the menu (three dots)
3. Tap "Install app" or "Add to Home screen"
4. Tap "Install"

---

## 🧪 Test PWA Locally:

```powershell
npm run build
npx serve dist -p 3000
```

Then visit: http://localhost:3000

Check PWA features in Chrome DevTools:
1. Open DevTools (F12)
2. Go to "Application" tab
3. Check "Manifest" and "Service Workers"

---

## 📊 PWA Features Included:

✅ **Service Worker**: Caches assets and API responses  
✅ **Web App Manifest**: Defines app name, icons, colors  
✅ **Offline Support**: API responses cached for 24 hours  
✅ **App Icons**: 64x64, 192x192, 512x512 sizes  
✅ **Standalone Mode**: Runs like a native app  
✅ **Auto-update**: New versions load automatically  

---

## 🎨 Customize Your PWA:

### Change App Name:
Edit `vite.config.js`:
```javascript
manifest: {
  name: 'Your App Name',
  short_name: 'App',
  // ...
}
```

### Change Theme Color:
Edit `vite.config.js`:
```javascript
manifest: {
  theme_color: '#4F46E5', // Your color
  // ...
}
```

### Replace App Icon:
1. Replace `public/icon.svg` with your logo
2. Run: `npx pwa-assets-generator --preset minimal-2023 public/icon.svg`
3. Rebuild: `npm run build`

---

## 🔧 Troubleshooting:

### PWA not installing?
- Make sure you're using HTTPS (localhost is OK)
- Check browser console for errors
- Verify Service Worker is registered in DevTools

### Environment variables not working?
- Don't forget to add them in Vercel/Netlify dashboard
- Redeploy after adding variables
- Variables must start with `VITE_` prefix

### Build errors?
- Run `npm install` to ensure all packages are installed
- Clear cache: `rm -rf node_modules/.vite`
- Rebuild: `npm run build`

---

## 🎉 You're Ready!

Your app is now:
- ✅ Installable on mobile devices
- ✅ Works offline
- ✅ Loads super fast
- ✅ Ready for deployment

Choose Vercel or Netlify and deploy now! 🚀
