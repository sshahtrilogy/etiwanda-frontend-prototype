# Setup Instructions for New Repository

## Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `etiwanda-frontend-prototype` (or any name you prefer)
3. Make it **Public** (required for free GitHub Pages)
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **Create repository**

## Step 2: Push This Code

After creating the repo, GitHub will show you commands. Use these:

```bash
cd /Users/shailtrilogynextgen/Desktop/etiwanda-frontend-prototype
git remote add origin https://github.com/YOUR-USERNAME/etiwanda-frontend-prototype.git
git branch -M main
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your new repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** in the left sidebar
4. Under **Source**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **Save**

## Step 4: Access Your Site

Wait 1-2 minutes, then visit:
```
https://YOUR-USERNAME.github.io/etiwanda-frontend-prototype/
```

## Step 5: Link from Figma

Use the GitHub Pages URL above to link your Figma prototype.

