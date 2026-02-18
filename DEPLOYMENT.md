# 🚀 Deployment Checklist - StudyFrontier

## Pre-Deployment Checklist

### ✅ Critical Configuration

- [ ] **Environment Variables** - Set in production hosting (Vercel/Netlify)
  ```env
  NEXT_PUBLIC_SITE_URL=https://yourdomain.com
  NEXT_PUBLIC_WHATSAPP_NUMBER=+212XXXXXXXXX
  NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE=Hello, I want to learn more about studying in the USA
  NEXT_PUBLIC_CONTACT_EMAIL=contact@yourdomain.com
  ```

- [ ] **Optional: Sentry Error Tracking**
  ```env
  NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn-here
  SENTRY_ORG=your-org
  SENTRY_PROJECT=your-project
  ```

- [ ] **Optional: Google Analytics**
  ```env
  NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
  ```

### ✅ Domain & DNS

- [ ] Domain registered and DNS configured
- [ ] SSL certificate enabled (auto with Vercel/Netlify)
- [ ] Update `NEXT_PUBLIC_SITE_URL` to production domain

### ✅ Content Review

- [ ] Update WhatsApp number in footer (`components/footer.tsx`)
- [ ] Update contact email if needed
- [ ] Replace founder image in `/public/images/founder.svg`
- [ ] Add OG image at `/public/images/og-image.png` (1200x630px)
- [ ] Add favicon files:
  - `/public/favicon.ico`
  - `/public/apple-touch-icon.png`
  - `/public/android-chrome-192x192.png`
  - `/public/android-chrome-512x512.png`

### ✅ SEO Setup

- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Search Console verification
- [ ] Add verification codes in `app/[locale]/layout.tsx` metadata

### ✅ Analytics Setup

- [ ] Vercel Analytics (auto-enabled in production)
- [ ] Optional: Add Google Analytics tracking ID
- [ ] Test analytics are firing correctly

### ✅ Testing

- [ ] Build succeeds: `npm run build`
- [ ] All tests pass: `npm run test`
- [ ] No linting errors: `npm run lint`
- [ ] Test all three locales: `/en`, `/fr`, `/ar`
- [ ] Test WhatsApp button works on mobile
- [ ] Test all legal pages load correctly
- [ ] Test 404 and error pages display properly

---

## Deployment Steps

### Option 1: Deploy to Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Configure Environment Variables**
   - Go to Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add all required environment variables listed above

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy to Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add in Netlify dashboard

### Option 3: Deploy to Other Platforms

Requirements:
- Node.js 18.17.0 or higher
- Build command: `npm run build`
- Start command: `npm start`
- Port: 3000 (default)

---

## Post-Deployment Checklist

### ✅ Immediate Tasks

- [ ] Test live site on desktop and mobile
- [ ] Verify WhatsApp integration works
- [ ] Check all pages load correctly
- [ ] Test language switching
- [ ] Verify meta tags with [Meta Tags Validator](https://metatags.io/)
- [ ] Test OG images with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Run Lighthouse audit (aim for 90+ in all categories)
- [ ] Test accessibility with [WAVE](https://wave.webaim.org/)

### ✅ SEO Tasks (First Week)

- [ ] Submit sitemap to search engines
- [ ] Set up Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Create and submit Google Business Profile
- [ ] Set up Google Analytics goals/events
- [ ] Monitor search console for errors

### ✅ Monitoring Setup

- [ ] Enable Sentry error tracking (if using)
- [ ] Set up uptime monitoring (e.g., UptimeRobot, Pingdom)
- [ ] Configure error alerts
- [ ] Monitor Core Web Vitals in Search Console

### ✅ Marketing Setup

- [ ] Create social media accounts
- [ ] Update social media links in footer
- [ ] Create LinkedIn company page
- [ ] Set up Facebook page
- [ ] Configure social media OG tags

---

## Performance Optimization

### Images

All images should be:
- **Optimized**: Use tools like TinyPNG, ImageOptim
- **Correct format**: WebP for photos, SVG for logos/icons
- **Sized properly**: Max 1200px width for hero images
- **OG Image**: Exactly 1200x630px for best social media display

### Lighthouse Targets

Aim for these scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## Security Checklist

- [x] Security headers configured (CSP, X-Frame-Options, etc.)
- [x] No sensitive data in client-side code
- [x] Environment variables properly secured
- [x] No API keys exposed in frontend
- [x] HTTPS enabled (automatic with Vercel/Netlify)
- [ ] Review and update CSP policy if adding new services
- [ ] Set up security monitoring (Sentry)

---

## Maintenance Schedule

### Weekly
- Check error logs in Sentry
- Review analytics for issues
- Monitor uptime

### Monthly
- Update dependencies: `npm update`
- Review and update content
- Check for broken links
- Review Core Web Vitals
- Backup data

### Quarterly
- Security audit
- Performance review
- Content strategy review
- SEO performance analysis

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart development server after changing variables
- Check Vercel/Netlify dashboard for correct values

### WhatsApp Link Not Working

- Verify number is in international format: `+212XXXXXXXXX`
- No spaces or special characters in the number
- Test on actual mobile device

---

## Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Emergency Contacts

- **Hosting Support**: Vercel/Netlify support
- **Domain Registrar**: Your domain provider
- **Technical Issues**: Check GitHub issues or Stack Overflow

---

**✅ Deployment Complete!**

Your StudyFrontier platform is now live and ready to help Moroccan students achieve their dreams of studying in the USA! 🎓🇺🇸
