# Deployment Guide - Cloudflare Pages

This guide walks you through deploying your portfolio to Cloudflare Pages.

## Prerequisites

- A GitHub account
- A Cloudflare account (free tier works perfectly)
- Your code pushed to a GitHub repository

## Step 1: Push to GitHub

If you haven't already, push your portfolio to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/my-portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 2: Connect to Cloudflare Pages

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** in the sidebar
3. Click **Create a project**
4. Select **Connect to Git**
5. Authorize Cloudflare to access your GitHub account
6. Select your portfolio repository

## Step 3: Configure Build Settings

Use these exact settings:

- **Production branch:** `main` (or your default branch)
- **Framework preset:** `Next.js`
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Root directory:** `/` (leave as default)

### Environment Variables

No environment variables are needed for this static site.

## Step 4: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at `https://your-project.pages.dev`

## Step 5: Add Custom Domain (Optional)

1. Go to your Cloudflare Pages project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain name
5. Follow the DNS configuration instructions

## Automatic Deployments

Every time you push to your main branch, Cloudflare Pages will automatically:
- Detect the changes
- Build your site
- Deploy the new version
- Keep previous versions for rollback

## Build Configuration

The site uses Next.js static export. Key configurations:

### `next.config.js`
```javascript
output: 'export',        // Static export
images: {
  unoptimized: true,    // Required for static export
}
```

### `package.json` scripts
```json
"build": "next build",   // Builds static files to /out
```

## Troubleshooting

### Build Fails

**Check the build logs** in Cloudflare Pages dashboard:
- Common issue: Missing dependencies
- Solution: Ensure all dependencies are in `package.json`

### Images Not Loading

- Ensure images are in `public/` directory
- Reference them with leading slash: `/projects/image.png`
- Check that `images.unoptimized: true` is in `next.config.js`

### 404 on Routes

- This is a single-page app - no routing needed
- All navigation uses hash links (`#section`)
- No additional routing configuration required

### Environment Variables

If you add any environment variables later:
1. Go to **Settings** > **Environment variables** in Cloudflare Pages
2. Add variables for Production, Preview, or both
3. Redeploy your site

## Preview Deployments

Cloudflare Pages automatically creates preview deployments for:
- Pull requests
- Non-production branches

Each preview gets a unique URL like:
`https://abc123.your-project.pages.dev`

## Performance Optimization

Your site benefits from Cloudflare's global CDN:
- ✅ 300+ edge locations worldwide
- ✅ Automatic HTTPS
- ✅ DDoS protection
- ✅ Automatic compression
- ✅ HTTP/2 & HTTP/3 support

## Security Headers (Optional)

Add security headers in Cloudflare Pages:

1. Create `public/_headers` file:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: no-referrer
  Permissions-Policy: geolocation=(), microphone=(), camera=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;
```

2. Redeploy your site

## Rollback

To rollback to a previous version:
1. Go to **Deployments** in Cloudflare Pages
2. Find the deployment you want to restore
3. Click **...** > **Rollback to this deployment**

## Cost

Cloudflare Pages is **FREE** for:
- Unlimited static requests
- Unlimited bandwidth
- 500 builds per month
- 1 build at a time

Perfect for portfolio sites!

## Support

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Cloudflare Community](https://community.cloudflare.com/)

---

**Your portfolio is now live!** 🎉

Share your link and showcase your cybersecurity skills to the world.
