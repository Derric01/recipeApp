# 🚀 Git Deployment Commands

## Step-by-Step Commands to Push to GitHub

### 1. Check current status
```powershell
cd "c:\Users\derric samson\OneDrive\Desktop\recipe\recipe-app"
git status
```

### 2. Remove old remote (if exists)
```powershell
git remote remove origin
```

### 3. Add your GitHub repository
```powershell
git remote add origin https://github.com/Derric01/recipeApp.git
```

### 4. Stage all changes
```powershell
git add .
```

### 5. Commit with message
```powershell
git commit -m "Recipe PWA app with mobile optimization and PWA support"
```

### 6. Rename branch to main (if needed)
```powershell
git branch -M main
```

### 7. Push to GitHub
```powershell
git push -u origin main
```

---

## ⚠️ If Push Fails:

### Force push (only if needed):
```powershell
git push -u origin main --force
```

---

## ✅ After Successful Push:

1. Visit: https://github.com/Derric01/recipeApp
2. Your code should be visible!
3. Now deploy on Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import `recipeApp` repository
   - Add environment variables from `VERCEL_ENV_VARIABLES.md`
   - Deploy!

---

## 📋 Quick Copy-Paste All Commands:

```powershell
cd "c:\Users\derric samson\OneDrive\Desktop\recipe\recipe-app"
git remote remove origin
git remote add origin https://github.com/Derric01/recipeApp.git
git add .
git commit -m "Recipe PWA app with mobile optimization and PWA support"
git branch -M main
git push -u origin main
```

---

**Ready to deploy!** 🚀
