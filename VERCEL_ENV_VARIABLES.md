# 🔐 Vercel Environment Variables

## Copy these exact values to Vercel:

### Variable 1:
```
Name: VITE_APP_ID
Value: 098860c2
```

### Variable 2:
```
Name: VITE_APP_KEY
Value: a070a4e3b089562569a89a7c5779b911
```

---

## ⚙️ How to Add in Vercel:

1. Go to your project on [vercel.com](https://vercel.com)
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in left sidebar
4. For each variable:
   - Enter the **Name** (e.g., `VITE_APP_ID`)
   - Enter the **Value** (e.g., `098860c2`)
   - Select all environments: **Production**, **Preview**, **Development**
   - Click **"Save"**

5. After adding both variables:
   - Go to **"Deployments"** tab
   - Click **"..."** on the latest deployment
   - Click **"Redeploy"**
   - Select **"Use existing Build Cache"**
   - Click **"Redeploy"**

---

## ✅ Verification:

After redeployment:
1. Visit your deployed URL
2. Click "Get Started" on landing page
3. Search for a recipe (e.g., "chicken")
4. Should see 5 recipe results
5. If you see recipes → Environment variables are working! ✅

---

## 🐛 Troubleshooting:

**401 Unauthorized Error?**
- Double-check the values are exactly as shown above
- Make sure variable names start with `VITE_` (case-sensitive)
- Redeploy after adding variables

**No results showing?**
- Check browser console (F12) for errors
- Verify both variables are added
- Try clearing cache and redeploying

---

## 📝 Notes:

- These are **EDAMAM Recipe Search API v2** credentials
- Free tier: 10 requests/minute, 10,000/month
- App enforces 6-second delay between searches
- No credit card required for free tier

---

**Need help?** See [TEAM_DOCUMENTATION.md](./TEAM_DOCUMENTATION.md) for detailed troubleshooting.
