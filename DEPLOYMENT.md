# Deployment Guide for StudyFrontier

## Prerequisites

- Node.js 18+ installed
- A Vercel account (free tier works)
- Git repository set up

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

## Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Environment Variables

No environment variables are required for basic functionality. WhatsApp number and contact info are hardcoded in the codebase.

If you want to make them configurable, create `.env.local` based on `.env.local.example`.

## Custom Domain Setup

1. Go to your Vercel project dashboard
2. Navigate to "Settings" > "Domains"
3. Add your custom domain (e.g., studyfrontier.com)
4. Update DNS records as instructed by Vercel
5. SSL certificates are automatically provisioned

## Performance Optimization

The site is already optimized with:

- ✅ Next.js 14 App Router
- ✅ Static generation where possible
- ✅ Image optimization (Next.js built-in)
- ✅ Code splitting
- ✅ CSS optimization with Tailwind
- ✅ Framer Motion animations (tree-shakeable)

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test language switcher (EN, FR, AR)
- [ ] Test WhatsApp button functionality
- [ ] Check mobile responsiveness
- [ ] Verify SEO metadata on all pages
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Check Lighthouse scores (aim for 90+ on all metrics)
- [ ] Submit sitemap to Google Search Console

## Monitoring

After deployment:

1. **Add to Google Search Console:**
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   
2. **Analytics (Optional):**
   - Add Google Analytics or Vercel Analytics

3. **Monitor Performance:**
   - Use Vercel's built-in analytics
   - Run regular Lighthouse audits

## Updating Content

All content is in `messages/*.json` files:
- `messages/en.json` - English
- `messages/fr.json` - French
- `messages/ar.json` - Arabic (Darija)

Edit these files to update text across the site, then redeploy.

## Support

For issues or questions:
- Check Next.js docs: https://nextjs.org/docs
- Check next-intl docs: https://next-intl-docs.vercel.app
- Vercel support: https://vercel.com/support
