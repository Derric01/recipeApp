# 🔧 API Troubleshooting Guide

## Current Issue: 401 Unauthorized Error

### Most Common Causes:

### 1. **Wrong API Selected** ⚠️ (MOST LIKELY)
You need the **Recipe Search API**, NOT the Nutrition API or other APIs.

**How to Fix:**
1. Go to https://developer.edamam.com/
2. Log in to your account
3. Click **"Admin"** → **"Applications"**
4. Check if your application is for **"Recipe Search API"**
5. If it says "Nutrition Analysis API" or anything else, you need to create a NEW application:
   - Click **"Create a new application"**
   - Select **"Recipe Search API"**
   - Choose **"Developer"** plan (FREE)
   - Copy the NEW credentials

### 2. **Email Not Verified**
- Check your email inbox (including spam)
- Look for verification email from EDAMAM
- Click the verification link

### 3. **Account/API Not Activated**
- Sometimes it takes a few minutes for new applications to activate
- Try waiting 5-10 minutes and refresh

### 4. **API Endpoint Issue**
The Recipe Search API v2 endpoint should be:
```
https://api.edamam.com/api/recipes/v2
```

With these parameters:
- `app_id` - Your Application ID
- `app_key` - Your Application Key
- `type=public`
- `q=search_term`

---

## ✅ Step-by-Step Fix:

### Option A: Verify Current Application

1. Go to: https://developer.edamam.com/admin/applications
2. Find your application
3. **Check the API Type** - it MUST say "Recipe Search API"
4. If correct, verify your email and wait a few minutes

### Option B: Create New Application (Recommended)

1. Go to: https://developer.edamam.com/
2. Click **"Admin"** → **"Applications"**
3. Click **"Create a new application"**
4. Fill in:
   - **Application Name**: Recipe Finder App
   - **Select API**: Choose **"Recipe Search API"** (NOT Nutrition!)
   - **Plan**: Developer (FREE - 10 requests/min, 10,000/month)
5. Click **"Create"**
6. Copy your NEW:
   - Application ID
   - Application Keys (first one)
7. Give me the new credentials and I'll update the `.env` file

---

## 🧪 Test Your API Keys

You can test if your keys work by visiting this URL in your browser:

```
https://api.edamam.com/api/recipes/v2?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&type=public&q=chicken
```

Replace YOUR_APP_ID and YOUR_APP_KEY with your actual credentials.

**Expected Result:**
- If it works: You'll see JSON data with recipes
- If 401 error: Wrong API type or unverified account
- If 403 error: Rate limit or domain restriction

---

## 📸 What to Check in EDAMAM Dashboard

When you're in your EDAMAM dashboard, you should see:

```
Application Name: [Your App Name]
API: Recipe Search API  ← THIS IS CRITICAL!
Plan: Developer (FREE)
Status: Active
```

**Screenshot what you see and I can help you troubleshoot!**

---

## Quick Actions:

1. Check your email for EDAMAM verification
2. Verify which API type your application is using
3. If wrong API, create a new application for Recipe Search API
4. Give me the new credentials
5. I'll update the code and we'll test again

Let me know what you find! 🔍
